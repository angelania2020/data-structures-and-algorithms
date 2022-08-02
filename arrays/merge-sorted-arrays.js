function mergeSortedArrays(arr1, arr2) {
    // input check
    if (typeof arr1 === 'undefined' || typeof arr2 === 'undefined' || arr1.length < 1 || arr2.length < 1) {
        // console.log('This is not right.')
        return 'This is not right.';
    }

    const mergedSortedArr = arr1.concat(arr2); // [0, 3, 4, 31, 4, 6, 30 ]
    const length = mergedSortedArr.length;

    do {
        isSorted = true;

        for (i = 0; i < length - 1; i++) {
            if (mergedSortedArr[i] > mergedSortedArr[i + 1]) {
                const temp = mergedSortedArr[i];
                mergedSortedArr[i] = mergedSortedArr[i + 1];
                mergedSortedArr[i + 1] = temp;
                isSorted = false;
            }
        }

    } while (!isSorted);


    console.log(mergedSortedArr);
    return mergedSortedArr;
}

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
// [0, 3, 4, 4, 6, 30, 31]

