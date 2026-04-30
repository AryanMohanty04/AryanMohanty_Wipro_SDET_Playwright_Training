let a = 5;
let b = 10;
let str = "Hello, World!";
// String operations
console.log("String: ", str);
console.log("Length of String: ",str.length);
console.log("Uppercase: ",str.toUpperCase());
console.log("Lowercase: ",str.toLowerCase());
console.log("Substring: ",str.substring(0,5));
console.log("----------------------------")

//Mathematical Operations
console.log("Addition: ",a+b);
console.log("Substraction: ",a-b);
console.log("Multiplication: ",a*b);
console.log("Division: ",a/b);
console.log("Remainder: ",a%b);

console.log("----------------------------")

//Logical operations
a = 100;
b = 200;

console.log("a > b:",a>b);
console.log("a < b:",a<b);
console.log("a == b: ",a==b);
console.log("a === b: ",a===b);
console.log("a != b:", a != b);
console.log("a >= b:", a>=b);
console.log("a <= b:", a<=b);


console.log("---------------------------")

let obj = {
    name: "Aryan",
    id: 1,
    age: 23,
    city: "Bhubaneswar"
}

console.log("Object",obj)

console.log("----------------------------")

var l = 10;
let v = 20;
console.log("Outside of Scope");
console.log(l);
console.log(v)

{
    console.log("Inside scope");
    var l = 5;
    let v = 10;

    console.log(l);
    console.log(v);
}

console.log("Outside of Scope");
console.log(l);
console.log(v);


console.log("----------------------------")
console.log("Demonstrating Arrays and Loops implementation: ")
let arr = [1,"Aryan",true, 6.8];
let arr2 = [1,2,3,4,5,6];

console.log("Demonstrating for loop implementation: ")
for(let i=0;i<arr.length;i++){
    console.log("Element at index "+i+ ": " +arr[i]);
}

console.log()
console.log("Demonstrating while loop implementation: ")
let i = 0;
while(i<arr2.length){
    console.log("Element at index "+i+ ": " +arr2[i]);
    i++;
}

console.log()
console.log("Demonstrating for-each loop: ")
const numbers = [1,2,3,4];
numbers.forEach(function(num){
    console.log(num);
});


console.log("----------------------------")
console.log("Conditional Statement Demonstration: ");
let num1 = 100;
let num2 = 10;

if(num1 > num2){
    console.log("i is greater");
} else {
    console.log("j is greater");
}

console.log()
console.log("Switch Case Demonstration: ")

let choice = 1;
switch(choice){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid choice (select between 1-7)");
}