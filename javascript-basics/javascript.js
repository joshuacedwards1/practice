// This is an in-line comment
/* This is a
multi-line comment */

var myName;

var a = 9;
var b;
b = a;

var myFirstName = "Joshua";
var myLastName = "Edwards";

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

console.log(equalityTest(1, "1"));
console.log(strictEqualityTest(1, "1"));