//Loops

// Q1. Print star pyramid patterns.
console.log("Question 1 Answer:");
let pyramidRows = 5;
for (let i = 1; i <= pyramidRows; i++) {

    let stars = "";

    for (let j = 1; j <= i; j++) {
        stars += "* ";
    }

    console.log(stars);
}

// Q2. Print multiplication tables from 1 to 10.
console.log("\nQuestion 2 Answer:");

for (let tableNumber = 1; tableNumber <= 10; tableNumber++) {

    console.log("\nTable of " + tableNumber);

    for (let multiplier = 1; multiplier <= 10; multiplier++) {

        console.log(
            tableNumber + " x " + multiplier + " = " +
            (tableNumber * multiplier)
        );
    }
}


// Q3. Find sum of all even numbers between 1 and 100.
console.log("\nQuestion 3 Answer:");

let evenSum = 0;

for (let evenNumber = 1; evenNumber <= 100; evenNumber++) {

    if (evenNumber % 2 === 0) {
        evenSum += evenNumber;
    }
}

console.log("Sum of Even Numbers:", evenSum);


// Q4. Print all prime numbers between 1 and 100.
console.log("\nQuestion 4 Answer:");

for (let currentNumber = 2; currentNumber <= 100; currentNumber++) {

    let isPrimeNumber = true;

    for (let divisor = 2; divisor < currentNumber; divisor++) {

        if (currentNumber % divisor === 0) {
            isPrimeNumber = false;
            break;
        }
    }

    if (isPrimeNumber) {
        console.log(currentNumber);
    }
}


// Q5. Create a number guessing game using loops.
console.log("\nQuestion 5 Answer:");

let secretNumber = 7;
let guessedNumber = 5;

while (guessedNumber !== secretNumber) {

    console.log("Wrong Guess:", guessedNumber);

    guessedNumber++;

}

console.log("Correct Guess:", guessedNumber);