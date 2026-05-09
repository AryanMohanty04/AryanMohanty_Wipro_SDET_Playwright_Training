// Arrow functions
// Q1. Convert normal functions into arrow functions.
console.log("Question 1 Answer:");

console.log("\nNormal Function");
function addNumbers(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
console.log(addNumbers(10, 5));

console.log("Arrow Function:-> ");
const addArrowFunction = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
};
console.log(addArrowFunction(10, 5));

// Q2. Create one-line arrow functions with implicit return.
console.log("\nQuestion 2 Answer:");
const squareNumber = numberValue => numberValue * numberValue;
console.log(squareNumber(6));

// Q3. Use arrow functions with map().
console.log("\nQuestion 3 Answer:");
let originalNumbers = [1, 2, 3, 4, 5];
let doubledNumbers = originalNumbers.map(
    numberValue => numberValue * 2
);

console.log(doubledNumbers);

// Q4. Build an even/odd checker using arrow functions.
console.log("\nQuestion 4 Answer:");
const checkEvenOdd = numberInput =>
    numberInput % 2 === 0 ? "Even Number" : "Odd Number";
console.log(checkEvenOdd(10));
console.log(checkEvenOdd(7));

// Q5. Create a student grade calculator using arrow functions.
console.log("\nQuestion 5 Answer:");
const calculateGrade = studentMarks => {
    if (studentMarks >= 90) {
        return "Grade A";
    }
    else if (studentMarks >= 75) {
        return "Grade B";
    }
    else if (studentMarks >= 50) {
        return "Grade C";
    }
    else {
        return "Fail";
    }
};
console.log(calculateGrade(92));
console.log(calculateGrade(68));