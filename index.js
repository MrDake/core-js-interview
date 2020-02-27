const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5
}

const arr = [1,2,3,4,5]

const {a, ...t} = obj;

console.log( a, t )
