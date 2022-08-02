/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
// Output: [5,6,7,1,2,3,4]

const rotate = function (nums, k) {

    cutArr = [];
    let i;
    let times = k;

    for (i = 0; i < k; i++) {
        cutArr.push(nums[nums.length - i - 1]);
        times--;
    }
    for (i = 0; i < k; i++) {
        nums.pop();
        nums.splice(0, 0, cutArr[i])
    }

    return nums;

};
console.log(rotate(nums, k));

// Will not work:
// const nums = [1];
// const k = 2;
