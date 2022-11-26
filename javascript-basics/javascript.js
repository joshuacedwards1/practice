// This is an in-line comment
/* This is a
multi-line comment */

let myName;

let a = 9;
let b;
b = a;

const myFirstName = "Joshua";
const myLastName = "Edwards";

function equalityTest(a, b) {
    if (a == b) {
        console.log("Equal");
    } else {
        console.log("Not Equal")
    }
}

function strictEqualityTest(a, b) {
    if (a === b) {
        console.log("Equal");
    } else {
        console.log("Not Equal");
    }
}

equalityTest(1, "1");
strictEqualityTest(1, "1");

let myDog = {
    "name": "Riley",
    "legs": 4,
    "tails": 1,
    "friends": ["Jenna", "Alyssia", "Emily", "Josh", "Harley"]
}

console.log(myDog.name);
console.log(myDog["friends"]);

function squared(a) {
    return a * a;
}

console.log(squared(10));

function numberToLetter(num) {
    let answer = "";
    switch (num) {
        case 1:
            answer = "A";
            break;
        case 2:
            answer = "B";
            break;
        case 3:
            answer = "C";
            break;
        case 4:
            answer = "D";
            break;
       case 5:
            answer = "E";
            break;
        case 6:
            answer = "F";
            break;
        case 7:
            answer = "G";
            break;
        case 8:
            answer = "H";
            break;
       case 9:
            answer = "I";
            break;
        case 10:
            answer = "J";
            break;
        case 11:
            answer = "K";
            break;
        case 12:
            answer = "L";
            break;
       case 13:
            answer = "M";
            break;
        case 14:
            answer = "N";
            break;
        case 15:
            answer = "O";
            break;
        case 16:
            answer = "P";
            break;
       case 17:
            answer = "Q";
            break;
        case 18:
            answer = "R";
            break;
        case 19:
            answer = "S";
            break;
        case 20:
            answer = "T";
            break;
        case 21:
            answer = "U";
            break;
        case 22:
            answer = "V";
            break;
       case 23:
            answer = "W";
            break;
        case 24:
            answer = "X";
            break;
        case 25:
            answer = "Y";
            break;
        case 26:
            answer = "Z";
            break;
        default:
            answer = "Please pick a valid number from 1 to 26";
            break;
    }
    return answer;
}

console.log(numberToLetter(27));

function countdown(num) {
    if (num < 1) {
        return [];
    } else {
        const countdownArray = countdown(num - 1);
        countdownArray.unshift(num);
        return countdownArray;
    }
}

console.log(countdown(10));

function rangeOfNumbers(startNum, endNum) {
    if (startNum === endNum) {
        return [startNum];
    } else {
        const rangeArray = rangeOfNumbers(startNum, endNum - 1);
        rangeArray.push(endNum);
        return rangeArray;
    }
}

console.log(rangeOfNumbers(1, 10));