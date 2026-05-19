//Functions

// Q1. Create a function that returns the greatest of three numbers.
console.log("Question 1 Answer:");
function findGreatestNumber(firstNumber, secondNumber, thirdNumber) {
  if (firstNumber >= secondNumber && firstNumber >= thirdNumber) {
    return firstNumber;
  } else if (secondNumber >= firstNumber && secondNumber >= thirdNumber) {
    return secondNumber;
  } else {
    return thirdNumber;
  }
}

console.log("Greatest Number:", findGreatestNumber(45, 89, 23));

// Q2. Write a function to check whether a number is palindrome.
console.log("\nQuestion 2 Answer:");
function checkPalindromeNumber(inputNumber) {
  let originalNumber = inputNumber;
  let reversedNumber = 0;

  while (inputNumber > 0) {
    let digit = inputNumber % 10;

    reversedNumber = reversedNumber * 10 + digit;

    inputNumber = Math.floor(inputNumber / 10);
  }

  if (originalNumber === reversedNumber) {
    return "Palindrome Number";
  } else {
    return "Not a Palindrome Number";
  }
}

console.log(checkPalindromeNumber(121));

// Q3. Create a reusable function for currency conversion.
console.log("\nQuestion 3 Answer:");
function convertCurrency(amountInRupees, exchangeRate) {
  return amountInRupees * exchangeRate;
}

let convertedAmount = convertCurrency(1000, 0.012);

console.log("Converted Amount:", convertedAmount);

// Q4. Write a function that accepts an array and returns only even numbers.
console.log("\nQuestion 4 Answer:");
function getEvenNumbers(numberArray) {
  let evenNumbersArray = [];

  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] % 2 === 0) {
      evenNumbersArray.push(numberArray[i]);
    }
  }

  return evenNumbersArray;
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]));

// Q5. Create a calculator using functions for add, subtract, multiply, and divide.
console.log("\nQuestion 5 Answer:");
function addNumbers(firstValue, secondValue) {
  return firstValue + secondValue;
}

function subtractNumbers(firstValue, secondValue) {
  return firstValue - secondValue;
}

function multiplyNumbers(firstValue, secondValue) {
  return firstValue * secondValue;
}

function divideNumbers(firstValue, secondValue) {
  return firstValue / secondValue;
}

console.log("Addition:", addNumbers(10, 5));

console.log("Subtraction:", subtractNumbers(10, 5));

console.log("Multiplication:", multiplyNumbers(10, 5));

console.log("Division:", divideNumbers(10, 5));
