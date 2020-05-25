// How can we define the static members in latest javascript

class Circle {
    static PI = 3.14;
    static getPI() {
        return Circle.PI;
    }

    getArea(r) {
        return Circle.PI * r * r;
    }
}

console.log(Circle.getPI()); //3.14

var x = new Circle();
console.log(x.getArea(2));
console.log(x.getArea(3));

