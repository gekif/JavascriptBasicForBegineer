const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'}
];

// False result
// const a = courses.includes({id: 1, name: 'a'});

// For reference type using array find
const course = courses.find(function (course) {
    //true
    // return course.name === 'a';

    //undefined
    return course.name === 'xyz';
});

// console.log(a);
console.log(course);