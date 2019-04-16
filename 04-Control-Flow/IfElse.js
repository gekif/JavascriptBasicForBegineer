/**
 * Hour
 * If hour is between 6 am and 12 pm: Good Morning
 * If it is between 12 pm and 6 am: Good afternnon
 * Otherwise Good Evening
 */

/**
 * Fikar Example
 * @type {number}
 */

/*
let time = 20;

if (time >= 6 && time <= 12) {
    console.log(`Good Morning, it is ${time} o'clock`);
} else if ( time > 12 && time < 18) {
    console.log(`Good Afternoon, it is ${time} o'clock`);
} else {
    console.log(`Good Evening, it is ${time} o'clock`)
}*/


/**
 * Mosh Example
 */

let hour = 10;

// Curly Braces Version
/*if (hour >= 6 && hour < 12) {
    console.log('Good Morning');
} else if (hour >=12 && hour < 18 ) {
    console.log('Good Afternoon');
} else {
    console.log('Good Evening');
}*/

// Non Curly Braces Version
if (hour >= 6 && hour < 12)
    console.log('Good Morning');
else if (hour >=12 && hour < 18 )
    console.log('Good Afternoon');
else
    console.log('Good Evening');


