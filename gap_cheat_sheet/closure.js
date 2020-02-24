// Замыкание - механизм позволяющий сохранять ссылку на объект активании
// внешней функции
// с.119-120 Дуглас Крокфорд

// Замыкание - это мехнизм получения доступа с переменным 
// содержащимся в объекте активации функции которая создала
// этот функциональный объект

// Замыкание это важное открытие в истории программирования.
// Было сделано в языка Scheme.
// Но особую популярность получило в JS и подогрело интерес к этому языку.
// "Без него JS был бы просто дымящийся кучей благих намерений,
//      прощетов и классов" (Дуглас Крокфорд "Как устроен JS")

// Замыкание — способность функции запоминать свою лексическую
// область видимости и обращаться к ней даже тогда,
// когда функция выполняется вне своей лексической области видимости.
//      Кайл Симпсон "You don't know JS"

// Кайл Симпсон считает, что замыкание выражается в 
// сути восходящей фунанг проблемы

function foo() {
    var a = 2;
    function bar() {
        console.log( a );
    }
    return bar;
}
var baz = foo();
baz(); // 2 -- Вы только что увидели замыкание

// Собственное объяснение
// Замыкания - механизм доступа к лексическому окружению 
// за пределами своей лексической области видимости 

// При презентовании замыкания используй низходящую фун-арг проблему
// Но так же можешь презентовать создание безопасной функции
// которая надежно хранит инфомацию и устойчива к взлому

(function global() {
    let name = 'Alex';

    function higherScope() {
        let name = 'Lea';

        function lowerScope() {
            let name = 'Kira';

            function print() {
                console.log(name);
            }

            return print;
        }

        return lowerScope();
    }

    const print = higherScope();

    print(); // Kira
})()

// пример патерна "модуль"
function makeMySafety() {
    const secretBox = new WeakMap;

    function setSecret(secretsObject) {
        if ('key' in secretsObject) {
            const key = Object.create(null);
            const secretsObjects = {};
            const secketKeys = Object.keys(secretsObject)
            secketKeys.forEach(secret => {
                if (secret !== 'key') {
                    secretsObjects[secret] = secretsObject[secret];
                }
            });
            key.key = secretsObject.key;
            secretBox.set(key, secretsObjects);
            return key;
        } else {
            alert('pls, set key, and save it');
        }
    }

    function getSecrect(key) {
        const secrets = secretBox.get(key);
        if (secrets) {
            return secrets;
        } else {
            return 'The are wrong key';
        }
    }

    return Object.freeze({
        safeMysecters: setSecret,
        sayMySecrets: getSecrect,
    })
}

const secretsBox = makeMySafety();

const mySectets = {
    key: 'password',
    secretNumberOne: 'The are first secter',
    secretNumberTwo: 'The are second secret'
}

const key = secretsBox.safeMysecters(mySectets);
console.log('key of my secrets: ', key);

const sectets = secretsBox.sayMySecrets(key);
console.log( sectets );
sectets.newScret = "watafak"

const HackSectets = secretsBox.sayMySecrets({key: "password"});
console.log(HackSectets)

console.log('the are save object: ', secretsBox);