// Create two arrays that take input from number btns (next we'll store the input in two variables)
let firstNumberArr = [];
let secondNumberArr = [];

// Create three variables, one for each part of an operation
// These will be passed as arguments to the operate function
let firstNumber;
let operator;
let secondNumber;

// Create a variable that stores the result of each opearation
let result;

// Create a variable that decides when firstNumber stops taking input, so the secondNumber starts doing so
let addsToFirstNumber = true;

// Create functions for the basic math operations
// ADD
function add(a = 0, b = 0) {
    console.log("Add fn was called. result: " + (a + b));
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
        console.log("Oh, for real? Did you really tried that?");
        return "ERR!"
    } 

    else if (b != 0) {
        console.log("Divide fn result: " + (a / b));
        return a / b;
    }
};

function getPercent(a) {
    result = a / 100;
    display.textContent = result;
};


// Create 'operate()' - takes two numbers and the operator and then calls one of the above functions
function operate(num1, op, num2) {

    if (op == '+') {
        result = add(num1, num2);
    }

    else if (op == '-') {
        result = subtract(num1, num2);
    }

    else if (op == '*') {
        result = multiply(num1, num2);
    }

    else if (op == '/') {
        result = divide(num1, num2);
    }

    display.textContent = result;
    resetOp();
};

// Create a function that sets the correct operands & operators for the next math operation
function resetOp() {
    firstNumberArr = [];
    secondNumberArr = [];
    secondNumber = 0;
    firstNumber = result;
    addsToFirstNumber = false;
};

// Create a variable for the display
let display = document.getElementById('display-txt');
display.textContent = 0;


// Create a function that decides where to send each DIGIT (either to firstNumberArr or to secondNumberArr)
// This func will be called by each event listener on the number btns
function sendDigit(d) {

    if (addsToFirstNumber == true) {
        if (d == 9) {
            firstNumberArr.push('9');
        }
    
        else if (d == 8) {
            firstNumberArr.push('8');
        }
    
        else if (d == 7) {
            firstNumberArr.push('7');
        }
    
        else if (d == 6) {
            firstNumberArr.push('6');
        }
    
        else if (d == 5) {
            firstNumberArr.push('5');
        }
    
        else if (d == 4) {
            firstNumberArr.push('4');
        }
    
        else if (d == 3) {
            firstNumberArr.push('3');
        }
    
        else if (d == 2) {
            firstNumberArr.push('2');
        }
    
        else if (d == 1) {
            firstNumberArr.push('1');
        }
    
        else if (d == 0) {
            firstNumberArr.push('0');
        }

        else if (d == '.') {
            firstNumberArr.push('.');
        }
    
        firstNumber = parseFloat(firstNumberArr.join(''));
        display.textContent = firstNumber;
    }

    else if (addsToFirstNumber == false) {
        if (d == 9) {
            secondNumberArr.push('9');
        }
    
        else if (d == 8) {
            secondNumberArr.push('8');
        }
    
        else if (d == 7) {
            secondNumberArr.push('7');
        }
    
        else if (d == 6) {
            secondNumberArr.push('6');
        }
    
        else if (d == 5) {
            secondNumberArr.push('5');
        }
    
        else if (d == 4) {
            secondNumberArr.push('4');
        }
    
        else if (d == 3) {
            secondNumberArr.push('3');
        }
    
        else if (d == 2) {
            secondNumberArr.push('2');
        }
    
        else if (d == 1) {
            secondNumberArr.push('1');
        }
    
        else if (d == 0) {
            secondNumberArr.push('0');
        }

        else if (d == '.') {
            secondNumberArr.push('.');
        }
    
        secondNumber = parseFloat(secondNumberArr.join(''));
        display.textContent = secondNumber;
    }
};


// Create variables for each button & add event listeners
// Top Three Buttons
let clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('pointerdown', () => {
    clearBtn.style.backgroundColor = '#a33c41';
    window.location.reload();
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
    getPercent(firstNumber);
});
percentBtn.addEventListener('pointerup', () => {
    percentBtn.style.backgroundColor = '#f75f66';
});

// Right Side Buttons
let divideBtn = document.getElementById('divide-btn');
divideBtn.addEventListener('pointerdown', () => {
    divideBtn.style.backgroundColor = '#3b3f72';
    operator = '/';
    addsToFirstNumber = false;
});
divideBtn.addEventListener('pointerup', () => {
    divideBtn.style.backgroundColor = '#767ee1';
});

let multiplyBtn = document.getElementById('multiply-btn');
multiplyBtn.addEventListener('pointerdown', () => {
    multiplyBtn.style.backgroundColor = '#3b3f72';
    operator = '*';
    addsToFirstNumber = false;
});
multiplyBtn.addEventListener('pointerup', () => {
    multiplyBtn.style.backgroundColor = '#767ee1';
});

let minusBtn = document.getElementById('minus-btn');
minusBtn.addEventListener('pointerdown', () => {
    minusBtn.style.backgroundColor = '#3b3f72';
    operator = '-';
    addsToFirstNumber = false;
});
minusBtn.addEventListener('pointerup', () => {
    minusBtn.style.backgroundColor = '#767ee1';
});

let plusBtn = document.getElementById('plus-btn');
plusBtn.addEventListener('pointerdown', () => {
    plusBtn.style.backgroundColor = '#3b3f72';
    operator = '+';
    addsToFirstNumber = false;
});
plusBtn.addEventListener('pointerup', () => {
    plusBtn.style.backgroundColor = '#767ee1';
});

let equalsBtn = document.getElementById('equals-btn');
equalsBtn.addEventListener('pointerdown', () => {
    equalsBtn.style.backgroundColor = '#3b3f72';
    operate(firstNumber, operator, secondNumber);
});
equalsBtn.addEventListener('pointerup', () => {
    equalsBtn.style.backgroundColor = '#767ee1';
});


// Numbers Buttons(and the comma)
let nineBtn = document.getElementById('nine-btn');
nineBtn.addEventListener('pointerdown', () => {
    nineBtn.style.backgroundColor = '#484b54';
    sendDigit(9);
});
nineBtn.addEventListener('pointerup', () => {
    nineBtn.style.backgroundColor = '#9299a9';
});

let eightBtn = document.getElementById('eight-btn');
eightBtn.addEventListener('pointerdown', () => {
    eightBtn.style.backgroundColor = '#484b54';
    sendDigit(8);
});
eightBtn.addEventListener('pointerup', () => {
    eightBtn.style.backgroundColor = '#9299a9';
});

let sevenBtn = document.getElementById('seven-btn');
sevenBtn.addEventListener('pointerdown', () => {
    sevenBtn.style.backgroundColor = '#484b54';
    sendDigit(7);
});
sevenBtn.addEventListener('pointerup', () => {
    sevenBtn.style.backgroundColor = '#9299a9';
});

let sixBtn = document.getElementById('six-btn');
sixBtn.addEventListener('pointerdown', () => {
    sixBtn.style.backgroundColor = '#484b54';
    sendDigit(6);
});
sixBtn.addEventListener('pointerup', () => {
    sixBtn.style.backgroundColor = '#9299a9';
});

let fiveBtn = document.getElementById('five-btn');
fiveBtn.addEventListener('pointerdown', () => {
    fiveBtn.style.backgroundColor = '#484b54';
    sendDigit(5);
});
fiveBtn.addEventListener('pointerup', () => {
    fiveBtn.style.backgroundColor = '#9299a9';
});

let fourBtn = document.getElementById('four-btn');
fourBtn.addEventListener('pointerdown', () => {
    fourBtn.style.backgroundColor = '#484b54';
    sendDigit(4);
});
fourBtn.addEventListener('pointerup', () => {
    fourBtn.style.backgroundColor = '#9299a9';
});

let threeBtn = document.getElementById('three-btn');
threeBtn.addEventListener('pointerdown', () => {
    threeBtn.style.backgroundColor = '#484b54';
    sendDigit(3);
});
threeBtn.addEventListener('pointerup', () => {
    threeBtn.style.backgroundColor = '#9299a9';
});

let twoBtn = document.getElementById('two-btn');
twoBtn.addEventListener('pointerdown', () => {
    twoBtn.style.backgroundColor = '#484b54';
    sendDigit(2);
});
twoBtn.addEventListener('pointerup', () => {
    twoBtn.style.backgroundColor = '#9299a9';
});

let oneBtn = document.getElementById('one-btn');
oneBtn.addEventListener('pointerdown', () => {
    oneBtn.style.backgroundColor = '#484b54';
    sendDigit(1);
});
oneBtn.addEventListener('pointerup', () => {
    oneBtn.style.backgroundColor = '#9299a9';
});

let zeroBtn = document.getElementById('zero-btn');
zeroBtn.addEventListener('pointerdown', () => {
    zeroBtn.style.backgroundColor = '#484b54';
    sendDigit(0);
});
zeroBtn.addEventListener('pointerup', () => {
    zeroBtn.style.backgroundColor = '#9299a9';
});

let commaBtn = document.getElementById('comma-btn');
commaBtn.addEventListener('pointerdown', () => {
    commaBtn.style.backgroundColor = '#484b54';
    sendDigit('.');
});
commaBtn.addEventListener('pointerup', () => {
    commaBtn.style.backgroundColor = '#9299a9';
});