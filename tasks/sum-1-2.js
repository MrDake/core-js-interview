// sum(1)(2);

function sum(a) {
    return function(b) {
        return console.log(a + b);
    }
}

sum(1)(2);