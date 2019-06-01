function sum(...items) {
    // console.log(items);

    if (items.length === 1 && Array.isArray(items[0]))
        items = [...items[0]];

    return items.reduce((a, b) => a + b);
}

// Print Sum in Arguments
// console.log(sum(1, 2, 3, 4));

// Print Sum in Array
console.log(sum([1, 2, 3, 4]));