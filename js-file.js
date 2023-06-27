// Create variables for each button & add event listeners

// Top Three Buttons
let clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('pointerdown', () => {
    clearBtn.style.backgroundColor = '#a33c41';
});
clearBtn.addEventListener('pointerup', () => {
    clearBtn.style.backgroundColor = '#f75f66';
});

let positiveBtn = document.getElementById('positive-btn');
positiveBtn.addEventListener('pointerdown', () => {
    positiveBtn.style.backgroundColor = '#a33c41';
});
positiveBtn.addEventListener('pointerup', () => {
    positiveBtn.style.backgroundColor = '#f75f66';
});

let percentBtn = document.getElementById('percent-btn');
percentBtn.addEventListener('pointerdown', () => {
    percentBtn.style.backgroundColor = '#a33c41';
});
percentBtn.addEventListener('pointerup', () => {
    percentBtn.style.backgroundColor = '#f75f66';
});

// Right Side Buttons
let divideBtn = document.getElementById('divide-btn');
divideBtn.addEventListener('pointerdown', () => {
    divideBtn.style.backgroundColor = '#3b3f72';
});
divideBtn.addEventListener('pointerup', () => {
    divideBtn.style.backgroundColor = '#767ee1';
});

let multiplyBtn = document.getElementById('multiply-btn');
multiplyBtn.addEventListener('pointerdown', () => {
    multiplyBtn.style.backgroundColor = '#3b3f72';
});
multiplyBtn.addEventListener('pointerup', () => {
    multiplyBtn.style.backgroundColor = '#767ee1';
});

let minusBtn = document.getElementById('minus-btn');
minusBtn.addEventListener('pointerdown', () => {
    minusBtn.style.backgroundColor = '#3b3f72';
});
minusBtn.addEventListener('pointerup', () => {
    minusBtn.style.backgroundColor = '#767ee1';
});

let plusBtn = document.getElementById('plus-btn');
plusBtn.addEventListener('pointerdown', () => {
    plusBtn.style.backgroundColor = '#3b3f72';
});
plusBtn.addEventListener('pointerup', () => {
    plusBtn.style.backgroundColor = '#767ee1';
});

let equalsBtn = document.getElementById('equals-btn');
equalsBtn.addEventListener('pointerdown', () => {
    equalsBtn.style.backgroundColor = '#3b3f72';
});
equalsBtn.addEventListener('pointerup', () => {
    equalsBtn.style.backgroundColor = '#767ee1';
});

// Numbers (and the comma)
let nineBtn = document.getElementById('nine-btn');
nineBtn.addEventListener('pointerdown', () => {
    nineBtn.style.backgroundColor = '#484b54';
});
nineBtn.addEventListener('pointerup', () => {
    nineBtn.style.backgroundColor = '#9299a9';
});

let eightBtn = document.getElementById('eight-btn');
eightBtn.addEventListener('pointerdown', () => {
    eightBtn.style.backgroundColor = '#484b54';
});
eightBtn.addEventListener('pointerup', () => {
    eightBtn.style.backgroundColor = '#9299a9';
});

let sevenBtn = document.getElementById('seven-btn');
sevenBtn.addEventListener('pointerdown', () => {
    sevenBtn.style.backgroundColor = '#484b54';
});
sevenBtn.addEventListener('pointerup', () => {
    sevenBtn.style.backgroundColor = '#9299a9';
});

let sixBtn = document.getElementById('six-btn');
sixBtn.addEventListener('pointerdown', () => {
    sixBtn.style.backgroundColor = '#484b54';
});
sixBtn.addEventListener('pointerup', () => {
    sixBtn.style.backgroundColor = '#9299a9';
});

let fiveBtn = document.getElementById('five-btn');
fiveBtn.addEventListener('pointerdown', () => {
    fiveBtn.style.backgroundColor = '#484b54';
});
fiveBtn.addEventListener('pointerup', () => {
    fiveBtn.style.backgroundColor = '#9299a9';
});

let fourBtn = document.getElementById('four-btn');
fourBtn.addEventListener('pointerdown', () => {
    fourBtn.style.backgroundColor = '#484b54';
});
fourBtn.addEventListener('pointerup', () => {
    fourBtn.style.backgroundColor = '#9299a9';
});

let threeBtn = document.getElementById('three-btn');
threeBtn.addEventListener('pointerdown', () => {
    threeBtn.style.backgroundColor = '#484b54';
});
threeBtn.addEventListener('pointerup', () => {
    threeBtn.style.backgroundColor = '#9299a9';
});

let twoBtn = document.getElementById('two-btn');
twoBtn.addEventListener('pointerdown', () => {
    twoBtn.style.backgroundColor = '#484b54';
});
twoBtn.addEventListener('pointerup', () => {
    twoBtn.style.backgroundColor = '#9299a9';
});

let oneBtn = document.getElementById('one-btn');
oneBtn.addEventListener('pointerdown', () => {
    oneBtn.style.backgroundColor = '#484b54';
});
oneBtn.addEventListener('pointerup', () => {
    oneBtn.style.backgroundColor = '#9299a9';
});

let zeroBtn = document.getElementById('zero-btn');
zeroBtn.addEventListener('pointerdown', () => {
    zeroBtn.style.backgroundColor = '#484b54';
});
zeroBtn.addEventListener('pointerup', () => {
    zeroBtn.style.backgroundColor = '#9299a9';
});

let commaBtn = document.getElementById('comma-btn');
commaBtn.addEventListener('pointerdown', () => {
    commaBtn.style.backgroundColor = '#484b54';
});
commaBtn.addEventListener('pointerup', () => {
    commaBtn.style.backgroundColor = '#9299a9';
});


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