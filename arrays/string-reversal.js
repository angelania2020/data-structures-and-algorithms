const str = 'Angelinka';
const result = 'anilegnA'

function reverse(str) {
    // check input
    if (!str || str.length < 2 || typeof str !== 'string') {
        console.log('Hmmm..That\'s not good.')
        return 'Hmmm.. That\'s not good.'
    }

    const backwardsArray = [];
    // const length = str.length;
    const totalItems = str.length - 1;
    for (let i = totalItems; i >= 0; i--) {
        backwardsArray.push(str[i]);
    }
    reversedStr = backwardsArray.join('');
    console.log(reversedStr);
    return reversedStr;
}
reverse(str);

// str.split(); // to split a string into an array

function reverse2(str) {
    // reverse() // built-in array method
    // console.log(str.split('').reverse().join(''));
    return str.split('').reverse().join('');
}
reverse2(str);


const reverse3 = str => str.split('').reverse().join('');
const reverse3 = str => [...str].reverse().join('');
reverse3(str);