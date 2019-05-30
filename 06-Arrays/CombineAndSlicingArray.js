const first = [1, 2, 3];
const second = [4, 5, 6];

// Combine array from first and second elements
const combined = first.concat(second);

// Slice elements, extract 1,2,5,6
// const sliced = combined.slice(2, 4);

// Slice elements, extract 1,2
// const sliced = combined.slice(2);

// Get copy from original array
const sliced = combined.slice();

// Print Combined
console.log(combined);

// Print slice
console.log(sliced);