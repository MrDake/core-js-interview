// sum(1)..(8)

function sum(a = 0) {
    let accumulator = a;

    function next(b = 0) {
        accumulator += b;
        return next;
    }
    next.toString = function() {
        return `${accumulator}`;
    }
    next.valueOf = function() {
        return accumulator;
    }

    return next;
}

// let result = sum()(1)()()(2)();
// Object.defineProperty(result, 'toString', {
//   enumerable: false,
// });
// Object.defineProperty(result, 'valueOf', {
//     enumerable: false,
//   });
// for (let key in result) {
//     console.log(key) // nothing
// }

console.log('---------------------------------');

console.log(sum(1)(2)); // 3
console.log(sum(1)(2)(3)); // 6

console.log(sum()(2)()(4)(5)()); // 11

console.log(sum(1)(2) + '3'); // 33
console.log(sum(1)(2) + 3); // 6

let result = sum()(1)()()(2)();
for (let key in result) {
    console.log(key) // nothing
}

console.log('---------------------------------');

console.log(sum(1)(2) == '3'); // true
console.log(sum(1)(2) == 3); // true
console.log(typeof(sum(1)(2).toString())); // 3
console.log(typeof(sum(1)(2).valueOf())); // 3
console.log(sum(1)(2) + '3'); // 33
console.log(sum(1)(2) + 3); // 6
console.log(sum(1)(2)(3)); // 6
console.log(sum(5)(-1)(2)); // 6
console.log(sum(6)(-1)(-2)(-3)); // 0
console.log(sum(0)(1)(2)(3)(4)(5)); // 15
