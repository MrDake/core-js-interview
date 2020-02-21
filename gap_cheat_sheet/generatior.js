function* counter() {
    let count = 0;
    while (true) {
        count += 1;
        yield count;
    }
}
const gen = counter();
console.log( gen.next().value ) // 1
console.log( gen.next().value ) // 2
console.log( gen.next().value ) // 3

console.log('---------------------------------------')
// А вот что я рекомендую использовать взамен:
function newCounter() {
    let count = 0;
    return function counter_generator() {
        count += 1;
        return count;
    };
}

const nGen = newCounter();
console.log( nGen() ) // 1
console.log( nGen() ) // 2
console.log( nGen() ) // 3

// function фабрика (параметры фабрики) {

//     Инициализация состояния генератора

//     return function генератор (параметры генератора) {

//             обновление состояния

//         return значение;
//     };
// }
   