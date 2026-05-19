//JSON Problems

// Q1. Convert JSON string into object.
console.log("Question 1 Answer:");
let studentJsonString = '{"name":"Ray","age":21,"course":"JavaScript"}';

let studentObject = JSON.parse(studentJsonString);

console.log(studentObject);

console.log(studentObject.name);
console.log(studentObject.age);
console.log(studentObject.course);

// Q2. Convert object into JSON string.
console.log("\nQuestion 2 Answer:");

let laptopObject = {
  brand: "Asus",
  ram: "16GB",
  storage: "512GB SSD",
};

let laptopJsonString = JSON.stringify(laptopObject);

console.log(laptopJsonString);

// Q3. Parse API-like JSON data and display values.
console.log("\nQuestion 3 Answer:");

let apiJsonData = `
{
    "userId": 101,
    "username": "Ray",
    "email": "ray@gmail.com",
    "city": "Siliguri"
}
`;

let parsedApiObject = JSON.parse(apiJsonData);

console.log("User ID:", parsedApiObject.userId);

console.log("Username:", parsedApiObject.username);

console.log("Email:", parsedApiObject.email);

console.log("City:", parsedApiObject.city);

// Q4. Create a JSON array of employee records.
console.log("\nQuestion 4 Answer:");

let employeeRecords = [
  {
    id: 1,
    name: "Aryan",
    department: "IT",
    salary: 52000,
  },

  {
    id: 2,
    name: "Tada",
    department: "HR",
    salary: 45000,
  },

  {
    id: 3,
    name: "Ray",
    department: "Finance",
    salary: 69000,
  },
];

let employeeJsonArray = JSON.stringify(employeeRecords);

console.log(employeeJsonArray);

// Q5. Filter JSON data based on conditions.
console.log("\nQuestion 5 Answer:");

let employeeJsonData = `

[
    {
        "id": 1,
        "name": "Aryan",
        "department": "IT",
        "salary": 50000
    },

    {
        "id": 2,
        "name": "Tada",
        "department": "HR",
        "salary": 35000
    },

    {
        "id": 3,
        "name": "Azora",
        "department": "IT",
        "salary": 60000
    }

]
`;

let employeeObjectArray =
    JSON.parse(employeeJsonData);

let filteredEmployees =
    employeeObjectArray.filter(function (employeeValue) {

        return employeeValue.salary > 40000;
    });

console.log(filteredEmployees);