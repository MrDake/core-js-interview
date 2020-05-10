// Arrow function
// ES6 синтаксис | стрелочная функция
// кроме особенностией упрощенного синтакиси имеет ряд отличий

// 1. Не имеет своего this и берет его из окружения 
// 2. Не имеет колекции arguments
//      (итерируемого объекта не имеющего методов массива)
// 3. Не имеет объекта прототипа arrowFunction.prototype

function func() {
    console.log(arguments);
}
func(1,'2',true);

const arrowFunction = (...args) => {
    console.log(args);
}
arrowFunction(1,'2',true);
console.log(arrowFunction.prototype === undefined)

const arrowFunc = () => {
    console.log(arguments);
}
arrowFunc(1,'2',true);

console.log(arrowFunction.prototype === undefined)

function newSome() {
    return `cool some`;
}

console.log(newSome.prototype)