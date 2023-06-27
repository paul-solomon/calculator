// Create functions for the basic math operations

// ADD
function add(a = 0, b = 0) {
    console.log("add function was called. result: " + (a + b));
    return a + b;
};

// SUBTRACT
function subtract(a = 0, b = 0) {
    console.log("Subtract fn result: " + (a - b));
    return a - b;
};

// MULTIPLY
function multiply(a = 0, b = 0) {
    console.log("Multiply fn result: " + (a * b));
    return a * b;
};

// DIVIDE
function divide(a = 0, b = 0) {
    if (b == 0) {
        console.log("ERR");
        return "ERR!"
    } 

    else if (b != 0) {
        console.log("Divide fn result: " + (a / b));
        return a / b;
    }
};

// Create three variables for each of the parts of an operation
let firstNumber;
let operator;
let secondNumber;

// Create 'operate()' - takes two numbers and the operator and then calls one of the above functions
function operate(num1, op, num2) {

    if (op == '+') {
        add(num1, num2);
    }

    else if (op == '-') {
        subtract(num1, num2);
    }

    else if (op == '*') {
        multiply(num1, num2);
    }

    else if (op == '/') {
        divide(num1, num2);
    }
};

operate(3, '*', 15);