//Scope & Hoisting

// Q1. Predict output of variable hoisting examples.
console.log("Question 1 Answer:");
console.log(studentName);
var studentName = "Ray";
console.log(studentName);

// Q2. Create examples showing block scope using let.

console.log("\nQuestion 2 Answer:");

{
  let blockMessage = "Inside Block Scope";
  console.log(blockMessage);
}

// console.log(blockMessage);

// Q3. Write a program demonstrating closure behavior.
console.log("\nQuestion 3 Answer:");

function createCounter() {
  let counterValue = 0;
  function increaseCounter() {
    counterValue++;
    console.log("Counter:", counterValue);
  }

  return increaseCounter;
}

let counterFunction = createCounter();

counterFunction();
counterFunction();
counterFunction();

// Q4. Create nested functions and access outer variables.
console.log("\nQuestion 4 Answer:");

function outerLayer() {
  let outerText = "JavaScript";

  function middleLayer() {
    let middleText = "Closures";

    function innerLayer() {
      console.log(outerText + " " + middleText);
    }

    innerLayer();
  }

  middleLayer();
}
outerLayer();

// Q5. Debug a program with incorrect variable scoping.

console.log("\nQuestion 5 Answer:");
function testScope() {
    try {
        for (let numberValue = 1; numberValue <= 3; numberValue++) {
            console.log("Inside Loop:", numberValue);
        }
        console.log(numberValue);
    } 
    catch (error) {
        console.log("Error:", error.message);
    }
}
testScope();
