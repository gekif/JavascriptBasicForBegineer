/*
// let x = 10;
let x = { value: 10};
// let y = x; // Independent

// x = 20;
x.value = 20;*/


// let number = 10;
let obj = { value: 10 };

function increase(obj) {
    obj.value++;
}

// Value Types
/*
increase(number);
console.log(number); // print 10
*/

// Reference Types
increase(obj);
console.log(obj); // print 10

