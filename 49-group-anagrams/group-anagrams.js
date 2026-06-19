/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let ans = {};

    for (let string of strs) {
        let key = string.split('').sort().join('');
        if (!ans[key]) {
            ans[key] = [];
        }
        ans[key].push(string);
    }
    return Object.values(ans);
};