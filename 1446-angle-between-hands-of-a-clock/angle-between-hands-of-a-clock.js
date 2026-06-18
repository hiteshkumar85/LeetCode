/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function (hour, minutes) {
    let minutesAngle = 6 * minutes;
    let hoursAngle = (hour % 12) * 30 + minutes * 0.5;
    let diff = Math.abs(hoursAngle - minutesAngle);
    return Math.min(diff, 360 - diff);
};