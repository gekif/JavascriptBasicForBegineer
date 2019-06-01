// function sum(...args) {
function sum(discount, ...prices) {
    // console.log(args);

    // let total = 0;

    // return args.reduce((a, b) => a + b);

    const total = prices.reduce((a, b) => a + b);

    return total * (1 - discount);

}


// console.log(sum(1, 2, 3, 4, 5, 10));

console.log(sum(0.1, 20, 30));