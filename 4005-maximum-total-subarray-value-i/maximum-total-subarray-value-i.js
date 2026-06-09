/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxTotalValue = function (nums, k) {
    let max = nums[0];
    let min = nums[0];

    for (num of nums) {
        if (num > max) max = num;
        if (num < min) min = num;
    }

    return k * (max - min);
};