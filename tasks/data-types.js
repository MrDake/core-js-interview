// 1. Number
// 2. String
// 3. Boolean
// 4. undefined
// 5. null
// 6. Object
// 7. BigInt - целые числа больше 2**53 // 9007199254740991n (в конце ставится n)
// 8. Symbol - «Символ» представляет собой уникальный идентификатор.

console.log('----------')


console.log(typeof 21); // number
console.log(typeof 'two one'); // string
console.log(typeof true); // boolean
console.log(typeof undefined) // "undefined"
console.log(typeof null) // object !!!!! это признанная ошибка, сохранненая для совместимости
console.log(typeof [], typeof {}, typeof Math); // object
console.log(typeof console.log, typeof new Function()); // function
console.log(typeof 231231231981231n, typeof BigInt(312312312312131231), typeof BigInt('2312312312312311231')); // bigint
console.log(typeof Symbol('id')); // symbool


// ------------------------ 

console.log(1 +  "2" + "2"); // 122
console.log(1 +  +"2" + "2");  // 32
console.log(1 +  -"1" + "2");  // 02
console.log( "A" - "B" + "2"); // NaN2
console.log( 0 == null); // false
console.log( undefined == null); // true
console.log('' == 0); // true
console.log(typeof null); // object
console.log(typeof undefined); // object