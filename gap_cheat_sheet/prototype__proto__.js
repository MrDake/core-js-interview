// __proto__ это нестандартный аксессор к скрытому св-ву [[Prototype]]
// который есть у любого объекта
// который является геттером и сеттером прототипа

// Исполбзовать __proto__ в работе крайне не рекомендуется во избежания проблем
// Object.setPrototypeOf
// Object.getPrototypeOf

// Объект, на который указывает ссылка __proto__, 
// называется «прототипом»

// Служит для вязи унаследованных объектов.
// Если в объекте нету нужного свойства, то JS ищет это свойство в 
// цепочке прототипов доступных по ссылке __proto__

// prototype обычное свойство фунткции-конструктора существующие с давних времен
// содержит в себе единственное свойство constructor которое указывает на
// саму функцию-конструктора


// с. 255 Кайн Симпсон "you don't know JS"
// Наследование подразумевает операцию копирования, а JavaScript
// не копирует свойства объектов (по умолчанию). Вместо этого JS
// создает связь между двумя объектами, благодаря которой один
// объект может делегировать обращения к свойствам/функциям
// другому объекту. Термин «делегирование» (см. главу 11) гораздо

function Some(magic) {
    this.magic = magic;
}

const some = new Some('this is the magic');

console.log('----- some -----');
console.log(typeof some); // object
console.log(some.constructor === some.__proto__.constructor); // true
console.log(some.prototype); // undefined
console.log(some.__proto__ === Some.prototype);

console.log('----- Some.prototype -----');
console.log(typeof Some.prototype); // object
console.log(Some.prototype.constructor === Some); // true
console.log(Some.prototype.prototype); // undefined
console.log(Some.prototype.__proto__ === Object.prototype);

console.log('----- Function.prototype -----');
console.log(typeof Function.prototype); // function
console.log(Function.prototype.constructor === Function); // true
console.log(Function.prototype.prototype); // undefined
console.log(Function.prototype.__proto__ === Object.prototype);

console.log('----- Object.prototype -----');
console.log(typeof Object.prototype); // object
console.log(Object.prototype.constructor === Object); // true
console.log(Object.prototype.prototype); // undefined
console.log(Object.prototype.__proto__ === null);

console.log('----- null -----');
console.log(typeof null); // object

console.log('----- Some -----');
console.log(typeof Some); // function
console.log(Some.constructor === Function.prototype.constructor); // === Function
console.log(Some.prototype === some.__proto__); // true
console.log(Some.__proto__ === Function.prototype); // true

console.log('----- Function -----');
console.log(typeof Function); // function
console.log(Function.constructor === Function.prototype.constructor); // === Function
console.log(Function.prototype === Object.__proto__); // true
console.log(Function.__proto__ === Function.prototype); // true

console.log('----- Object -----');
console.log(typeof Object); // function
console.log(Object.constructor === Function.prototype.constructor); // === Function
console.log(Object.prototype === Function.prototype.__proto__); // true
console.log(Object.__proto__ === Function.prototype); // true

// console.log(Object.constructor === Function)

console.log('----- Array -----');
console.log(typeof Array); // function
console.log(Array.constructor === Function); // true
console.log(Array.prototype.__proto__ === Object.prototype); // true
console.log(Array.__proto__ === Function.prototype); // true

// Вопрос, на который отвечает isPrototypeOf(..), вы-
// глядит так: встречается ли во всей цепочке [[Prototype]] объекта
// a объект Foo.prototype ?

// Object.getPrototypeOf(obj) === FunctionName.prototype; // true