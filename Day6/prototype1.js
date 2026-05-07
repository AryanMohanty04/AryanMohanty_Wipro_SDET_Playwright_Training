// function Person(name) {
//     this.name = name;
// }

// Person.prototype.sayHi = function () {
//     console.log("hello " + this.name);
// };

// const me = new Person("aryan");
// const you = new Person("you");

// me.sayHi();
// you.sayHi();

// console.log(Object.getPrototypeOf(me) === Person.prototype);

// console.log(me.sayHi === you.sayHi);

function Car(brand, speed) {

    this.brand = brand;
    this.speed = speed;
}
Car.prototype.drive = function () {
    console.log(this.brand + " is driving");
};
Car.prototype.brake = function () {
    console.log(this.brand + " stopped");
};
const bmw = new Car("BMW", 100);
const audi = new Car("Audi", 180);

bmw.drive();
audi.drive();

bmw.brake();