/**
 * If a customer has more than 100 points,
 * they are a 'gold' customer, otherwise
 * theu are a 'silver' customer
 */

// Define Point
let points = 500;

// Checking customer point
let type = points >= 100 ? 'Gold' : 'Silver';

// Print the type of the customer
console.log(type);