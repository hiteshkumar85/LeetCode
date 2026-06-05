/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let candidate = null;
    let vote = 0;
    nums.forEach(num => {
        if(vote === 0) {
            candidate = num;
        }
        vote += num === candidate ? 1 : -1;
    });
    return candidate;
};