Object.prototype.iBank = {
    show: function() { console.log(JSON.stringify(this.store)) },
    store: null,
    init: function(store) {
        this.store = store;
        return 'store init done';
    },
    setInfo: function(stateObj) {
        const entries = Object.entries(stateObj);
        entries.forEach(entry => {
            this.store[entry[0]] = entry[1];
        })
    },
    gIf: function(setFunc, ...values) {
        values.forEach(value => {
            setFunc(value);
        })
    },
    gIc: function(setFunc, ...fields) {
        const obj = Object.create(null);
        fields.forEach(field => {
            obj[field] = this.store[field]
        })
        setFunc(obj);
    }
}

function scopeOne() {
    const store = {
        one: 'one',
        two: 'two',
        three: 'tree'
    }

    storInitStatus = store.iBank.init(store);
    console.log( storInitStatus );

    setTimeout(() => {
        delete store.four;
        console.log( store === Object.prototype.iBank.store )
    }, 1000);
}
scopeOne()

let i = 0;
while (i < 4) {
    i += 1;

    function scopeTwo() {
        Object.prototype.iBank.setInfo({four: 'four'});
        Object.prototype.iBank.gIf(value => value,'one', 'four');
    
        function compOne() {
    
            function compTwo() {
    
                function compTree() {
                    console.log( 'compTree' )
                }
                compTree();
            }
            compTwo();
        }
        compOne();
    }
    scopeTwo();
    
    Object.prototype.iBank.show();
    console.log('---------------------------------------')
}

setTimeout(() => {
    Object.prototype.iBank.show();
}, 2000);