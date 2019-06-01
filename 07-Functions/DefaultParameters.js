// function interest(principal, rate, years) {

// ES6 Method for default value
function interest(principal, rate = 3.5, years = 5) {
    /*rate = rate || 3.5;
    years = years || 5;*/

    return principal * rate / 100 * years;
}

let a = interest(10000);

console.log(a);