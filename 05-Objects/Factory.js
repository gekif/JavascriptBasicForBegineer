
// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw')
        }
    };
}


// Define Object
const circle1 = createCircle(1);
const circle2 = createCircle(2);


// Calling Function
// console.log(circle1);
// console.log(circle2);

// circle1.draw();
circle2.draw();
