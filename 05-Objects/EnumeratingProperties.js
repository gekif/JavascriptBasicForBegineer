const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

/*for (let key in circle) {
    // console.log(key);
    console.log(key, circle[key]); // Key of properties
}*/

/*for (let key of Object.keys(circle)) {
    console.log(key);
}*/

/*for (let entry of Object.entries(circle)) {
    console.log(entry);
}*/

// if ('radius' in circle) console.log('yes');
// if ('color' in circle) console.log('yes');
// const check = 'color' in circle ? 'Yes' : 'No';
const check = 'radius' in circle ? 'Yes' : 'No';
console.log(check);