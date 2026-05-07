function Person(name) {
    this.name = name;
}

Person.prototype.sayHi = function () {
    console.log("hello " + this.name);
};

const me = new Person("aryan");
const you = new Person("you");

me.sayHi();
you.sayHi();

console.log(Object.getPrototypeOf(me) === Person.prototype);

console.log(me.sayHi === you.sayHi);