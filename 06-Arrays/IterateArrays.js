const numbers = [1, 2, 3];

// First Method
/*for (let number of numbers)
    console.log(number);
    */

// Second Method Using Function
/*numbers.forEach(function (number) {
    console.log(number)
});*/

// Second Method Using ES6
numbers.forEach(number => console.log(number));
