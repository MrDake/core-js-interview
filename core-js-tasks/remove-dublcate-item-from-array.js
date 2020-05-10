const arr = ['f', 1, 'a', true,  'd', 5, 'f', 'f', 1, 'a', 'z', true];

// function removeDuplicate(arr) {
//     arr.sort();

//     for (let i = 0; i < arr.length; i += 1) {
//         if (arr[i] === arr[i + 1]) {
//             arr.splice(i, 1);
//             i -= 1;
//         }
//     }

//     return arr;
// }

// console.log(removeDuplicate(arr));

// function removeDuplicateWithSet(arr) {
//     const set = new Set;
//     arr.forEach(item => set.add(item));
//     return new Array(...set);
// }

// console.log(removeDuplicateWithSet(arr));

function magicRemove(arr) {
    const newArr = [];
    newArr.push(arr.pop());
    while (arr.length > 0) {
        const item = arr.pop();
        if (!newArr.includes(item)) {
            newArr.push(item);
        }
    }
    return newArr;
}


console.log(magicRemove(arr));
