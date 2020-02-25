// Генератор - это функция которая может быть приостановлена
// на середине завершения с полным сохранением состояния
// а позднее продолжит работу

// Приостановка возможна только самим генератором и 
// осуществляется с помощью ключевого слова yield
// И только >>итератор<<, управляющий генератором
// может возабновить выполнение генератора

// yield/next() - это механизм двухсторонней передачи сообщений
// yield это точка примема/передачи сообщений

// var some = yield 'hello'
// next().value // 'hello'
// next('this is generator magic') // some = 'this is generator magic'

// В общем случае количество вызовов next(..)
// на 1 больше количества команд yield

// Первый вызов next(..) всегда запускает генератор и выполняет
// его до первого yield. Второй вызов next(..) выполняет первое
// приостановленное выражение yield, 
// третий вызов next(..) выполняет второе выражение yield, и т. д.

function *foo(x) {
    var y = x * (yield "Hello"); // <-- возвращает значение!
    return y;
}

var it = foo( 6 );
var res = it.next();// первый вызов `next()`, ничего
                    // не передается
res.value;          // "Hello"
res = it.next( 7 ); // передать `7` ожидающему `yield`
res.value;          // 42

// yield .. в сочетании с next(..) образует двустороннюю систему
// передачи сообщений во время выполнения генератора

// + - несложный пример работы генератора на 2х итераторах
function *foo() {
    var x = yield 2;
    z++;
    var y = yield (x * z);
    console.log( x, y, z );
}

var z = 1;

var it1 = foo();
var it2 = foo();

var val1 = it1.next().value;
console.log( val1 ); // 2 <-- yield 2

var val2 = it2.next().value; // 2 <-- yield 2
console.log( val2 )

val1 = it1.next( val2 * 10 ).value; // 40 <-- x:20, z:2
console.log( val1 );

val2 = it2.next( val1 * 5 ).value; // 600 <-- x:200, z:3
console.log( val2 );

it1.next( val2 / 2 ); // y:300
// 20 300 3

it2.next( val1 / 4 ); // y:10
// 200 10 3


// Генератор может рассматриваться как производитель значений, 
// которые извлекаются по одному через вызовы next() интерфейса итератора.
// Таким образом, сам генератор формально не является итерируемым объектом,
// хотя и очень похож на него 
// — при выполнении генератора вы получите итератор:
// function *foo(){ .. }
// var it = foo();

// в генераторах после  var gen = generator()
// точнее итерируемых объектах генератора
// можно и нужно использовать try..catch
// это очень удобные способ отлова ошибок при асинхронных операциях

// ----------------------------------------------------------------

// Делегирование

function *foo() {
    console.log( "`*foo()` starting" );
    yield 3;
    yield 4;
    console.log( "`*foo()` finished" );
}

function *bar() {
    yield 1;
    yield 2;
    yield *foo(); // `yield`-делегирование! (синтаксис yield*)
    yield 5;
}

var it = bar();
it.next().value;// 1
it.next().value;// 2
it.next().value;// `*foo()` starting
                // 3
it.next().value;// 4
it.next().value;// `*foo()` finished
                // 5

// yield * уступает управление итерациями, а не управление
// генератором; когда вы вызываете генератор *foo(), вы теперь
// yield-делегируете ее итератору. Но вы можете yield-делегировать любому итерируемому объекту; yield *[1,2,3] будет
// потреблять итератор по умолчанию для массива [1,2,3]

// ------------------------------------------------------
// от Д. Крокфорда (такое)
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
   
