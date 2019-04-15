/**
 * Logical And (&&)
 * Returns TRUE if both operands are TRUE
 */

// Return True
// console.log(true && true);

// Return False
// console.log(true && false);


/**
 * Case Study High Income
 */

// Declare a variable
/*
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
*/

// Return True
// console.log(eligibleForLoan);


/**
 * Logical OR (||)
 * Return TRUE if one of the operands is TRUE
 */

// Same Example
/*
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome || goodCreditScore;

// Return True
console.log(eligibleForLoan);*/


/**
 * NOT (!)
 */

// Example 1
/*let highIncome = false;
let goodCreditScore = true;
let eligibleForLoan = highIncome || goodCreditScore;

// Return True
// let applicationRefused = eligibleForLoan;

// Return True Using Not Logical Operator
let applicationRefused = !eligibleForLoan;

// Print eligibleForLoan
console.log(applicationRefused);*/


// Example 2
let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;

// Return False
console.log('Eligible:', eligibleForLoan);

// Return True Using Not Logical Operator
let applicationRefused = !eligibleForLoan;
console.log('Application Refused:', applicationRefused);