const numbers = [3, 4];

// End
numbers.push(5, 6);

// Beginning
numbers.unshift(1, 2);

// Middle
// Start position from index 2
numbers.splice(2, 0, 'a', 'b');

// Print the Array
console.log(numbers);