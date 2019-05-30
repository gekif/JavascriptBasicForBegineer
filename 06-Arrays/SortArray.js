/*
const numbers = [2, 3, 1];

// numbers.sort();

numbers.reverse();

console.log(numbers);
*/



const courses = [
    { id: 1, name: 'Node.js'},
    { id: 2, name: 'javaScript'},
];


// Sort byd id
// const course = courses.sort();


// Compare elements using sort
courses.sort((a, b) => {
    // a < b => -1
    // a > b => 1
    // a === b => 0

    // Avoid Ascii Character
    // Can be lowercase or uppercase
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;

});


console.log(courses);
