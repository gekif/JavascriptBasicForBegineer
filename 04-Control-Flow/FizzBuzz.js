// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => 'Not a number'
// Different between function in plain javascript and ES6 is
// In Plain javascript you can call function first without define it
// In ES6, you must create function first, then declare it


//Output FizzBuzz Plain Java Script

//Output Fizz
// const output = fizzBuzz(3);

// Output Buzz
// const output = fizzBuzz(5);

// Output Not A Number
// const output = fizzBuzz(false);

// Output FizzBuzz
// const output = fizzBuzz(15);

// Not Fizz, Buzz or FizzBuzz
// const output = fizzBuzz(7);

// Output to console
console.log(output);


// FizzBuzz Function
// const fizzBuzz = (input) => {
function fizzBuzz (input) {
    if (typeof input !== 'number')
        return 'Not a number';

    if (input % 3 === 0 && input % 5 === 0)
    // if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';

    if (input % 3 === 0)
        return 'Fizz';

    if (input % 5 === 0)
        return 'Buzz';

    // if (input % 3 !== 0 || input % 5 !== 0)
    return input;

}
// };

//Output FizzBuzz Plain ES6
/*
const output = fizzBuzz(3);
console.log(output);*/
