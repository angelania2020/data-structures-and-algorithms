/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
// Output: [5,6,7,1,2,3,4]

// const nums = [1];
// const k = 2;

// const nums = [3, 4, 7];
// const k = 5;

const rotate = function (nums, k) {

    const len = nums.length;
    let cutArr = [];
    let cutArr2 = [];

    if (len === 1 || k === len || k === 0) {
        return nums;
    } else if (k < len) {
        for (i = 0; i < k; i++) {
            cutArr.push(nums.pop());
        }
        cutArr.reverse();
        nums.reverse();
        const cutLen = nums.length;
        for (i = 0; i < cutLen; i++) {
            cutArr.push(nums.pop())
        }
        nums.push(...cutArr);
        // nums = [...cutArr];
        return nums;
    } else if (k > len) {
        cutArr = nums;
        const diff = k - len;
        if (diff === len) {
            nums.push(...cutArr);
            return nums;
        } else {
            let times;
            if (diff < len) {
                times = diff;
            } else {
                times = diff % len;
            }
            for (i = 0; i < times; i++) {
                cutArr2.push(cutArr.pop());
            }
            cutArr2.reverse();
            cutArr.reverse();
            const cutLen = cutArr.length;
            for (i = 0; i < cutLen; i++) {
                cutArr2.push(cutArr.pop())
            }
            nums.push(...cutArr2);
            return nums;
        }
    }

};
console.log(rotate(nums, k)); 