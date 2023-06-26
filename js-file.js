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

let a = 5;
let f;

add(a, f);
subtract(a, f);
multiply(a, f);
divide(a, f);

