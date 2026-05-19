// Strings
// Q1 Reverse a string without using built-in reverse methods.
console.log("Question 1 Answer: ");
let str = "AryanMohanty";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}
console.log("Reversed String: ", reversed);

// Q2> Count the number of vowels in a string.
console.log("\nQuestion 2 Answer: ");
let str1 = "AryanVowels";
let count = 0;

for (let i = 0; i < str1.length; i++) {
  let ch = str1[i].toLowerCase();

  if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
    count++;
  }
}

console.log(count);

// Q3> Check whether a string is a palindrome.
console.log("\nQuestion 3 Answer: ")
let name = "RaceCar".toLowerCase();
let rev= "";

for(let i = name.length - 1;i>=0;i--){
    rev += name[i];
}

if(name === rev){
    console.log(true);
} else{
    console.log(false);
}

//Q4> Capitalize the first letter of every word in a sentence
console.log("\nQuestion 4 Answer: ");

let sentence = "hello world from javascript";

let result = sentence
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");

console.log(result);

//Q5>// Find the longest word in a sentence
console.log("\nQuestion 5 Answer: ");

let sent = "JavaScript is very powerful language";

let words = sent.split(" ");

let longestWord = "";

for(let i = 0; i < words.length; i++){

    if(words[i].length > longestWord.length){
        longestWord = words[i];
    }
}

console.log("Longest Word =", longestWord);