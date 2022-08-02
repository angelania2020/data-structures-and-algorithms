/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nums = [0, 0, 1];


const moveZeroes = function (nums) {

    let zeroes = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            let index = i - zeroes.length;
            zeroes.push(index);
        }
    }

    zeroes.forEach(moveZeroes);

    function moveZeroes(item) {
        nums.splice(item, 1)
        nums.push(0);
    }

    return nums;
};

moveZeroes(nums)