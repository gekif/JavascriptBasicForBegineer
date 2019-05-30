let min = 2;
let max = 10;
const numbers = arrayFromRange(min, max);


console.log(numbers);


function arrayFromRange(min, max) {
    const output = [];

    for ( let i = min; i <= max; i++) {
        output.push(i);
    }

    return output;
}