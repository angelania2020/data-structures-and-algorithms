/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// const nums = [1, 2, 3, 4, 5, 6, 7];
// const k = 3;
// Output: [5,6,7,1,2,3,4]

const nums = [1];
const k = 2;

const rotate = function (nums, k) {

    let cutNum;

    for (i = 0; i < k; i++) {
        cutNum = nums.pop();
        nums.unshift(cutNum);
    }

    return nums;

};
console.log(rotate(nums, k)); // Time Limit Exceeded