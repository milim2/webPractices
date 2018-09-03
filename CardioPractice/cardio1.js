/////// INSTRUCTION //////
// ADD YOUR SOLUTIONS HERE 
// COMMENT YOUR SOLUTION OUT BEFORE YOU MAKE A PULL REQUEST
// ADD "SOLUTION BY [YOUR NAME]"

// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// If more than one longest word, put into an array
// ex. longestword('Hello, my name is Brad') === 'hello'
// ex. longestword('Hello there, my name is Brad') === ['hello', 'there']

function longestWord(sentence) {
    // create filtered array
    const wordArr = sentence.toLowerCase().match(/[a-z0-9]+/g);

    console.log(wordArr);
    // Sort by length
    const sorted = wordArr.sort((a,b) => b.length - a.length);

    // If multiple words, put into array
    const longestWordArr = sorted.filter((word) =>  word.length === sorted[0].length);

    // Check if more than one array value
    if (longestWordArr.length === 1) {
        // Return the word
        return longestWordArr[0]
    } else {
        return longestWordArr; 
    }
    console.log(sorted);

    return sorted[0];

}

// Call function
const output = longestWord('Hello Elizabeth, my name is Herold');

console.log(output);

