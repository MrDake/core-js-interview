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

// #5 #8 #11 #18 #20(ppc)
// #24 #29 #84 №89 №92
// #95 #98 #106 #111 #114
// 87% (15 failed from 116)

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
(
    116,
    [
        5, 8, 11, 18,
        24, 29, 84, 89, 92,
        95, 98, 106, 11, 114,
    ]
)

// #76 !!!!!! c ошибкой 
// 84 похожий но там не ошибка! (мудняяяяк!)
// но этот мутняк очередной раз доказывает что let и const хойстятся
// при чем даже за пределы блочной области видимости
// и упираются в функциональную область видимости как и var
// #111 тоже до кучи


// 87% (14 failed from 116)
// index.js:50 Question -#8- failed -2- times
// index.js:50 Question -#11- failed -4- times !!!!!!!
// index.js:50 Question -#29- failed -2- times
// index.js:50 Question -#57- failed -2- times
// index.js:50 Question -#65- failed -2- times
// index.js:50 Question -#92- failed -2- times
// index.js:50 Question -#95- failed -2- times
// index.js:50 Question -#98- failed -3- times !!!
// index.js:50 Question -#114- failed -2- times
