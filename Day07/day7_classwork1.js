//Hoisting (let and temp dead zone)
console.log(greet);
let greet = "Hello, World!";
console.log(greet);

//hoisting (var)
console.log(greet);
var greet = "Hello, World!";
console.log(greet);

//Function Declaration Hoisting
sayHi();
function sayHi() {
    console.log("Hello, World!");
}

//Function express hoisting
sayHi();
var sayHi = function () {
    console.log("Hello");
};

sayHi();
var sayHi = () => {
    console.log("Hello");
};

//Object Literals
const car = {
    brand: "Tesla",

    start: () => {
        console.log("VroomVroom");
    }
};
car.start();

function Car(brand) {
    this.brand = brand;
}

const c1 = new Car("Tesla");
const c2 = new Car("BMW");

console.log(c1.brand);
console.log(c2.brand);