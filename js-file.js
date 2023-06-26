// Create functions for the basic math operations

// ADD
function add(a = 0, b = 0) {
    console.log("Sum: " + (a + b));
    return a + b;
};

// SUBTRACT
function subtract(a = 0, b = 0) {
    console.log("Subtract: " + (a - b));
    return a - b;
};

// MULTIPLY
function multiply(a = 0, b = 0) {
    console.log("Multiply: " + (a * b));
    return a * b;
};

// DIVIDE
function divide(a = 0, b = 0) {
    if (b == 0) {
        console.log("ERR");
        return "ERR!"
    } 

    else if (b != 0) {
        console.log("Divide: " + (a / b));
        return a / b;
    }
};

// let a = 5;
// let f;

// add(a, f);
// subtract(a, f);
// multiply(a, f);
// divide(a, f);


// Create three variables for each of the parts of a calculator operation - two vars for the numbers, one for the operator
let num1;
let op;
let num2;

// Create 'operate()' - takes two numbers and the operator and then calls one of the above functions.
function operate(num1, op, num2) {

    if (op == '+') {
        console.log(num1 + num2);
    }

    else if (op == '-') {
        console.log(num1 + num2);
    }

    else if (op == '*') {
        console.log(num1 * num2);
    }

    else if (op == '/') {

        if (num2 != 0) {
            console.log(num1 / num2);
        }

        else if (num2 == 0) {
            console.log("CAN'T / BY 0!")
        }
    }

};

operate(10, '/', 0);