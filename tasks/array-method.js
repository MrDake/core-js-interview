var arr1 = 'john'.split('').slice();
var arr2 = arr1.reverse();
var arr3 = 'jones'.split('');
var arr4 = arr3.splice(1);
arr4.push(arr3)


console.log(arr1) // [j, o, h, n]
console.log(arr2) // [n, h, o, j]
console.log(arr3) // [j]
console.log(arr4) // [o, n, e, s, [j]]
