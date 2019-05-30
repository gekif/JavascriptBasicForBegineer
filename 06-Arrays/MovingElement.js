const numbers = [1, 2, 3, 4];
const index = 1;
const offset = -2;


const output = move(numbers, index, offset);


console.log(output);

// console.error('Invalid ');


function move(array, index, offset) {
    const position = index + offset;

    if (position >= array.length || position < 0) {
        console.error('Invalid Offset');
        return;
    }

    const output = [...array];
    const element = output.splice(index, 1)[0];

    output.splice(position, 0, element);

    return output;
}