"use strict" // делает this в функциях равным undefined, я если без него, то this функций равен window

function one() {
    console.log('one', this);
    function two() {
        console.log('two', this);
        function func() {
            console.log('func', this);
        }
        func();
    }
    two();
}
one();

const obj = {
    printThis: function() {
        console.log(this);  // когда объект this это то что перед точкой, т.е. в данном случае объект obj
    },
    printThisFromArrow: () => {
        console.log(this); // стрелочная функция беред this из окружения в котором была создана, т.е. в данном случае это window
    },
    newObj: {
        hightNewObj: {
            printThis: function() {
                console.log(this);  // когда объект this это то что перед точкой, т.е. в данном случае объект obj.newObj.hightNewObj
            },
            printThisFromArrow: () => {
                console.log(this); // стрелочная функция беред this из окружения в котором была создана, т.е. в данном случае это window
            },
        }
    }
}

const nextObj = Object.create(obj);

obj.printThis();
obj.printThisFromArrow();
obj.newObj.hightNewObj.printThis();
obj.newObj.hightNewObj.printThisFromArrow();
nextObj.newObj.hightNewObj.printThisFromArrow();

function some() {
    console.log(Object.prototype.toString.call(this));
}
some.call('word');
some.call(function(){});
some.call([]);


// тут весело! https://habr.com/ru/post/149516/

var f = function() {
    this.x = 5;
    (function() {
        this.x = 3;
    })();
    console.log(this.x);
};

var obj = {x: 4, m: function() {
    console.log(this.x);
}};


f(); // 3
new f(); // 5
obj.m(); // 4
new obj.m(); // undefined
f.call(f); // 5
obj.m.call(f); // 5

// --------------------------------


var x = 1;
var a = {x: 2};
a.y = function() {
	console.log(this.x); // 2
	var x = 3;
	function z() {
		console.log(this.x); // 2
	} 
	z();
}
a.y()

// -------------------------------

// apply/call/bind что за методы зачем нужны

var x = 1;
function a() {
    console.log(this)
	console.log(this.x); // 1
}
var b = {x: 2, y: a};
c = b.y
c();
c.call(b)

// что надо сделать чтобы выводило 2

