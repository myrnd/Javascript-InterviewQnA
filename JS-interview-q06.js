// How can we a static member in Javascript (ES5)

function Circle() {
    this.getArea = function(radious) {
        return Circle.PI * radious * radious;
    }
}

Circle.PI = 3.14;
Circle.getPI = function() {
    return Circle.PI;
}

console.log(Circle.getPI()); //3.14

var circle = new Circle();
console.log(circle.getArea(2));
console.log(circle.getArea(3));
console.log(circle.getArea(4));