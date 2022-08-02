function LongestWord(sen) {

    const splittedArr = sen.split(' ')
    let wordLen = 0;
    let longestWord = '1';
    for (let i = 0; i < splittedArr.length; i++) {
        splittedArr[i] = splittedArr[i].replace(/[^a-zA-Z0-9 ]/g, "");
        // https://bobbyhadz.com/blog/javascript-remove-special-characters-from-string#:~:text=Use%20the%20replace()%20method,t%20contain%20any%20special%20characters.
        // str.replace(/[^\w ]/g, '');
        if (splittedArr[i].length > wordLen) {
            wordLen = splittedArr[i].length;
            longestWord = splittedArr[i];
        }
    }

    return longestWord;
}

// keep this function call here 
console.log(LongestWord("fun&!! time"));