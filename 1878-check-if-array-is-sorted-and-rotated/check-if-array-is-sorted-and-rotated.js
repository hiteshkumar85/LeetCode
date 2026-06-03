/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
    let fault = 0;
    for (i = 0; i < nums.length; i++) {
        if (nums.at(i - 1) > nums[i]) {
            if (fault) return false;
            fault++;
        }
    }
    return true;
};