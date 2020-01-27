const arr = [[1, 2, [3, 4]], [9], [10, 12]];

function arraySum(arr) {
    let accum = 0;

    function accumulation(arr) {
        for (let i = 0; i < arr.length; i += 1) {
            if (Array.isArray(arr[i])) {
                accumulation(arr[i]);
            } else {
                accum += arr[i];
            }
        }
    }
    accumulation(arr);

    return accum;
}


console.log(arraySum(arr));