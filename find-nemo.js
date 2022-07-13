const nemo = ['nemo']

function findNemo(array) {
    // for loop
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found NEMO!;')
        }
    }
}

findNemo(nemo);