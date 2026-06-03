/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let num = x;
    let revNum = 0;
    while (x > 0) {
        let lastDigit = x % 10;
        revNum = revNum * 10 + lastDigit;
        x = Math.floor(x / 10);
    }
    if (revNum === num) {
        return true;
    }

    return false;
};