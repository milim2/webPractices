
// Challenge 4: Anagram
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Domitory' === 'dirty room##'

function isAnagram(str1, str2) {
    // console.log(formatStr(str1));
    return formatStr(str1) === formatStr(str2);
}

function formatStr(str) {
    return str
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('')
    
}

// Call function
// const output = isAnagram('elbow', 'belows');
const output = isAnagram('Dormitory', 'dirty room###!!!$$$$');

console.log(output);