//Callback functions & setTimeout

// Q1. Create a delayed greeting message using setTimeout.
console.log("Question 1 Answer:");

setTimeout(function () {

    console.log("Hello, Welcome to JavaScript!");
}, 2000);


// Q2. Build a countdown timer.
console.log("\nQuestion 2 Answer:");
let countdownValue = 5;
let countdownTimer = setInterval(function () {
    console.log(countdownValue);
    countdownValue--;
    if (countdownValue < 0) {
        clearInterval(countdownTimer);
        console.log("Countdown Finished!");
    }

}, 1000);


// Q3. Create a callback-based calculator.

console.log("\nQuestion 3 Answer:");
function calculator(firstNumber, secondNumber, operationCallback) {
    return operationCallback(firstNumber, secondNumber);
}

function addOperation(valueOne, valueTwo) {
    return valueOne + valueTwo;
}

function multiplyOperation(valueOne, valueTwo) {
    return valueOne * valueTwo;
}

console.log(
    "Addition:",
    calculator(10, 5, addOperation)
);

console.log(
    "Multiplication:",
    calculator(10, 5, multiplyOperation)
);




// Q4. Simulate food ordering system using callbacks.
console.log("\nQuestion 4 Answer:");
function placeOrder(orderName, orderCallback) {
    console.log("Order Placed:", orderName);
    setTimeout(function () {
        orderCallback(orderName);
    }, 2000);
}

function orderReady(foodItem) {
    console.log(foodItem + " is Ready!");
}

placeOrder("Burger", orderReady);

// Q5. Execute functions sequentially using callbacks.
console.log("\nQuestion 5 Answer:");
function firstTask(nextFunction) {
    console.log("First Task Completed");
    nextFunction();
}

function secondTask(nextFunction) {
    console.log("Second Task Completed");
    nextFunction();
}

function thirdTask() {
    console.log("Third Task Completed");
}

firstTask(function () {
    secondTask(function () {
        thirdTask();
    });
});