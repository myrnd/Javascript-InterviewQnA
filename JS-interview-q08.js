// How can we implement a Singleton pattern in Javascript-ES5

var Singleton = (function(){
    /*Private Member*/
    var instance = null;
    var createInstance = function() {
        return new Object();
    }

    return {
        getInstance: function() {
            return instance | (instance = createInstance());
        }
    }
})();

var x = Singleton.getInstance();
var y = Singleton.getInstance();

console.log(Object.is(x, y)); //true