function booooo(n) {
    for (let i = 0; i < n.length; i++) {
        console.log('Booooo!');
    }
}

booooo([1, 2, 3, 4, 5]); // Space complexity of O(1): one i variable


function arrayOfHiNTimes(n) {
    let hiArray = [];
    for (let i = 0; i < n; i++) {
        hiArray[i] = 'hi';
    }
    return hiArray;
}

arrayOfHiNTimes(6); // Space complexity of O(n), ignore i