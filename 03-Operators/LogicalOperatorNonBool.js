/**
 * Falsy (false)
 * undefined
 * null
 * 0
 * false
 * ''
 * NaN
 * Anything that is not Falsy ->Truthy
 * Short-circuiting
 */

// First color
let userColor = 'red';

// Will print blue
// let userColor = undefined;

// Second color
let defaultColor = 'blue';

// Compare current color
let currentColor = userColor || defaultColor;

// Print currentcolor
console.log(currentColor);

