showPrimes(100);


function showPrimes(limit) {
    for (let number = 2; number <= limit; number++) {

        // Before Extracted
        /*let isPrime = true;

        for (let factor = 2; factor < number; factor++) {
            if (number % factor === 0) {
                isPrime = false;
                break;
            }
        }*/

        // First Print
        // if (isPrime) console.log(number);

        // Second Print
        if (isPrime(number)) console.log(number);
    }
}

function isPrime(number) {
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0)
            return false;

    return true;
}