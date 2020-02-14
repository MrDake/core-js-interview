// https://github.com/lydiahallie/javascript-questions/blob/master/ru-RU/README.md


// #1 #8 #11 #13 #17
// #22 #23 #25 #29 #31
// #38 #49 #53 #54 #57
// #61 #65 #67 #69 #72
// #73 #74 #83 #92 #94
// #95 #96 #98 #102 #111
// #114


// 73%  (31 failed from 116)

// ----------------------------------------------

// #11 #57 #65! #98!
// 87%  (4 failed from 31)

// ----------------------------------------------



function getPersenOfRightQuestions(
    numberOfAllQuestions,
    arrayOfNumberFailedQuestions
) {
    let accumulationArray = [];

    function statistics(numberOfAllQuestions, arrayOfNumberFailedQuestions) {
        const failedNumber = arrayOfNumberFailedQuestions.length;
        const rightPersent = Math.trunc((1 - failedNumber / numberOfAllQuestions) * 100);
        console.log(`${rightPersent}% (${failedNumber} failed from ${numberOfAllQuestions})`);

        accumulationArray = accumulationArray.concat(arrayOfNumberFailedQuestions);
        accumulationArray.sort((a, b) => (a - b));
        let count = 1;
        accumulationArray.forEach((item, index, array) => {
            if (item === array[index + 1]) {
            count += 1;
        } else {
            if (count > 1) {
                console.log(`Question -#${array[index - 1]}- failed -${count}- times`);
                count = 1;
            }
        }
    });
        console.log('---------------------------------------------------');
    }

    statistics(numberOfAllQuestions, arrayOfNumberFailedQuestions)

    return function nextIteration (numberOfAllQuestions, arrayOfNumberFailedQuestions) {
        statistics(numberOfAllQuestions, arrayOfNumberFailedQuestions)
        return nextIteration;
    }
}

getPersenOfRightQuestions
(116, [
    1, 8, 11, 13, 17,
    22, 23, 25, 29, 31,
    38, 49, 53, 54, 57,
    61, 65, 67, 69, 72,
    73, 74, 83, 92, 94,
    95, 96, 98, 102, 111,
    114
])
(31, [
    11, 57, 65, 98
])
