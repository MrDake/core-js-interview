function Machine() {
    this.isEnable = false;
    this.enable = function() {
        this.isEnable = true;
        console.log('CoffeeMashine enabled');
    };
    this.disable = function() {
        this.isEnable = false;
    }
}

function CoffeeMachine() {
    Machine.call(this);
    
    this.isCoffeeReady = false,
    this.run = function() {
        if (this.isEnable) {
            this.coffeeRunId = setTimeout(() => (
                console.log('Your coffee is ready'),
                this.isCoffeeReady = true
            ), 3000);
        } else {
            console.log('enable CoffeeMashine first');
        }
    }
    this.disable = function() {
        console.log('Coffee Mashine disable');
        clearTimeout(this.coffeeRunId);
        this.isEnable = false;
    }
}
CoffeeMachine.prototype.waitCount = 0;
CoffeeMachine.prototype.drinkCoffee = function() {
    if (this.isCoffeeReady) {
        console.log('You drank all the coffee');
        this.isCoffeeReady = false;
    } else {
        console.log('Coffee not raedy, lets wait...');
        const coffeeWaitId = setTimeout(() => (this.drinkCoffee()), 1000);
        this.waitCount += 1;
        if (this.waitCount > 10) {
            clearTimeout(coffeeWaitId);
            this.waitCount = 0;
            console.log('Something went wrong');
        }
    }
}
CoffeeMachine.prototype.disable = function() {
    console.log('Coffee Mashine disable');
    clearTimeout(this.coffeeRunId);
    this.isEnable = false;
}
console.log(new CoffeeMachine);



var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.run(); // ошибка, кофеварка выключена!
// -----------------------------------------------------------------
coffeeMachine.enable();
coffeeMachine.run(); // ...Кофе готов!
coffeeMachine.disable();
coffeeMachine.drinkCoffee();