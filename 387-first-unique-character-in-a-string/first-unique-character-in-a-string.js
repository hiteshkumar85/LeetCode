/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let set = {};
    for (let ch of s) {
        set[ch] = (set[ch] || 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
        if (set[s[i]] === 1) {
            return i;
        }
    }
    return -1;
};