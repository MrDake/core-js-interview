var arr1 = 'john'.split('').slice();
var arr2 = arr1.reverse();
var arr3 = 'jones'.split('');
var arr4 = arr3.splice(1);
arr4.push(arr3)


console.log(arr1) // [j, o, h, n]
console.log(arr2) // [n, h, o, j]
console.log(arr3) // [j]
console.log(arr4) // [o, n, e, s, [j]]


const array = [
    { "1": 1 },
    '2',
    3,
    '4',
    true
];

array.forEach(item => console.log(item));
console.log('---------------------------------------------------------------------------');
console.log('---------------------------------------------------------------------------');
const mapArray = array.map(item => {
    if (typeof item !== 'object') {
        return item * 2
    } else {
        return NaN;
    }
});
console.log(mapArray);
console.log('---------------------------------------------------------------------------');
const filterArray = array.filter(item => typeof item === 'string');
console.log(filterArray);
console.log('---------------------------------------------------------------------------');
const sortArray = array.sort((prev, next) => next - prev);
console.log(sortArray);
console.log('---------------------------------------------------------------------------');
const reduceArray = array.reduce((acc, next) => {
    if (next['1']) {
        return acc += next['1'];
    }
    return acc += +next;
}, 0);
console.log(reduceArray);
console.log('---------------------------------------------------------------------------');
const reduceRightArray = array.reduceRight((acc, next, index) => {
    if (index > 1) {
        return acc += +next;
    }
    return acc;
}, 0);
console.log(reduceRightArray);
console.log('---------------------------------------------------------------------------');
console.log(array.includes('4'));
console.log(array.indexOf(true));
console.log(array.lastIndexOf('3'));
console.log(array.find(item => item > 0));
console.log(array.every(item => item == true));
console.log(array.some(item => item == true));
console.log('---------------------------------------------------------------------------');
array.splice(0, 1, ['wow', 'how']);
console.log(array);
const sliceArray = array.slice(1, -1);
console.log(sliceArray);
console.log('---------------------------------------------------------------------------');
array.reverse();
console.log(array);


