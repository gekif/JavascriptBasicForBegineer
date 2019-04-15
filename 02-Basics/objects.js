// This two variable can be an object
// let name = 'fikar';
// let age = 30;


// Object declaration
let person = {
    name: 'Fikar',
    age: 30
};

// Print the object it
// console.log(person);

// Print the Object Partially (Dot Notation)
// console.log(person.name + ' ' + person.age);


// Change the properties of name using Dot Notation
// person.name = 'Febrina';

// Print the changes
// console.log(person.name);


/*
Change the properties of name using Bracket Notation
 */

// First Method
// person['name'] = 'Hastuti';

// Print the changes using first method
// console.log(person.name);


// Second Method
let selected = 'name';
person[selected] = 'Miko';

// Print the changes using second method
console.log(person.name);