// Arrow function
// ES6 синтаксис | стрелочная функция
// кроме особенностией упрощенного синтакиси имеет ряд отличий

// 1. Не имеет своего this и берет его из окружения 
// 2. Не имеет колекции arguments 
//      (итерируемого объекта не имеющего методов массива)

function func() {
    console.log(arguments);
}
func(1,'2',true);

const arrowFunction = (...args) => {
    console.log(args);
}
arrowFunction(1,'2',true);

const arrowFunc = () => {
    console.log(arguments);
}
arrowFunc(1,'2',true);