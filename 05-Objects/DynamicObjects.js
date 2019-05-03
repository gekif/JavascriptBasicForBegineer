const circle = {
    radius: 1
};

// Dynamics Objects
circle.color = 'yellow';
circle.draw = function () {

};

// Delete Objects
delete circle.color;
delete circle.draw;

console.log(circle);