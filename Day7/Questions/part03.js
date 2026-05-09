// Q1. Generate a random number between 1 and 100.
console.log("Question 1 Answer:");

let randomNumber = Math.floor(Math.random() * 100) + 1;

console.log(randomNumber);


// Q2. Check whether a number is prime
console.log("\nQuestion 2 Answer:");

let primeNum = 13;
let isPrime = true;

if (primeNum <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < primeNum; i++) {
        if (primeNum % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(primeNum + " is Prime");
} else {
    console.log(primeNum + " is Not Prime");
}


// Q3. Find factorial of a number using loops
console.log("\nQuestion 3 Answer:");

let factorialNum = 5;
let factorial = 1;

for (let i = 1; i <= factorialNum; i++) {
    factorial *= i;
}

console.log("Factorial:", factorial);


// Q4. Find Fibonacci series up to n numbers
console.log("\nQuestion 4 Answer:");

let fibonacciCount = 10;
let first = 0;
let second = 1;

console.log(first);
console.log(second);

for (let i = 3; i <= fibonacciCount; i++) {
    let next = first + second;

    console.log(next);

    first = second;
    second = next;
}


// Q5. Check whether a number is Armstrong number
console.log("\nQuestion 5 Answer:");

let armstrongNum = 153;
let originalNum = armstrongNum;
let sum = 0;

while (armstrongNum > 0) {
    let digit = armstrongNum % 10;

    sum += digit ** 3;

    armstrongNum = Math.floor(armstrongNum / 10);
}

if (sum === originalNum) {
    console.log(originalNum + " is Armstrong");
} else {
    console.log(originalNum + " is Not Armstrong");
}