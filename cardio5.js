// Challenge 5: Letter changes
// change every letter of the string to the one that follows it and captalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp Uifsf'

function letterChanges(str) {
    let newStr = str.toLowerCase().replace(/[a-z]/gi, char =>{
        if(char === 'z' || char === 'Z') {
            return 'a';
        } else {
            return String.fromCharCode(char.charCodeAt() + 1);
        }
    });

newStr = newStr.replace(/a|e|i|o|u/gi, vowel => vowel.toUpperCase());

    return newStr;
}


// Call function
// const output = isAnagram('elbow', 'belows');
const output = letterChanges('Hello There');

console.log(output);