/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
    let left = [];
    let pivots = [];
    let right = [];
    for (num of nums) {
        if (num === pivot) {
            pivots.push(num);
        } else if (num <= pivot) {
            left.push(num);
        } else {
            right.push(num);
        }
    }
    return [...left, ...pivots, ...right];
};