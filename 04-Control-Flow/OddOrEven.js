showNumbers(10);

function showNumbers(limit) {

    for (let i = 0; i <= limit; i++) {

        // First Method if else
        /*if (i % 2 === 0) {
            console.log(i, 'EVEN');
        } else {
            console.log(i, 'ODD');
        }*/

        // Second Method if else
        if (i % 2 === 0) console.log(i, 'EVEN');
        else console.log(i, 'ODD');

        // Ternary Operator
        const message = (1 % 2 === 0) ? 'EVEN' : 'ODD';
        console.log(i, message)

    }
}