/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n === 0 || n === 1) {
        return n;
    }
    let a = 0;
    let b = 1;
    let result = 0;
    for (i = 2; i <= n; i++) {
        result = a + b;
        a = b;
        b = result;
    }
    return result;
};