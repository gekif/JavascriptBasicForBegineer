const max = (a, b) => {

    // First Version
/*    if (a > b)
        return a;
    else
        return b;*/

    // Second Version
    return (a > b) ? a : b;
};

let number = max(5, 2);
console.log(number);