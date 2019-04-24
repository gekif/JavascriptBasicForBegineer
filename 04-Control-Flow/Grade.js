/**
 * Notes
 * 1-59: F
 * 60-69: D
 * 70-79 C
 * 80-89: B
 * 90-100: A
 */

const marks = [80, 80, 80];


console.log(calculateGrade(marks));


function calculateGrade(marks) {
    let sum = 0;

    for (let mark of marks)
        sum += mark;

    let average = sum / marks.length;

    // First Method
/*    if (average >= 0 && average <= 59) return 'F';
    if (average >= 60 && average <= 69) return 'D';
    if (average >= 70 && average <= 79) return 'C';
    if (average >= 80 && average <= 89) return 'B';
    if (average >= 90 && average <= 100) return 'A';*/

    // Second Method
    if (average < 60) return 'F';
    if (average < 70) return 'E';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
}