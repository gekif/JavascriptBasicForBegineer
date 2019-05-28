/*let address = {
    street: 'Jalan camar 2',
    city: 'Jakarta Utara',
    zipCode: '14140'
};*/


// Factory function
/*
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

let address = createAddress('a', 'b', 'c');

console.log(address);
*/


// Constructor function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

let address = new Address('a', 'b', 'c');

console.log(address);

