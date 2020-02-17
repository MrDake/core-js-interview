// This это неявный объект контекста выполнения
// доступный из кода
// для возможности применения этого кода для разных объектов

// This = глобальный объект window/global в случаях:

function log(value) { console.log(value) }

// 1. в глобальное лексическое окружение
log(this); // window

// 2. вызов обычной функции в глобальной области видисмости
function some() { log(this) } // window
some();
// даже при глубокой вложенности
function matreshka() {
    function bigDol() {
        log(this) // window
    }
    bigDol();
}
matreshka();

// 3. IIFE (Immediately Invoked Function Expression)
// в самовызываюзейся функции в любом месте
(function() { log(this) })(); // window

// 4. Вызов функции внутри метода объекта
const object = {
    name: 'Alex',
    print: function() { 
        log(this.name); // Alex
        function printInside() { log(this) } // window
        printInside();
        const arrowFptint = () => log(this.name) // Alex
        arrowFptint();
    },
    property: {
        newName: 'Frim',
        oneMoreProperty: {
            name: 'Kira',
            nameBefore: () => log(this), 
            trulynameBefore: function() {
                const getit = () => log(this.name);
                getit();
            },
            lookAtWindow: () => log(this), // window
            sayThatName: function() {
                log(this.name) // Kira
                function windowInside() { log(this) } // window
                windowInside();
                const sayThatNameInside = () => log(this.name) // Kira
                sayThatNameInside();
                const whatIsNameBefore = () => {
                    this.nameBefore(); // window
                    this.trulynameBefore(); // Kira (not so truly)
                }
                whatIsNameBefore()
            }
        }
    }
}
object.print()
object.property.oneMoreProperty.lookAtWindow()
object.property.oneMoreProperty.sayThatName()

// В методах объекта this равен "тому что перед точкой" 
// т.е. объекту в котором об объявлен
// У стрелочной функции нет своего this
// она захватывает его из внешного окружения

// для восстановления потери объекта контектса существуют методы
// call() | functionName.call(this, arg1, arg2, ...)
// apply() | functionName.apply(this, [arg1, arg2, ...])
// bind() | newFunctionName = functionName.bind(this, arg1, arg2, ...)

// они первым аргументом явно указывают объект контеста и вызывают функцию
// кроме bind()
// он создает новую функцию
// с его помощью допускается частичное применение аргументов (карирование)