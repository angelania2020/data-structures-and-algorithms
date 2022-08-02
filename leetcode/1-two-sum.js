/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const nums = [2, 7, 11, 15];
const target = 4;

const twoSum = function (nums, target) {
    const len = nums.length;
    const mySet = new Set();
    const indices = [];
    for (let i = 0; i < len; i++) {
        if (mySet.has(nums[i])) {
            indices.push(nums.indexOf(target - nums[i]));
            indices.push(i);
            console.log(indices);
            return indices;
        }
        mySet.add(target - nums[i]);
    }
    // In case there is no solution, we'll just return false
    console.log('No target.');
    return false;
};

twoSum(nums, target);