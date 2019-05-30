const numbers = [-1, 1, 2, 3];

// const filtered = numbers.filter(n => n >= 0);

// const items = filtered.map(n => '<li>' + n + '</li>');

// First map method of items
/*const items = filtered.map(n => {
    const obj = { value: n };
    return obj;
});*/

// Second map method of items
/*const items = filtered.map(n => {
    return { value: n };
});*/

// Third map method of items
// const items = filtered.map(n => ({ value: n }) );

// Fourth map method of items using chaining methods
/*const items = numbers
    .filter(n => n >= 0)
    .map(n => ({ value: n }) );*/

// const html = '<ul>' + items.join('') + '</ul>';

// Result filter is 2 and 3, and map each object (display in elements) using chaining methods
const items = numbers
    .filter(n => n >= 0)
    .map(n => ({ value: n }) )
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);


// Print Result
// console.log(filtered);

console.log(items);

// console.log(html);