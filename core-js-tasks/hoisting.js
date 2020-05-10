// hoisting

// use strict // строгай режим не позволяет присваевать до объявления и вызывать функции до объявления

// a = 5;
// console.log(a); // все ок
// var a;

// b = 10;
// console.log(b); // ошибка 
// let b;

console.log('--------------------------')

// some(20);
function some(x) {
    console.log(x)
}
some(30);

console.log('--------------------------')

var x = 1; // Инициализируем x
console.log(x + " " + y);  // '1 undefined'
var y = 2;
//код выше и код ниже одинаковые

var x; // Инициализируем x
x = 1; // Объявляем x
var y; // Объявляем y
console.log(x + " " + y);  // '1 undefined'
y = 2; // Инициализируем y

console.log('--------------------------')

function hoist() {
    a = 120;
    var b = 100;
}

hoist();

console.log(a);
/*
Доступ как к глобальной переменной вне функции hoist()
Выводит: 20
*/
// console.log(b);
/*
Как только b была назначена, она заключена в рамки области видимости функции hoist(). Что означает то, что мы не можем вывести её за рамки функции.
Вывод: ReferenceError: b is not defined
*/

console.log('--------------------------')

var double;

function double(num) {
  return (num*2);
}

// console.log(typeof double); // Вывод: function

// double = 1
// console.log(typeof double); // Вывод: number

console.log(typeof double); // Вывод: function
double = 1

console.log('--------------------------')


// hadr level 

(function() {
	f(); // function f // 2

	f = function() {  // === window.f
		console.log(1);
	}
})()

function f() {   // hoisting function f
	console.log(2)
}

f(); // === window.f() // 1

console.log(window.f)