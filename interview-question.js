// Given 2 arrays, create a function that lets a user know (true/false) whether these two arrays contain any common items
// For example:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return false

// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// should return true

// 2 parameters - arrays - no size limit
// return true or false

// Ask how large the array is going to get
// Is our goal here to be as efficient as possible with our function.
// What is more important - space or time Complexity?

// Looks like nested loop, comparing 2 different arrays, and have 2 for loops - one nested on top of each other
// O(n^2) This we want to avoid
// Not the best solution, not efficient code

function containsCommonItem(arr1, arr2) {
    // Nested for loops
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                // console.log('true');
                return true;
            }
        }
    }
    // console.log('false');
    return false;

}

// This is more like:
// O(a*b) Time complexity
// O(1) Space complexity
// We're not creating any variables, we're using input arrays

// containsCommonItem(array1, array2);



// const array1 = ['a', [], null, undefined, true, false];
// const array2 = ['z', 'y', 1, null, []];

// Different solution for improving time complexity:
// Turn array into an object
// array1 ==> obj {
//     a: true,
//     b: true,
//     c: true,
//     x: true
// }
// Object properties are turned into strings when created
// We can now use our object with array2
// We can check each item in array2 to this object to see if property exists
// array2[index] === obj.properties

function containsCommonItem2(arr1, arr2) {
    // loop throught first array and create object where properties === items in the array
    //  can we assume always 2 params?
    // if () checks - to make sure that what the inputs you are getting are what you're expecting - testing

    // Modularizing your code:
    // mapArrayToObject(arr1);
    // compareArrayToObject(arr2);
    // Ideally function does 1 thing


    let map = {};
    for (let i = 0; i < arr1.length; i++) {
        if (!map[arr1[i]]) {
            // Create const item (first one will be 'a')
            const item = arr1[i];
            // Add const item into map object and make it equal to true
            map[item] = true;
            // {
            //     a: true
            // }
        }
    }
    console.log(map);

    // loop through second array and check if item in second array exists on created object.
    for (let j = 0; j < arr2.length; j++) {
        if (map[arr2[j]]) {
            // console.log('true');
            return true;
        }
    }
    // console.log('false');
    return false;

    // 2 separate for loops, not nested
}
// Time complexity O(a+b) is better
// O(a) Space complexity

// containsCommonItem2(array1, array2)

// How can we break the code?
// What happens if we receive as an input only 1 array?

// { '1': true, z: true, y: true, null: true }
// containsCommonItem2(array2) // error
// containsCommonItem2(array2, 'z') // true
// containsCommonItem2(array2, null) // error
// containsCommonItem2(array2, '1') // true
// containsCommonItem2(array2, 1) // false

// {
//     '0': true,
//     a: true,
//     b: true,
//     c: true,
//     x: true,
//     '': true,
//     null: true,
//     undefined: true,
//     true: true,
//     false: true
//   }
// containsCommonItem2(array1, 0) // false
// containsCommonItem2(array1, '0') // true
// containsCommonItem2(array1, undefined) // error
// containsCommonItem2(array1, 'undefined') // false
// containsCommonItem2(array1, 'true') // false
// containsCommonItem2(array1, true) // false
// containsCommonItem2(array1, 'false') // true (will map the string and find letter 'a')
// containsCommonItem2(array1, false) // false
// containsCommonItem2(array1, 1) // false

// const array3 = [NaN];
// const array4 = [NaN];
// containsCommonItem2(array3, array4) // true

// How can we improve it ?
// Since we're using an object, only numbers, strings and booleans can be used correctly
// Might not work if we use non-literal values

function containsCommonItem3(arr1, arr2) {
    // console.log(arr1.some(item => arr2.includes(item)))
    return arr1.some(item => arr2.includes(item));
}

// const array5 = ['a', 'b'];
// const array6 = ['c', 'd'];
// containsCommonItem3(array5, array6)


