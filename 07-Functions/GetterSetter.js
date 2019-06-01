const person = {
    firstName: 'Dzulfikar',

    lastName: 'Maulana',

    get fullName () {
        return `${person.firstName} ${person.lastName}`;
    },

    set fullName(value) {
        const parts = value.split('');

        this.firstName = parts[0];
        this.lastName = parts[1];

    }


};


// console.log(person.firstName, person.lastName);

// Getters => Access Properties
// Setter => Change (mutate) them

person.fullName = 'Don Claw';

// console.log(person.fullName);

console.log(person);