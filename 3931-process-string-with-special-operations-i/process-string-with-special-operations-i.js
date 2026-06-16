/**
 * @param {string} s
 * @return {string}
 */
var processStr = function (s) {
    let str = "";

    for (const ch of s) {
        if (ch >= 'a' && ch <= 'z') {
            str += ch;
        }
        else if (ch === '*') {
            str = str.slice(0, -1);
        }
        else if (ch === '#') {
            str += str;
        }
        else if (ch === '%') {
            str = str.split('').reverse().join('');
        }
    }

    return str;
};