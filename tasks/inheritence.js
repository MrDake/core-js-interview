function One(num) {
    this._x = num;
    this.setX = function(x) {
        this._x = x;
    };
    this.getX = function() {
        return this._x;
    };
}

let x = new One(10);

let xy = {
    y: 20,
    get getY() {
        return this.y;
    },
    set setY(num) {
        this.y = num;
    },
    __proto__: x,
}


xy.setY = 22;
console.log(xy.getY);
xy.setX(11);
console.log(xy.getX());


// -------------------------------------------------------------------------------------------


function DeveloperBuilder(name) {
    this.name = name;
    this.skill = [];
    this.framework = [];
}
DeveloperBuilder.prototype.addSkill = function(skill) {
    this.skill.push(skill);
    return this;
}
DeveloperBuilder.prototype.setFramework = function(framework) {
    this.framework.push(framework);
    return this;
}

const developer = new DeveloperBuilder('John')
.addSkill('ES6')
.addSkill('TypeScript')
.setFramework('React');

console.log(developer);

// -------------------------------------------------------------------------------------------


// class DeveloperBuilder {
//     constructor(name = 'Anonimus') {
//         this.name = name;
//         this.skill = [];
//         this.framework = [];
//     }

//     addSkill(skill) {
//         this.skill.push(skill);
//         return this;
//     }

//     setFramework(framework) {
//         this.framework.push(framework);
//         return this;
//     }
// }

// const developer = new DeveloperBuilder('John')
//   .addSkill('ES6')
//   .addSkill('TypeScript')
//   .setFramework('React');


//   console.log(developer);

