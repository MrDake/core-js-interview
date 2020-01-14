const one = {
    obj: {
        arr: [
            { a: 1 },
            { b: 2 }
        ],
        str: 'string',
        num: 10,
    }
};

const two = [
    {
        arr: [
            { a: 1 },
            { b: 2 }
        ],
        str: 'string',
        num: 10,
    }
];

const test = {
    objectOne: {
        ojectTwo: {
            arr: [ { a: 1 }, '2', 3],
        }
    }
}

function deepClone(obj) {
    let clone;
    if (Array.isArray(obj)) {
        clone = arrayClone(obj);
    } else if (typeof obj === 'object') {
        clone = objectClone(obj);
    } else {
        return false;
    }
 
    function objectClone(obj) {
        const cloneObj = {};
        for (prop in obj) {
            if (Array.isArray(obj[prop])) {
                cloneObj[prop] = arrayClone(obj[prop]);
            } else if (typeof obj[prop] === 'object') {
                cloneObj[prop] = objectClone(obj[prop]);
            } else {
                cloneObj[prop] = obj[prop];
            }
        }
        return cloneObj;
    }

    function arrayClone(arr) {
        const cloneArr = [];
        for (let i = 0; i < arr.length; i += 1) {
            if (Array.isArray(arr[i])) {
                cloneArr[i] = arrayClone(arr[i]);
            } else if (typeof obj[prop] === 'object') {
                cloneArr[i] = objectClone(arr[i]);
            } else {
                cloneArr[i] = arr[i];
            }
        }
        return cloneArr;
    }

    return clone;
}

console.log(deepClone(one));
console.log(deepClone(two));
console.log(deepClone(test));