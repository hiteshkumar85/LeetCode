/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function (words, weights) {
    let ans = "";

    for (let word of words) {
        let sum = 0;

        for (let ch of word) {
            // ch.chatCodeAt(0) return the ASCII VALUE of ch (a-97 to z-122)
            sum += weights[ch.charCodeAt(0) - 97];
        }

        let rem = sum % 26;
        // String.fromCharCode  return the ch using ASCII VALUE
        ans += String.fromCharCode(122 - rem);
    }
    return ans;
};