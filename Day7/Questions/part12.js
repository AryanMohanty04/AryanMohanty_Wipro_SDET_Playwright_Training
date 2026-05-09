//Primitive vs Reference Types

// Q1. Create examples showing primitive copying behavior.
console.log("Question 1 Answer:");

let originalScore = 90;

let copiedScore = originalScore;

copiedScore = 100;

console.log("Original Score:", originalScore);

console.log("Copied Score:", copiedScore);


// Q2. Create examples showing object reference behavior.

console.log("\nQuestion 2 Answer:");

let firstStudent = {
    name: "Ray",
    age: 21
};

let secondStudent = firstStudent;

secondStudent.age = 25;

console.log(firstStudent);

console.log(secondStudent);


// Q3. Clone an object without affecting original object.

console.log("\nQuestion 3 Answer:");

let originalLaptop = {
    brand: "Dell",
    ram: "8GB"
};

let clonedLaptop = {
    ...originalLaptop
};

clonedLaptop.ram = "16GB";

console.log("Original Object:", originalLaptop);

console.log("Cloned Object:", clonedLaptop);


// Q4. Compare arrays using reference equality.

console.log("\nQuestion 4 Answer:");

let firstArray = [1, 2, 3];

let secondArray = [1, 2, 3];

let thirdArray = firstArray;

console.log(firstArray === secondArray);

console.log(firstArray === thirdArray);


// Q5. Demonstrate shallow copy using spread operator.

console.log("\nQuestion 5 Answer:");

let originalUser = {
    name: "Aryan",
    address: {
        city: "Siliguri"
    }
};

let copiedUser = {
    ...originalUser
};

copiedUser.address.city = "Odisha";

console.log("Original User:", originalUser);

console.log("Copied User:", copiedUser);