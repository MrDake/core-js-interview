// Что такое  Promise?
console.log(1);
setTimeout(() => console.log(2), 5);
console.log(3);
new Promise(resolve => {console.log(4), resolve()})
.then(() => console.log(5))
.then(() => console.log(5.5));
console.log(6);
setTimeout(() => console.log(7), 0);
Promise.resolve()
.then(() => console.log(8))
.then(() => console.log(9));
console.log(10);


// queue microtask 5 8 5.5 9 task 7(0) 2(5)

// console 1 3 4 6 10 5 8 5.5 9 7 2