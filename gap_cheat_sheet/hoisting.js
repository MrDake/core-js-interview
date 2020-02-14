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


console.log(typeof name, name);
var name;
function name() {}
console.log(typeof name, name);
name = 'Alex';
console.log(typeof name, name);
var name = 'Frim';
console.log(typeof name, name); // можно переобъявить, не будет ошибки

console.log('-------------------')

// console.log(typeof name);
// function name() {}
// console.log(typeof name);
// var name = 'Alex';
// console.log(typeof name);

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

