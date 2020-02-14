// https://habr.com/ru/post/486820/

// Array.prototype.mapPolyfill = function(callBackFunction) {
//     const arr = this;
//     const newArr = [];
//     for (let i = 0; i < arr.length; i += 1) {
//         newArr.push(callBackFunction(arr[i], i, arr));
//     }
//     return newArr;
// }

// const thatArray = [1, 2, 3].mapPolyfill((item, index, arr) => {
//     const obj = {
//         index: index,
//         item: item,
//         arr: arr
//     }

//     return obj;
// });

// console.log(thatArray);

// console.log('-----------------------------------------------')

// Array.prototype.reducePolyfill = function(callBackFunction, initialAccumValue = 0) {
//     const arr = this;
//     let accum = initialAccumValue;
//     for (let i = 0; i < arr.length; i += 1) {
//         accum = callBackFunction(accum, arr[i]);
//     }
//     return accum;
// }

// const red = [1, 2, 3, 4].reducePolyfill((acc, val) => (acc + val), 1);
// console.log(red);

// console.log('-----------------------------------------------')

// function some(...arg) {
//     console.log(arguments);
    
//     console.log(arg);
// }

// some(1, 2, '3');


// console.log('-----------------------------------------------')

// const arr = [...new Set([1, 2, 2, 3, 2, 2])];

// console.log(arr);

// console.log('-----------------------------------------------')

// const promise = new Promise((resolve, reject) => {
//     console.log('synchronous code working...');
//     setTimeout(() => {
//         const randomNumber = Math.random();
//         if (randomNumber < 0.5) {
//             resolve('all ok man');
//         } else {
//             reject('so bad, the are error');
//         }
//     }, 1000);
// });

// promise
//     .then(
//         result => console.log(result),
//         error => console.log(error)
//     )

// promise
//     .then(
//         result => console.log(result),
//     )
//     .catch(
//         error => console.log(error)
//     )


// console.log('-----------------------------------------------')

// async function asYnc() {
//     console.log('start')

//     const ps_one =  await new Promise((resolve, reject) => {
//         // console.log('synchronous code working...');
//         setTimeout(() => {
//             const randomNumber = Math.random();
//             if (randomNumber < 0.5) {
//                 resolve('all ok man');
//             } else {
//                 reject('so bad, the are error');
//             }
//         }, 3000);
//     });

//     console.log(ps_one);

//     const ps_two =  await new Promise((resolve, reject) => {
//         // console.log('synchronous code working...');
//         setTimeout(() => {
//             const randomNumber = Math.random();
//             if (randomNumber < 0.5) {
//                 resolve('all ok man');
//             } else {
//                 reject('so bad, the are error');
//             }
//         }, 1000);
//     });

//     console.log(ps_two)
// }

// asYnc();

// console.log('-----------------------------------------------')

// class Wog {
//     constructor() {
//         this.x = 100;
//     }

//     method() {
//         console.log(this.x)
//     }
// }

// const wog = new Wog();

// console.log(Object.prototype.toString.call(Wog))
// console.log(Object.prototype.toString.call(wog))

// console.log('-----------------------------------------------')

// function Emp () {
//     this.epm = 'E_M_P';
// }

// console.log(Emp.prototype);

// const emp = new Emp();

// console.log(emp);

// const emp_2 = new emp.__proto__.constructor;

// console.log(emp_2);

// Emp.prototype.method = function() {
//     console.log('the are Emp method');
// }

// emp_2.method();
// emp.method();

// Emp.prototype.id = 'Emp id for all';

// console.log(emp.id);
// console.log(emp_2.id);

// emp_2.__proto__.fukok = 'boom matahaka';

// console.log(emp.fukok);
// console.log(emp_2.fukok);

console.log('-----------------------------------------------')

const object_one = {
    name: 'object_one',
    number: 1,
    method: function() {
        console.log(this.name);
        console.log(this.number);
    }
}

const object_two = {
    name: 'object_two',
    number: 2,
    __proto__: object_one
}

object_two.method();


const obj_perent = {
    newMethod: function() {
        console.log(`${this.number} - ${this.name}`);
    }
}
function CreateObject(name, number) {
    this.name = name;
    this.number = number;
}

CreateObject.prototype.method = function() {
    console.log(this.name);
    console.log(this.number);
}

const new_obj_one = new CreateObject('new_obj_one', 11);

new_obj_one.method();

CreateObject.prototype = Object.assign(CreateObject.prototype, obj_perent)

// console.log(new_obj_one)

new_obj_one.newMethod();

const id = 'emp1'; 
function Employee() { 
    this.id = 'emp2'; 
} 
 
const employee = new Employee() 
employee.__proto__.id = 'emp3'; 
Employee.prototype.id = 'emp4'; 

console.log(id)
console.log(employee.id) // 'emp2'
console.log(employee.__proto__.id) // emp3 emp4
console.log(Employee.prototype.id) // emp3 emp4