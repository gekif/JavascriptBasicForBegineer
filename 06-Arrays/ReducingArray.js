const numbers = [-1, 1, 2, 3];

// First Method
/*
let sum = 0;

for (let n of numbers)
    sum += n;
*/


// Second method using reduce
/**
 * a = 0, c = 1 => a = 1
 * a = 1, c = -1 => a = 0
 * a = 0, c = 2 => a = 2
 * a = 2, c = 3 => a = 5
 *
 * a = 2, c = -1 => a = 0
 * a = 0, c = 2 => a = 2
 * a = 2, c = 3 => a = 5
 */
/*const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);*/

// Shorter version using reduce
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);


// Print Sum
console.log(sum);