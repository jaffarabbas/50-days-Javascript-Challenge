// Write a function which can convert the time input given in 12 hours format to 24 hours format

const time = '10:02PM';

function convertTo24HrsFormat(time) {
    // write your solution here
    var spliter = time.match(/[a-zA-Z]+|[0-9]+/g);
    if (spliter[0] === '12') spliter[0] = "00";
    if (spliter[2] === 'PM') spliter[0] = parseInt(spliter[0]) + 12;
    if (spliter[0].length < 2) spliter[0] = '0' + spliter[0];
    if (spliter[1].length < 2) spliter[1] = '0' + spliter[1];
    return `${spliter[0]}:${spliter[1]}`;
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`);