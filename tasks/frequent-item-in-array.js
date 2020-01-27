// Write a JavaScript program to find the most frequent item of an array.

// Sample Input: 

// Sample Output : “d: 4”


const arr = ['d', 'd', 'd', 'a', 'b', 'a', '3', 'z', 'd', 'a', 'a', 'a'];

function findMostFrequentitem(arr) {
    const frequentItems = {};
    arr.forEach((item) => {
        frequentItems[item] ? frequentItems[item] += 1 : frequentItems[item] = 1;
    });
    let count = 1;
    let item;
    for (key in frequentItems) {
        if (frequentItems[key] > count) {
            count = frequentItems[key];
            item = key;
        }
    }
    return `${item}: ${count}`;
}

console.log(findMostFrequentitem(arr));