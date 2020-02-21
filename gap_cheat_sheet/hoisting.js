// Hoisting
// Процесс "поднятия" переменных и функций,
// в зависимости от способа их инициализации,
// на верх глобальной, функциональной или блочной области видимости.

// Счистается, что 
// объявления функций всплывает над объявлением переменной, (declaration)
// но не над присвоением ей значения. (assiment)

// Сам термин не встречается в документации JS и задумывался как общий способ
// мышления о работе JS кода.
// На самом деле физически переменные и функции никуда не перемещаются, 
// а попадают в память в процессе компиляции кода.
// ------- стоит ли говорить о процессе  компиляции? --------

// Нужно понимать что V8 (движок JS) работает по схеме JIT (Just in Time) 
// и имеет несколько стадий обработки кода.
// И в них присутствует и интерпритация (когда код на лету построчно
// преобразуясь в ByteCode) и компиляций (когда переданный профайлером
// котокрый ищет оптимизацию
// код преобрауется в оптимизированный машинный код)
// -> Parser (идерцифицирует части | определяет функция это или переменная или...)
// -> AST (абстрактные синтаксичаские деревья)
// -> Interpreter -> ByteCode
//                 -> Profiler
//                 -> Compiler -> Optimized Code


console.log(typeof myName, myName);
var myName;
function myName() {}
console.log(typeof myName, myName);
myName = 'Alex';
console.log(typeof myName, myName);
var myName = 'Frim';
console.log(typeof myName, myName); // можно переобъявить, не будет ошибки

console.log('-------------------')

// console.log(typeof myName);
// function myName() {}
// console.log(typeof myName);
// var myName = 'Alex';
// console.log(typeof myName);

console.log('-------------------')

// console.log(typeof es6_name); // ReferenceError: Cannot access 'es6_name' before initialization 
let es6_name;
console.log(typeof es6_name, es6_name); // undefined
es6_name = 'Alex';
console.log(typeof es6_name, es6_name); // string

// let es6_name = 'Frim';
// console.log(typeof es6_name, name); // SyntaxError: Identifier 'es6_name' has already been declared
// function es6_name() {} // SyntaxError: Identifier 'es6_name' has already been declared
// нельза переобъявить


// (но это не точно!!!!) изходя из этго примера видно, что во время парсинга кода
// bbb с кинтаксической ошибкой
// что процесс инициализации для const не завершен
// такой же примел для лет не вызывает синтакической ошибки т.к.
// переменной присвается undefined
function scope() {
    function oneMore() {
         function some() {
             if (false) {
                 const bbb;
                 bbb = 10
                 console.log(`-${bbb}-`); // SyntaxError: Missing initializer in const declaration
             }
         }
         // some()
    }
 //    oneMore()
 }
 scope();

// !!! СМОТРИ ФАЙЛЫ
// scope.js 
// initialisationjs
// compiling.js