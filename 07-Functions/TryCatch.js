const person = {
    firstName: 'Dzulfikar',


    lastName: 'Maulana',


    set fullName(value) {
        // if (typeof value !== 'string') return;


        if (typeof value !== 'string')
            throw new Error('Value is not a string');

        const parts = value.split('');

        if (parts.length !== 2)
            throw new Error('Enter a First and Last Name');

        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};




try{
    // person.fullName = null;

    person.fullName = '';

}

catch(e) {

    // console.log(e);
    alert(e);
}



console.log(person);