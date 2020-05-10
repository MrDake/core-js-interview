// bind polyfill

const frim = {
    name: 'Alex',
    surname: 'Lazarev',
    github: 'github.com/lavfrim',
}

function printName(nickname, city) {
    console.log(nickname, city);
    if (!this.name || !this.surname)  {
        return 'wrong info about user';
    }
    let print;
    if (nickname && !city) {
        print = `${this.name} ${nickname} ${this.surname} (link:${this.github})`;
    } if (!nickname && city) {
        print = `${this.name} ${this.surname} from ${city} (link:${this.github})`;
    } if (nickname && city) {
        print = `${this.name} ${nickname} ${this.surname} from ${city} (link:${this.github})`;
    } if (!nickname && !city) {
        print = `${this.name} ${this.surname} (link:${this.github})`;
    }
    return print;
}

const printMyName = printName.bind(frim, 'lavfrim');
console.log(printMyName('Viena'));
console.log('---------------------------------');

Function.prototype.bindPolyfill = function(...args) {
    const context = this;
    const object = args.shift();
    return function(...otherArgs) {
        return context.call(object, ...args, ...otherArgs);
    }
}

const printMyNameWithBindPolyfill = printName.bindPolyfill(frim, 'lavfrim');
console.log(printMyNameWithBindPolyfill('Minsk'));