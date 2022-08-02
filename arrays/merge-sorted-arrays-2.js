function mergeSortedArrays(array1, array2) {

    // Check input
    if (typeof array1 === 'undefined' || typeof array2 === 'undefined') {
        console.log('Two array inputs are required.');
        return 'Two array inputs are required.';
    }
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
        console.log('Input is not an array.');
        return 'Input is not an array.';
    }
    if (array1.length === 0) {
        console.log(array2);
        return array2;
    }
    if (array2.length === 0) {
        console.log(array1);
        return array1;
    }

    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0]
    let i = 1;
    let j = 1;

    while (array1Item || array2Item) {
        // console.log(array1Item, array2Item);
        if (!array2Item || array1Item < array2Item) {
            mergedArray.push(array1Item);
            array1Item = array1[i];
            i++;
        } else {
            mergedArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }
    }

    console.log(mergedArray);
    return mergedArray;
}

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
// [0, 3, 4, 4, 6, 30, 31]

// undefined < 6 //false