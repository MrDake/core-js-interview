// Объек - неформальная колекция пар ключ-значение

// Формы объектов:
//      - декларативная (литеральная)

//      - сконструированная

// декларативный (предпочитаемый)
const pref = '!> over <!';
const obj = {
    name: 'Alex',
    [pref + (3 * 5 / 2 - 0.5)]: 'Frim',
}
console.log( obj.name === obj[name] );
console.log( obj );

// сконструированный
const oldObj = Object.create(Object.prototype);
oldObj.name = 'Alex';
oldObj[pref + (3 * 5 / 2 - 0.5)] = 'Frim';
console.log( oldObj );

const objWithMethod = {
    func: function() { console.log('this is a function') },
    method() { console.log('this is a method') }
}
objWithMethod.func();
objWithMethod.method();
// считать что функция и метод это синонимы в JS в контекте объекта

const prop = Object.getOwnPropertyDescriptor( obj, "name" );
console.log( prop );
// {
//     value: "Alex"
//     writable: true
//     enumerable: true
//     configurable: true
// }
// writable (возможность записи),
// enumerable (перечисляемость)
// configurable (возможность настройки)

Object.defineProperty(obj, 'name', {
    value: "Alex",
    writable: false,
    enumerable: false,
    configurable: false
})
console.log( Object.getOwnPropertyDescriptor(obj, 'name') )

// Object.preventExtensions(..)
//      запрет расширения свойств
// Object.seal(..) создает «запечатанный» объект
//      Object.preventExtensions(..) + configurable:false
// Object.freeze(..) создает «замороженный» объект
//      Object.seal(..) + writable:false

// [[Get] - когда мы обращаетмся к obj.prop мы запускаем внутреннюю операцию
// [[Get]]() который ищет свойсвто в этом объекте и если ненаходит
// то делает обход по [[Prototype]] если и там не находит
// то выдает undefined

// [[Put]] - проверяет следующее:
//      - является ли св-во дескриптером функции
//          тогда вызывается set-функция
//      - writeble: false ? 
//          'use strict' ? TypeError : тихий сбой
//      - в остальных случаях значение присваевается св-ву

// getter / setter
const newObj = {
    _a: 'nihcheugo',
    get a() { return this._a },
    set a(value) { this._a =  value }
}
newObj.a = 'some';
console.log( newObj.a );


// Поиск свойств

// нашел name даже с enumerable: false
console.log(
    `have "name" prop in obj? -${
        obj.hasOwnProperty('name')
    }-
    have method toString? -${
        obj.hasOwnProperty('toString')
    }-`
)

console.log(`toString in obj with prototypes? ${
    'toString' in obj
}` )

console.log(`name in obj with prototypes? ${
    'name' in obj
}` )

// нашел name даже с enumerable: false
// и пренадлежит только этому объекту
console.log( Object.getOwnPropertyNames(obj) );

// нашел все что с enumerable: true
console.log( Object.keys(obj) );
console.log( Object.entries(obj) );


// Массивы
console.log('--------------------------------------------------');

const arr = ['1', '2', '3'];
arr.newProp = 'new';
arr['100'] = 100;
console.log( arr[27] )
arr.method = function() {
    console.log( ` >> ${this[2]} <<`)
}
arr.method()
console.log(arr);