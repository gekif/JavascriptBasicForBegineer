const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'}
];

// long code
/*
const course = courses.find(course => {
    return course.name === 'a';
});
*/

// Short code
const course = courses.find(course => course.name === 'a');


console.log(course);