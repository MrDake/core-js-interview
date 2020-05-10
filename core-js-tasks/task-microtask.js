var a = 5;
setTimeout(function timeout() {
    console.log('3 ', a);
    a = 10;
}, 0);

var p = new Promise(function(resolve, reject) {
    console.log('8 ', a);
    a = 25;
    resolve();
});

p.then(function(){
    console.log('14 ', a),
    a = 35;
    setTimeout(function timeout() {
        console.log('17 ', a);
        a = 100;
        Promise.resolve().then(
            setTimeout(() => {
                console.log('21 ', a);
                a = 50;
            }, 0),
            console.log('24 ', a),
            a = 150,
        );
    }, 1);
});
console.log('27 ', a);

// 8 5
// 27 25
// 14 25
// 3 35
// 17 10
// 24 100
// 21 150

