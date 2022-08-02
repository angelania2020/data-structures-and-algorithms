/**
 * @param {number[]} nums
 * @return {number}
 */

nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const maxSubArray = function (nums) {

    const sums = [];
    for (let i = 0; i < nums.length; i++) {
        const arr = [nums[i]];
        for (let j = i + 1; j < nums.length; j++) {
            arr.push(arr[arr.length - 1] + nums[j])
            console.log(j + ' ' + arr);
        }
        if (Math.max(...arr) > sums[sums.length - 1] && nums !== null) {
            sums.push(Math.max(...arr));
        } else {
            sums.push(Math.max(...arr));
        }
    }

    console.log(Math.max(...sums));
    console.log(sums);
    // return Math.max(...sums);

};

maxSubArray(nums); //Error