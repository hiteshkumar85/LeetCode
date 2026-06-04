/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let reverseArr = nums.reverse();
    k = k % nums.length;
    let result=  reverseArr.slice(0,k).reverse().concat(reverseArr.slice(k,nums.length).reverse());
    
    for(i =0; i< nums.length; i++){
        nums[i] = result[i];
    }
};