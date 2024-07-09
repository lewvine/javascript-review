const defaultResult = 0;
let currentResult = defaultResult;

function addTwoNumbers(numOne, numTwo){
    const result = numOne + numTwo;
    return result;
}

currentResult = addTwoNumbers(1,2);


let calculationDescription = '(' + defaultResult + ' + 10) * 3 / 2 -1';

outputResult(currentResult, calculationDescription);

