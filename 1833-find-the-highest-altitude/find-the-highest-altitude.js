/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    let hightest = 0;
    let current = 0;

    for (let g of gain) {
        current += g;
        hightest = Math.max(current, hightest);
    }
    return hightest;
};