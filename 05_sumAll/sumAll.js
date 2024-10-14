const sumAll = function(firstNumber, secondNumber) {
    if (firstNumber < 0
        || secondNumber < 0
        || !Number.isInteger(firstNumber)
        || !Number.isInteger(secondNumber))
    return "ERROR";
    let startNumber = 0, endNumber = 0;
    if (firstNumber > secondNumber) {
        startNumber = secondNumber;
        endNumber = firstNumber;
    } else {
        startNumber = firstNumber;
        endNumber = secondNumber;
    }
    let sum = 0;
    for (let currentNumber = startNumber; 
        currentNumber <= endNumber; 
        currentNumber++) {
        sum += currentNumber;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
