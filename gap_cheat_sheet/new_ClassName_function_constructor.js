// Функция конструктор это обычная функция,
// которая должна:
//      - иметь название с большой буквы
//      - вызываться через "new"

// Ключевое слово "new" при вызове функции-конструктора изпользуется
// для создания нового объекта (нового экземпляра класса)

// new делает 4 вещи:
//      1. Создает пустой объект
//      2. Этот объект присваевается значению this
//      3. Выполняется код функции, 
//         который обычно добавляет какие-то свойства в this
//      4. Возвращается значение this 
//          (но может вернуть объект который ты явно укажешь)
//      5. Функция наследует от functionName.prototype.
//          Другими словами
//          Производится связывание сконструированного объекта
//          с [[Prototype]].

// ??? стоит ли говорить пункт 5 / кажется что стоит / точно стоит проверил!

//      function User(name) {
//          // this = {};  (неявно)
  
//           // добавляет свойства к this
//           this.name = name;
//           this.isAdmin = false;
  
//          // return this;  (неявно)
//      }

//      User.prototype.method = function() {};

// Обычно функции конструкторы не имею return и неявно возвращают this
// Но можно из функции-конструктора вернуть объект в котором указать что-либо
// в противном случае, если мы будем возвращать не объект, а что-то другое,
// в том числе undefined, то вернется объект this

function ClassConstructor(name) {
    this.name = name;

    // плохой прием указывать методы в самой функции конструкторе
    // т.к. они будет копироваться в каждый экземпляр класса
    // this.printName = function() {
    //     console.log(this.name);
    // }
}

// хороший прием писать методы в наследуемом объекте
// functionName.prototype.method = function() {}
ClassConstructor.prototype.printName = function() {
    console.log(this.name);
    console.log(this);
}

const iam = new ClassConstructor('Alex');
iam.printName();
// метод printName находится в объекте aim в геттере/сеттере __proto__
// который указывает на цепочку прототипов данного объекта
// aim.__proto__.printname

const inheritMe = {
    name: 'Ted',
    nickname: 'Frim',
    printFullname: function() {
        console.log(`${this.name} ${this.nickname}`);
        console.log(this);
    }
}

inheritMe.printFullname();

// пример расширения всех экземпляров класса
// свойствами и медодами другого объекта
ClassConstructor.prototype = Object.assign(ClassConstructor.prototype, inheritMe);

iam.printFullname();

console.log('-------------------------------------')
console.log('inheritance')
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
child.sayWisdom();
console.log(child);
