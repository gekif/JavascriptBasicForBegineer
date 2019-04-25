/**
 * Notation
 *
 * Camel Notation: oneTwoThreeFour -> for Factory Function
 * Pascal Notation: OneTwoThreeFour -> for Constructor Function
 */


// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw')
        }
    };
}


// Calling Factory Function
const myCircle = createCircle(1);


// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}


// Calling Constructor Function
const circle = new Circle(1);
console.log(circle.radius);