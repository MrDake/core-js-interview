let a = 10;

function print() {
    let a = 40; //
    return (function(){
        let a = 30 // 
        console.log(a);
    });
}

function xx() {
    let a = 20; // 
    print()();
}
xx();

// Нисходящая фунарг-проблема
const x = 10;
function print_x() {
  console.log(x);
}
function run() {
  const x = 20;
  print_x(); // 10, not 20
}
run();

// Восходящая фунарг-проблема
function foo() {
    let y = 10;
    function bar() {
      return y;
    }
    return bar;
}
let y = 20;
let bar = foo();
console.log(bar()); // 10 not 20