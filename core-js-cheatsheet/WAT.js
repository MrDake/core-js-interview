console.log( {} == false ) // false
console.log( [] == false ) // true
console.log( {} == [] ) // false

console.log( '--------------------------------' )

console.log( null == false ) // false
console.log( undefined == false  ) // false

console.log( '--------------------------------' )

console.log( [] == [] ) // false
console.log( [] == ![] ) // true

// ![] ~ !true ~ false ~ 0 
// [] ~ '' ~ 0
// 0 == 0 // true

console.log( '--------------------------------' )

console.log(`-${[] + []}-`) // ''
console.log(`-${[] + {}}-`) // [object Object]
console.log(`-${{} + {}}-`) // [object Object][object Object]
// object.prototype.toString.call([]) = ''
// object.prototype.toString.call({}) = '[object Object]'

console.log( '--------------------------------' )

console.log( Math.min() > Math.max()  ) // true
// Math.min() === infinyity
// Math.max() === -infinyity

console.log( '--------------------------------' )

console.log( isNaN("this string is not NaN") ) // true
console.log( Number.isNaN("this string is not NaN") ) // false

console.log( '--------------------------------' )

console.log( ((name) => [name])("wat") ) // ["wat"]
console.log( ((name) => {name})("wat")  ) // undefined

console.log( '--------------------------------' )

first("wat", "wat", "wat"); // {w: "wat", a: "wat", t: "wat"}
function second(w, a, t) {
 return // выставляется ";"
 {w, a, t};
}
second("wat", "wat", "wat"); // undefined