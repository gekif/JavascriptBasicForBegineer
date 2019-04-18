let i = 0;

while (i <= 10) {

    // Break
    // if (i === 5) break;

    // Continue
    if (i % 2 === 0) {
        i++;

        // This continue makes odd number
        continue;
    }

    // Print i
    console.log(i);
    i++;
}