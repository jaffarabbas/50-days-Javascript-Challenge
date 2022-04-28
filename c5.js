// Write a function which accepts a string argument and returns the count of characters between the first and last character 'X'

const str = 'XeroX';

function getTheGapX(str) {
    // write your solution here
    return str.length < 3 ? -1 : str.length;
}

console.log(`Gap between the X's: ${getTheGapX(str)}`)