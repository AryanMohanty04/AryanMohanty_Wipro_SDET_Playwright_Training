//Stack & Heap Memory
//Q1> Create examples showing stack memory behavior.
console.log("Question 1 Answer:");
let firstNumber = 10;
let secondNumber = firstNumber;

secondNumber = 20;

console.log("First Number:", firstNumber);
console.log("Second Number:", secondNumber);

//Q2> Create examples showing heap memory references.

console.log("\nQuestion 2 Answer:");

let firstPerson = {
    name: "Ray",
    age: 21
};
let secondPerson = firstPerson;
secondPerson.age = 25;
console.log(firstPerson);
console.log(secondPerson);

//Q3> Demonstrate object mutation through references.
console.log("\nQuestion 3 Answer:");

let laptopObject = {
    brand: "Omen",
    ram: "18GB"
};
function upgradeRam(deviceObject) {

    deviceObject.ram = "24GB";
}
upgradeRam(laptopObject);
console.log(laptopObject);

//Q4> Predict outputs of memory-related programs.

console.log("\nQuestion 4 Answer:");
let originalArray = [1, 2, 3];
let copiedArray = originalArray;
copiedArray.push(4);

console.log(originalArray);
console.log(copiedArray);
