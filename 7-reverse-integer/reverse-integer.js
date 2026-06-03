/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let sign = x > 0 ? 1 : -1;
    let num = Math.abs(x);
    let revNum = 0;
    let lastDigit;

    while (num > 0) {
        lastDigit = num % 10;
        revNum = revNum * 10 + lastDigit;
        num = Math.floor(num / 10);
    }
 
    revNum = revNum * sign;
    if (revNum < -(2 ** 31) || revNum > (2 ** 31) - 1) {
        return 0;
    }

    return revNum;
};