//Q1> The Swapper: Create two variables, a and b, and assign them numbers. Write a few lines of code to swap their values so that a gets b's value and vice-versa.
console.log("Question 1 answer:- ");

let a = 10;
let b = 20;
console.log("Before Swapping value of a:", a);
console.log("Before Swapping value of b:", b);
let temp = a;
a = b;
b = temp;

console.log("After Swapping value of a:", a);
console.log("After Swapping value of b:", b);

//Q2> Type Checker: Write a function that takes one input and console.log's a message saying "This is a number" or "This is a string" based on the data type provided.
console.log();
console.log("Question 2 answer:- ");
function typeChecker(input) {
  if (typeof input === "number") {
    console.log("This is a number");
  } else if (typeof input === "string") {
    console.log("This is a string");
  } else {
    console.log("Invalid Type");
  }
}

typeChecker("Aryan");
typeChecker(10);

//Q3> Initials Creator: Given a variable let fullName = "John Doe", write code to extract the first letter of the first name and the first letter of the last name to create the string "JD".
console.log();
console.log("Question 3 answer:- ");

let fullName = "John Doe";
let firstWord = fullName[0];
let spaceIndex = fullName.indexOf(" ");
let secondWord = fullName[spaceIndex + 1];

let combinedWords = firstWord + secondWord;
console.log(combinedWords);

//Q4>The Cleaner: Given the string let messy = " Javascript is fun ", write a single line of code that removes the extra spaces at the start/end and changes all the letters to lowercase.
console.log();
console.log("Question 4 answer:- ");
let str = " JavaScript is fun ";
console.log(str.trim().toLowerCase());

//Q5> The Grocery List: Create an array called cart with three items. Write code to add "Milk" to the end, "Eggs" to the beginning, and then remove the very last item you just added.
console.log();
console.log("Question 5 answer:- ");
let cart = ["DietCoke", "RedBull", "Monster"];

console.log("Adding Milk to the end: ");
cart.push("Milk");
console.log(cart);

console.log("Adding Eggs to the beginning: ");
cart.unshift("Eggs");
console.log(cart);

console.log("Removing the last item from the array: ");
cart.pop();
console.log(cart);

//Q6> Value Finder: Given let numbers = [10, 20, 30, 40, 50], write a line of code that checks if the number 30 exists in the array (returning true or false) and another line to find the index of the number 50.
console.log();
console.log("Question 6 answer:- ");

let numbers = [10, 20, 30, 40, 50];
let found = false;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] == 30) {
    found = true;
  } 
  if(numbers[i] == 50){
    console.log("50 is found at index",i);
  } 
}
console.log(found);
