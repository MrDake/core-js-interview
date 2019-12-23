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
