/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let index = 0;
    for (i = 0; i < nums.length; i++) {
        if (nums.indexOf(nums[i]) === i) {
            nums[index] = nums[i];
            index++;
        }
    }
    return index;
};
