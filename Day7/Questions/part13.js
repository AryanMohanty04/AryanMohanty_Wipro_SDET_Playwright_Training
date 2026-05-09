//Call Stack

// Q1. Trace execution order of nested function calls.

console.log("Question 1 Answer:");
function firstFunction() {
  console.log("First Function Started");
  secondFunction();
  console.log("First Function Ended");
}

function secondFunction() {
  console.log("Second Function Started");
  thirdFunction();
  console.log("Second Function Ended");
}

function thirdFunction() {
  console.log("Third Function Executed");
}

firstFunction();

// Q2. Create recursive factorial function.
console.log("\nQuestion 2 Answer:");
function factorialNumber(inputNumber) {
  if (inputNumber === 1) {
    return 1;
  }
  return inputNumber * factorialNumber(inputNumber - 1);
}

console.log(factorialNumber(5));

// Q3. Build recursive Fibonacci function.
console.log("\nQuestion 3 Answer:");
function fibonacciNumber(positionValue) {
  if (positionValue === 0) {
    return 0;
  }

  if (positionValue === 1) {
    return 1;
  }
  return (
    fibonacciNumber(positionValue - 1) + fibonacciNumber(positionValue - 2)
  );
}
console.log(fibonacciNumber(6));

// Q4. Simulate stack overflow with recursion.
console.log("\nQuestion 4 Answer:");
function recursiveLoop() {
  console.log("Function Calling Again");
  recursiveLoop();
}

// Q5. Draw call stack flow for nested functions.
console.log("\nQuestion 5 Answer:");
function outerFunction() {
  console.log(" | Outer Function  | ");
  middleFunction();
}
function middleFunction() {
  console.log(" | Middle Function | ");

  innerFunction();
}
function innerFunction() {
  console.log(" | Inner Function  | ");
}

outerFunction();
