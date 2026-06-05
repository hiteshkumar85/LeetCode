/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let result = 0;
    let count = 0;
    nums.forEach(element => {
        if (element === 1) {
            count++;
        } else {
            result = result > count ? result : count;
            count = 0;
        }
    });

    return result > count ? result : count;
};