// 1 - the firstNumberArr variable stores an array of numbers (empty at first)
// 2 - when a NUMBER btn is pressed, that number is pushed to the array, which is converted into a number
// 3.1 - when an OPERATOR btn is pressed, the operator variable = '+' or '-' or '*' or '/' (depending on the pressed btn)
// 3.2 - here's also when the value of the addsToFirstNumber becomes false
// 4 - now the secondNumberArr takes input and is converted into a number, just as firstNumber did
// 5 - when equalsBtn is pressed, we call the operate() with the three args: firstNumber, operator & secondNumber and see the result


// Create two arrays that take input from number btns (next we'll store the input in two variables)
let firstNumberArr = [];
let secondNumberArr = [];

// Create three variables, one for each part of an operation
// These will be passed as arguments to the operate function
let firstNumber;
let operator;
let secondNumber;

// Create a variable that stores the result for each opearation
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
};

// Create a variable for the display
let display = document.getElementById('display-txt');
display.textContent = 0;

// Create variables for each button & add event listeners
// Top Three Buttons
let clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('pointerdown', () => {
    clearBtn.style.backgroundColor = '#a33c41';
});
clearBtn.addEventListener('pointerup', () => {
    clearBtn.style.backgroundColor = '#f75f66';
});
clearBtn.addEventListener('pointerdown', () => {
    window.location.reload();
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
divideBtn.addEventListener('pointerdown', () => {
    operator = '/';
});
divideBtn.addEventListener('pointerdown', () => {
    addsToFirstNumber = false;
});

let multiplyBtn = document.getElementById('multiply-btn');
multiplyBtn.addEventListener('pointerdown', () => {
    multiplyBtn.style.backgroundColor = '#3b3f72';
});
multiplyBtn.addEventListener('pointerup', () => {
    multiplyBtn.style.backgroundColor = '#767ee1';
});
multiplyBtn.addEventListener('pointerdown', () => {
    operator = '*';
});
multiplyBtn.addEventListener('pointerdown', () => {
    addsToFirstNumber = false;
});

let minusBtn = document.getElementById('minus-btn');
minusBtn.addEventListener('pointerdown', () => {
    minusBtn.style.backgroundColor = '#3b3f72';
});
minusBtn.addEventListener('pointerup', () => {
    minusBtn.style.backgroundColor = '#767ee1';
});
minusBtn.addEventListener('pointerdown', () => {
    operator = '-';
});
minusBtn.addEventListener('pointerdown', () => {
    addsToFirstNumber = false;
});

let plusBtn = document.getElementById('plus-btn');
plusBtn.addEventListener('pointerdown', () => {
    plusBtn.style.backgroundColor = '#3b3f72';
});
plusBtn.addEventListener('pointerup', () => {
    plusBtn.style.backgroundColor = '#767ee1';
});
plusBtn.addEventListener('pointerdown', () => {
    operator = '+';
});
plusBtn.addEventListener('pointerdown', () => {
    addsToFirstNumber = false;
});


let equalsBtn = document.getElementById('equals-btn');
equalsBtn.addEventListener('pointerdown', () => {
    equalsBtn.style.backgroundColor = '#3b3f72';
});
equalsBtn.addEventListener('pointerup', () => {
    equalsBtn.style.backgroundColor = '#767ee1';
});
equalsBtn.addEventListener('pointerdown', () => {
    operate(firstNumber, operator, secondNumber);
});


// Numbers Buttons(and the comma)
let nineBtn = document.getElementById('nine-btn');
nineBtn.addEventListener('pointerdown', () => {
    nineBtn.style.backgroundColor = '#484b54';
});
nineBtn.addEventListener('pointerup', () => {
    nineBtn.style.backgroundColor = '#9299a9';
});
nineBtn.addEventListener('pointerdown', () => {
    sendDigit(9);
});

let eightBtn = document.getElementById('eight-btn');
eightBtn.addEventListener('pointerdown', () => {
    eightBtn.style.backgroundColor = '#484b54';
});
eightBtn.addEventListener('pointerup', () => {
    eightBtn.style.backgroundColor = '#9299a9';
});
eightBtn.addEventListener('pointerdown', () => {
    sendDigit(8);
});

let sevenBtn = document.getElementById('seven-btn');
sevenBtn.addEventListener('pointerdown', () => {
    sevenBtn.style.backgroundColor = '#484b54';
});
sevenBtn.addEventListener('pointerup', () => {
    sevenBtn.style.backgroundColor = '#9299a9';
});
sevenBtn.addEventListener('pointerdown', () => {
    sendDigit(7);
});

let sixBtn = document.getElementById('six-btn');
sixBtn.addEventListener('pointerdown', () => {
    sixBtn.style.backgroundColor = '#484b54';
});
sixBtn.addEventListener('pointerup', () => {
    sixBtn.style.backgroundColor = '#9299a9';
});
sixBtn.addEventListener('pointerdown', () => {
    sendDigit(6);
});

let fiveBtn = document.getElementById('five-btn');
fiveBtn.addEventListener('pointerdown', () => {
    fiveBtn.style.backgroundColor = '#484b54';
});
fiveBtn.addEventListener('pointerup', () => {
    fiveBtn.style.backgroundColor = '#9299a9';
});
fiveBtn.addEventListener('pointerdown', () => {
    sendDigit(5);
});

let fourBtn = document.getElementById('four-btn');
fourBtn.addEventListener('pointerdown', () => {
    fourBtn.style.backgroundColor = '#484b54';
});
fourBtn.addEventListener('pointerup', () => {
    fourBtn.style.backgroundColor = '#9299a9';
});
fourBtn.addEventListener('pointerdown', () => {
    sendDigit(4);
});

let threeBtn = document.getElementById('three-btn');
threeBtn.addEventListener('pointerdown', () => {
    threeBtn.style.backgroundColor = '#484b54';
});
threeBtn.addEventListener('pointerup', () => {
    threeBtn.style.backgroundColor = '#9299a9';
});
threeBtn.addEventListener('pointerdown', () => {
    sendDigit(3);
});

let twoBtn = document.getElementById('two-btn');
twoBtn.addEventListener('pointerdown', () => {
    twoBtn.style.backgroundColor = '#484b54';
});
twoBtn.addEventListener('pointerup', () => {
    twoBtn.style.backgroundColor = '#9299a9';
});
twoBtn.addEventListener('pointerdown', () => {
    sendDigit(2);
});

let oneBtn = document.getElementById('one-btn');
oneBtn.addEventListener('pointerdown', () => {
    oneBtn.style.backgroundColor = '#484b54';
});
oneBtn.addEventListener('pointerup', () => {
    oneBtn.style.backgroundColor = '#9299a9';
});
oneBtn.addEventListener('pointerdown', () => {
    sendDigit(1);
});

let zeroBtn = document.getElementById('zero-btn');
zeroBtn.addEventListener('pointerdown', () => {
    zeroBtn.style.backgroundColor = '#484b54';
});
zeroBtn.addEventListener('pointerup', () => {
    zeroBtn.style.backgroundColor = '#9299a9';
});
zeroBtn.addEventListener('pointerdown', () => {
    sendDigit(0);
});

let commaBtn = document.getElementById('comma-btn');
commaBtn.addEventListener('pointerdown', () => {
    commaBtn.style.backgroundColor = '#484b54';
});
commaBtn.addEventListener('pointerup', () => {
    commaBtn.style.backgroundColor = '#9299a9';
});
commaBtn.addEventListener('pointerdown', () => {
    sendDigit(',');
});


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
    
        firstNumber = parseInt(firstNumberArr.join(''));
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
    
        secondNumber = parseInt(secondNumberArr.join(''));
        display.textContent = secondNumber;
    }
};