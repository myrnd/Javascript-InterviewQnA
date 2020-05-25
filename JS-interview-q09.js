// How can we implement Singleton Pattern in ES6

class Singleton {
    static #instance = null;
    static getInstance() {
        return Singleton.#instance | (Singleton.#instance = this);
    }

    constructor() {
        if (this.constructor === Singleton)
            throw new Error('Cannot create instance of Singleton. Use Singleton.getInstace()');
    }
}

var x = Singleton.getInstance();
var y = Singleton.getInstance();
console.log(Object.is(x, y));

//console.log(Singleton.#instance);

try {
    var z = new Singleton();
    console.log(z);
} catch(ex) {
    console.log(ex.message);
}

