const basicData = '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111';
// const basicData = 'short';

const count = 1000;


function createData(type) {
    switch (type) {
        case 'number': return +basicData;
        case 'string': return basicData+basicData+basicData+basicData+basicData;
        case 'array': {
            const array = [];
            for (let i = 0; i < 10; i += 1) {
                array.push(basicData);
                array.push({
                    num: createData('number'),
                    str: createData('string'),
                    arr: [1, '2', true],
                });
                array.push([false, '0', 0]);
            }
            return array;
        };
        default: return 'error';
    }
}

const objectOne = {
    number: createData('number'),
    string: createData('string'),
    array: createData('array'),
    // test: 1,
    two: {
        number: createData('number'),
        string: createData('string'),
        array: createData('array'),

        three: {
            number: createData('number'),
            string: createData('string'),
            array: createData('array'),

            four: {
                number: createData('number'),
                string: createData('string'),
                array: createData('array'),

                five: {
                    // test: 1,
                    number: createData('number'),
                    string: createData('string'),
                    array: createData('array'),
                },
            },
        },
    },
};

const objectTwo = {
    number: createData('number'),
    string: createData('string'),
    array: createData('array'),

    two: {
        number: createData('number'),
        string: createData('string'),
        array: createData('array'),

        three: {
            number: createData('number'),
            string: createData('string'),
            array: createData('array'),

            four: {
                number: createData('number'),
                string: createData('string'),
                array: createData('array'),

                five: {
                    number: createData('number'),
                    string: createData('string'),
                    array: createData('array'),
                },
            },
        },
    },
};

// json method
function jsonMethod(objectOne, objectTwo, iterationCount) {
    if (!isNaN(iterationCount) &&
        iterationCount > 0 &&
        iterationCount % 1 === 0 &&
        typeof objectOne === 'object' &&
        typeof objectTwo === 'object' &&
        objectOne !== null &&
        objectTwo !== null) {

        const result = {
            iterationCount,
            iterationTimer: [],
            averageTime: null,
            isEqual: null,
        };
        
        function iterator(count) {
            for (let i = 0; i < count; i += 1) {
                const startTime = Date.now();
                if (JSON.stringify(objectOne) === JSON.stringify(objectTwo)) {
                    result.isEqual = true;
                } else {
                    result.isEqual = false;
                }
                const time = Date.now() - startTime;
                result.iterationTimer.push(time);
            }
        }
        
        iterator(iterationCount);
        if (result.iterationTimer.length > 0) {
            result.averageTime = result.iterationTimer.reduce((accumulator, next) => accumulator += next, 0) / iterationCount;
            return result;
        } else {
            return console.log('something sent wrong');
        }

    } else {
        console.log('enter correct data pls');
    }
}

const averageTimeJSONmethod = jsonMethod(objectOne, objectTwo, count).averageTime
console.log(`average time json method = ${averageTimeJSONmethod}`);

// deep equal method 
function deepEqualMethod(objectOne, objectTwo, iterationCount) {
    if (
        (!isNaN(iterationCount) &&
        iterationCount > 0 &&
        iterationCount % 1 === 0 &&
        typeof objectOne === 'object' &&
        typeof objectTwo === 'object' &&
        objectOne !== null &&
        objectTwo !== null)
    ) {
        const result = {
            iterationCount,
            iterationTimer: [],
            averageTime: null,
            isEqual: null,
        };
     
        function isObjEqual(objOne, objTwo) {
            const keysOne = Object.keys(objOne);
            const keysTwo = Object.keys(objTwo);
            if (keysOne.length !== keysTwo.length) {
                return false;
            } else {
                for (let i = 0; i < keysOne.length; i += 1) {
                    if (keysOne[i] !== keysTwo[i]) {
                        return false;
                    }
                }
            }

            const valuesOne = Object.values(objOne);
            const valuesTwo = Object.values(objTwo);
            for (let i = 0; i < valuesOne.length; i += 1) {
                if (Array.isArray(valuesOne[i]) && Array.isArray(valuesTwo[i])) {
                    if (!isArrayEqual(valuesOne[i], valuesTwo[i])) {
                        return false;
                    }
                } else if (typeof valuesOne[i] === 'object' && typeof valuesTwo[i] === 'object') {
                    if (!isObjEqual(valuesOne[i], valuesTwo[i])) {
                        return false;
                    }
                } else if (valuesOne[i] !== valuesTwo[i]) {
                    return false;
                }
            }

            return true;
        }

        function isArrayEqual(arrOne, arrTwo) {
            if (arrOne.length !== arrTwo.length) {
                return false;
            }

            for (let i = 0; i < arrOne.length; i += 1) {
                if (Array.isArray(arrOne[i]) && Array.isArray(arrTwo[i])) {
                    if (!isArrayEqual(arrOne[i], arrTwo[i])) {
                        return false;
                    }
                } else if (typeof arrOne[i] === 'object'&& typeof arrTwo[i] === 'object') {
                    if (!isObjEqual(arrOne[i], arrTwo[i])) {
                        return false;
                    }
                } else if (arrOne[i] !== arrTwo[i]) {
                    return false;
                }
            }

            return true;
        }

        function iterator(count) {
            for (let i = 0; i < count; i += 1) {
                const startTime = Date.now();
                result.isEqual = isObjEqual(objectOne, objectTwo);
                const time = Date.now() - startTime;
                result.iterationTimer.push(time);
            }
        }

        iterator(iterationCount);
        if (result.iterationTimer.length > 0) {
            result.averageTime = result.iterationTimer.reduce((accumulator, next) => accumulator += next, 0) / iterationCount;
            return result;
        } else {
            return console.log('something went wrong');
        }
    } else {
        console.log('enter correct data pls');
    }
}

const averageTimeDeepEqualMethod = deepEqualMethod(objectOne, objectTwo, count)
console.log(`average time deep equal = ${averageTimeDeepEqualMethod.averageTime}`);
console.log(averageTimeDeepEqualMethod)