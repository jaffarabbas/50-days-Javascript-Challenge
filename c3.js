// Write a program to reverse a given integer number

const num = 3849;

function reverseGivenInteger(num) {
    // write your solution here
    var str = num.toString().split("").reverse().join("");
    return parseInt(str);
}

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`)