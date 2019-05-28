const now = new Date();
const date1 = new Date('May 11 2019 09:00');
const date2 = new Date(2018, 4, 11, 9, 0);


// Print now
// console.log(now);

// Print date1
// console.log(date1);

// Print date2
// console.log(date2);

// Set Up Year
console.log(now.setFullYear(2018));

// Convert Date to String
// console.log(now.toDateString());

// Convert Time to String
// console.log(now.toTimeString());

// Convert ISO to String
console.log(now.toISOString());