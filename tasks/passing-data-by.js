var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};

console.log(bar) // {n: 1, {n: 2}}
console.log(foo) // {n: 2}


var a = [1,2,3];
var b = a;
a = [3,2,1];
b.push(4);
console.log(a); // [3, 2, 1]
