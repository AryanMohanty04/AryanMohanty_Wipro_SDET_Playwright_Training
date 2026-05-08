// Variables & Data Types

//Q1>Create a program that swaps two numbers without using a third variable.
console.log("Swapping two numbers:- ")

let a = 10;
let b = 20;
console.log(`Before Swapping a=${a},b=${b}`);

[a,b] = [b,a];

console.log(`After Swapping a=${a},b=${b}`)


// Q2> Write a program to check whether a given value is a number, string, boolean, null, or
// undefined
console.log("\nQuestion 2 Answer:- ")

let value = 100;
// value = "Hello";
// value = true;
// value = null;
// value = undefined;

if (typeof value === "number"){
    console.log("It is a Number");
} 
else if (typeof value === "string"){
    console.log("It is a String");
} 
else if (typeof value === "boolean"){
    console.log("It is a Boolean");
} 
else if (typeof value === "undefined"){
    console.log("It is Undefined");
} 
else if (value === null){
    console.log("It is Null");
} 
else{
    console.log("Unknown Data Type");
}

//Q3>Convert temperature from Celsius to Fahrenheit using variables.
console.log("\nQuestion 3 Answer:")

let celsius = 30;
let fahrenheit = (9/5 * celsius) + 32;
console.log("Temperature in Fahrenheit",fahrenheit);


// Q4> Create a simple calculator using variables and arithmetic operators.
console.log("\nQuestion 4 Answer:");
let num1 = 1000;
let num2 = 700;

console.log("Addition: ", num1 + num2);
console.log("Subtraction:",num1-num2);
console.log("Multiplication: ",num1 *num2);
console.log("Division: ",num1/num2);
console.log("Modulus: ",num1%num2);

//Q5> Write a program that takes a user’s birth year and calculates age
console.log("\nQuestion 5 Answer: ")
let birthYear = 2002;
let currentYear = 2026;

let age = currentYear - birthYear;

console.log("Your age is:", age);