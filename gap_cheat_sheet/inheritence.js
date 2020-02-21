console.log('--------------------new Function---------------------------')

function Perent(name) {
    this.name = name;
    this.wisdom = 'classes is good';
}

Perent.prototype.sayWisdom = function() {
    console.log( `${this.name} say that ${this.wisdom}...` );
}

const perent = new Perent('oldMan');
perent.sayWisdom();

function Child(name) {
    Perent.call(this, name);
    this.blabla = 'your classes is shit';
}

Child.prototype = Object.create(Perent.prototype);
Child.prototype.sayBlabla = function() {
    console.log(`${this.name} say that ${this.blabla}!`);
}

const child = new Child('youngBoy');
child.sayBlabla();
console.log(child);

// console.log('-------------------OLOO----------------------------')

// function setUp(value) {
//     return ({
//         enumerable: true,
//         writable: true,
//         configurable: true,
//         value: value
//     })
// }

// const Perent = {
//     name: 'oldPooppy',
//     init: function(name) { this.name = name },
//     wisdom: 'classes is good',
//     sayWisdom: function() {
//         console.log( `${this.name} say that ${this.wisdom}...` );
//     }
// }

// const Child = Object.create(Perent, {
//     name: setUp('yougPissy'),
//     init: setUp(function(name) { this.name = name }),
//     blabla: setUp('your classes is shit'),
//     sayBlabla: setUp(function() {
//             console.log(`${this.name} say that ${this.blabla}!`);
//         })
// });

// Perent.init('oldMan');
// Perent.sayWisdom();

// Child.init('youngBoy');
// Child.sayBlabla();
// console.log(Child);


// console.log('-----------------------classes----------------------------')

// class Perent {
//     constructor(name) {
//         this.name = name;
//         this.wisdom = 'classes is good';
//     }

//     sayWisdom() {
//         console.log( `${this.name} say that ${this.wisdom}...` );
//     }
// }

// class Child extends Perent {
//     constructor(name) {
//         super(name);
//         this.blabla = 'your classes is shit';
//     }

//     sayBlabla() {
//         console.log(`${this.name} say that ${this.blabla}!`);
//     }
// }

// const child = new Child('youngBoy');
// child.sayBlabla();
// child.sayWisdom();