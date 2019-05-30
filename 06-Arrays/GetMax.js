const numbers = [1, 2, 3, 4];

const max = getMax( [1, 2, 2, 1, 3] );

console.log(max);

function getMax(array) {
    // Basic Implementation
/*    if (array.length === 0) return undefined;

    let max = array[0];

    for (let i = 1; i < array.length; i++)
        if (array[i] > max)
            max = array[i];

    return max;*/


    // Using reduce method first method
/*    array.reduce((accumulator, current) => {
        if (current > accumulator) return current;
        return accumulator;
    });*/

    // Shorter version of redice second method
    return array.reduce((a, b) => (a > b) ? a : b);

}