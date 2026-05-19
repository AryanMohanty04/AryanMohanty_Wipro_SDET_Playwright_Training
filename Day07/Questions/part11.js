//map(), filter(), forEach()

// Q1. Double all numbers in an array using map().
console.log("Question 1 Answer:");
let originalNumberArray = [1, 2, 3, 4, 5];
let doubledNumberArray = originalNumberArray.map(
  (numberValue) => numberValue * 2,
);

console.log(doubledNumberArray);

// Q2. Filter all students scoring above 80 marks.
console.log("\nQuestion 2 Answer:");
let studentMarksArray = [45, 82, 91, 67, 88, 73];
let highScoringStudents = studentMarksArray.filter(
  (marksValue) => marksValue > 80,
);

console.log(highScoringStudents);

// Q3. Print all array values using forEach().

console.log("\nQuestion 3 Answer:");

let cityArray = ["Bhubaneswar", "Kolkata", "Delhi", "Bangalore"];
cityArray.forEach(function (cityName) {
  console.log(cityName);
});

// Q4. Convert array of names into uppercase.
console.log("\nQuestion 4 Answer:");
let studentNamesArray = ["ray", "aryan", "tada", "azora"];
let uppercaseNamesArray = studentNamesArray.map((studentName) =>
  studentName.toUpperCase(),
);

console.log(uppercaseNamesArray);

// Q5. Extract only even numbers using filter().
console.log("\nQuestion 5 Answer:");
let mixedNumberArray = [11, 20, 33, 40, 55, 60, 77, 88];
let evenNumberArray = mixedNumberArray.filter(
  (numberElement) => numberElement % 2 === 0,
);

console.log(evenNumberArray);
