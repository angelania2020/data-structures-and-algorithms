/**
 * @param {number[]} nums
 * @return {number}
 */

// nums = [1, 7, 3, 6, 5, 6]
nums = [2, 1, -1]

let pivotIndex = function (nums) {

    // Left sum
    let leftSum = 0;

    // Right sum
    let rightSum = 0;

    for (let i = 1; i < nums.length; i++) {
        rightSum += nums[i];
    }

    for (let i = 0; i < nums.length; i++) {
        if (leftSum === rightSum) {
            return i;
        }
        leftSum += nums[i];
        rightSum -= nums[i + 1];
    }
}

pivotIndex(nums);


// Approach #1: Prefix Sum [Accepted]
// Intuition and Algorithm

// We need to quickly compute the sum of values to the left and the right of every index.

// Let's say we knew S as the sum of the numbers, and we are at index i. If we knew the sum of numbers leftsum that are to the left of index i, then the other sum to the right of the index would just be S - nums[i] - leftsum.

// As such, we only need to know about leftsum to check whether an index is a pivot index in constant time. Let's do that: as we iterate through candidate indexes i, we will maintain the correct value of leftsum.

let pivotIndex = function (nums) {

    // Left sum
    let leftSum = 0;

    // Total sum
    let totalSum = 0;

    for (let i = 0; i < nums.length; i++) {
        totalSum += nums[i];
    }

    for (let i = 0; i < nums.length; i++) {
        if (leftSum === totalSum - leftSum - nums[i]) {
            return i;
        }
        leftSum += nums[i];
    }
    return (-1)
}

// Time Complexity: O(N), where NN is the length of nums.

// Space Complexity: O(1), the space used by leftsum and S.