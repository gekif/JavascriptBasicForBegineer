const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};


/**
 * First method
 */
/*const another = {};

for (let key in circle)
    another[key] = circle[key];

another['radius'] = circle['radius'];
*/


/**
 Better Ways
 */
/*const another = Object.assign({

    // added property
    color: 'yellow'
}, circle);*/


/**
 * Another Method
 * using spread operator
 */
const another = {...circle};

// Print Object
console.log(another);