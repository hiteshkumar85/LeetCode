/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let start = nums.indexOf(target);
    if (start === -1) {
        return [-1, -1];
    }
    let end = nums.lastIndexOf(target);
    return [start, end];
};