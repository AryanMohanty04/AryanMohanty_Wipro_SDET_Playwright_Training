//Objects
// Q1. Create an object for a student and display all properties dynamically.
console.log("Question 1 Answer:");
let studentObject = {
    name: "Ray",
    age: 21,
    course: "JavaScript",
    city: "Chennai"
};
for (let key in studentObject) {
    console.log(key + ":", studentObject[key]);
}

// Q2. Count number of keys in an object.

console.log("\nQuestion 2 Answer:");

let employeeObject = {
    id: 101,
    name: "Aryan",
    department: "IT",
    salary: 50000
};

let keyCount = Object.keys(employeeObject).length;

console.log("Total Keys:", keyCount);




// Q3. Merge two objects into one.

console.log("\nQuestion 3 Answer:");

let firstObject = {
    name: "Ray",
    age: 21
};

let secondObject = {
    course: "JavaScript",
    city: "Chennai"
};

let mergedObject = {
    ...firstObject,
    ...secondObject
};

console.log("Merged Object:", mergedObject);




// Q4. Convert an object into an array of keys and values.

console.log("\nQuestion 4 Answer:");

let laptopObject = {
    brand: "Dell",
    ram: "16GB",
    storage: "512GB SSD"
};

let objectKeys = Object.keys(laptopObject);
let objectValues = Object.values(laptopObject);

console.log("Keys:", objectKeys);
console.log("Values:", objectValues);




// Q5. Create a shopping cart object and calculate total bill amount.

