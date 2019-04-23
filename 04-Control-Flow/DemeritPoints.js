// Speed Limit = 70
// 5 -> 1 Point
// Math.floor()
// 12 points -> suspended

// checkSpeed(50);
// checkSpeed(71);
// checkSpeed(75);
checkSpeed(500);


function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;


    if (speed < speedLimit + kmPerPoint)
        console.log('Ok');


    const points = Math.floor((speed - speedLimit) / kmPerPoint);

    if (points >= 12)
        console.log('License Suspended');
    else
        console.log('Points', points);


}
