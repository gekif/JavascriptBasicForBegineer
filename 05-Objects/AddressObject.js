// Street
// City
// Zip Code
// showAddress(address)

let address = {
    street: 'Jalan camar 2',
    city: 'Jakarta Utara',
    zipCode: '14140'
};

function showAddress(address) {
    for (let key in address)
        console.log(key, address[key]);
}

showAddress(address);



