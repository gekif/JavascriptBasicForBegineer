const first = [1, 2, 3];
const second = [4, 5, 6];

// const combined = first.concat(second);

// Using spread operator
// Result [1, 2, 3, 4, 5, 6]
// const combined = [...first, ...second];


// Easy to combined array using spread operator
const combined = [...first, 'a', ...second, 'b'];

// const copy = combined.slice();

// Copy using slice operator
const copy = [...combined];

// console.log(combined);
console.log(copy);