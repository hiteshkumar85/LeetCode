/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
    let totalSum = nums.reduce((total, num) => total + num, 0);
    let leftSum = 0;
    let result = [];
    for (i = 0; i < nums.length; i++) {
        let rightSum = totalSum - leftSum - nums[i];
        result.push(Math.abs(leftSum - rightSum));
        leftSum += nums[i];
    }
    return result;
};