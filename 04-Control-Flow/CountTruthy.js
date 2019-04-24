/**
 * Refresh
 */

/*const isActive = true;
const name = 'Mosh'; // Truthy (True)
// const name = ''; // Falsy (false

// if (name) console.log('Hello');
const ft = (name) ? 'Truthy' : 'Falsy';
console.log(ft);*/


/*
* Falsy
*/

// Falsy
// undefined
// null
// ''
// false
// 0
// NaN


function countTruthy(array) {
    let count = 0;

    for (let value of array)
        if (value) count++;

    return count;

}

const array = [1, 2, 3, NaN];
console.log(countTruthy(array));
