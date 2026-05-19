/*Write a JavaScript function that accepts two numbers as parameters, returns 
their sum, and prints the result to the console. Practice using both regular and 
arrow function syntax.*/

function add(a, b) {
    let sum = a + b;
    console.log(sum);
    return sum;
}

add(5, 10);

const addArrow = (x, y) => {
    let sum = x + y;
    console.log(sum);
    return sum;
};

addArrow(10, 10);