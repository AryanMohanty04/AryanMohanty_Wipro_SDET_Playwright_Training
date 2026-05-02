let a = "Aryan";
let b = "Tada";
let c = "Ray";

let d = "Hello "+ a + ", " +b+" and "+c+"!";
console.log(d);


// Template Literals
let e = `Hello ${a}, ${b} and ${c}!`;
console.log(e);
let f = `The length of a is ${a.length}`;
console.log(f);


function greet(name){
    return `Hello ${name}!`;
}
console.log(greet("Aryan Mohanty"));

//Function perforoming Table calculations
function table(num){
    for(let i = 1;i<=10;i++){
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
table(5);

//Arrow Functions
let sum = (x,y) => x + y;
console.log("Sum of 5 and 10:",sum(5,10));

//Call back function
let arr = [1, 2, 3, 4, 5,"Aryan"];

arr 
  .filter(x => typeof x === "number")
  .map(y => y * 2)
  .forEach(x => console.log("Element after *2:", x));

console.log("-----------------------")

// forEach() ->just loop
let arr1 = [1,2,3,4,5];
arr1.forEach(x =>{
    console.log(x)
})

console.log("-----------------------")

//map() -> returns a new array, use when we need to change the data
let arr2 = [1,2,3,4,5,6,8];
let doubled = arr2.map(x => x * 2);
console.log(doubled);

console.log("-----------------------")

//filter() -> selects specific elements
let arr3 = [1,2,3,4,5,6];
let even = arr3.filter(x => x%2 == 0);
console.log(even);

console.log("-----------------------")

//find() -> returns the first element that matches the condition 
let arr5 = [2,3,4,5,6];
console.log(arr5.find(x => x > 3))
console.log("-----------------------")

//Combining everything learned till now:-
let arr4 = [1,2,3,4,5,6,7,8,9,10];
arr4
    .filter( x => x%2 == 0)
    .map(x => x*10)
    .forEach(x => console.log(x));


console.log("-----------------------")
// Using find()
let array = [5, 12, 8, 20, 3, 18];
let result = array 
    .filter(x => x > 10)
    .map(x => x*2)
    .find(x => x > 30)
console.log(result);
console.log();

// Random
console.log(Math.random(0,1))

//Math.floor() -> towards lowest value
console.log(Math.floor(10.99));
console.log(Math.floor(-1.222));

//Math.ceil() -> towards highest value
console.log(Math.ceil(4.1));
console.log(Math.ceil(11.1));

//Converting string to integer
let str = "123";
console.log(parseInt(str))

//Converting a string into a decimal float
let str1 = "123.31";
let num = parseFloat(str1);

//Array methods
let arr8 = [1,2,3,4,5];
console.log(arr8);

//Pop
console.log("Removing last element of the array "+arr8.pop());
console.log(arr8);

//Push
console.log("Adding element at the last index of the array")
arr8.push(100);
console.log(arr8);

//Unshift
console.log("Adding element at the front of the array");
arr8.unshift(110);
console.log(arr8);

//Shift()
console.log("Removing from front of the array");
arr8.shift();
console.log(arr8);

//Splice() -> Adding or removing element {we do modify array when we use this}

let arr9 = [1,2,3,4,5,6,7,8,9,10];
console.log("Performing Splice operation: ")
arr9.splice(1,3);
console.log(arr9);

//Slice()
let newArr = arr9.splice(1,2);
console.log(newArr);

//IndexOf
let arr10 = [10,20,30,40,50];
console.log(arr10.indexOf(30));


let colors = ["red", "green", "blue"];

console.log(colors.indexOf("yellow")); // Returns undefined
console.log(colors.includes("yellow")); 
console.log(colors.length); 
console.log(colors[3]); 
console.log(colors[colors.length - 1]); 
colors.push("yellow"); 
console.log(colors); 
colors.pop(); 
console.log(colors); 
colors.unshift("purple"); 
console.log(colors);
colors.shift(); 
console.log(colors); 