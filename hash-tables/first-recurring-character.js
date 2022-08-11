// Google question
// Given an array = [2,5,1,2,3,5,1,2,4]:
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]:
// It should return 1

// Given an array = [2,3,4,5]:
// It should return undefined

// const arr = [2, 5, 1, 2, 3, 5, 1, 2, 4];
// const arr = [2, 1, 1, 2, 3, 5, 1, 2, 4];


// Naive and wrong for [2,1,1,2,3,5,1,2,4]
function firstRecurringChar1(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return arr[i];
            }
        }
    }
    return undefined;
} // O(n^2)
// O(1) space complexity

function firstRecurringChar(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== i) {
            return arr[i];
        }
    }
    return undefined;
}

// const arr = [2, 5, 1, 2, 3, 5, 1, 2, 4];
function firstRecurringChar2(arr) {
    let map = {}; // unique keys
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        if (map[arr[i]]) { // if value is true
            return arr[i];
        } else {
            map[arr[i]] = true;
        }
        console.log(map);
    }
    return undefined;
} // O(n) but increased the memory (space complexity)


function firstRecurringChar3(arr) {
    const mySet = new Set();
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        if (mySet.has(arr[i])) {
            return arr[i];
        }
        mySet.add(arr[i]);
        console.log(mySet);
    }
    return undefined;
}

console.log(firstRecurringChar1(arr));