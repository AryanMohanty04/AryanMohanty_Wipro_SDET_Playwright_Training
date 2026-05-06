class Animal{
    constructor(name){
        this.name = name;
    }
    sound(){
        return `${this.name} makes a sound`;
    }
}

class Dog extends Animal{
    sound(){
        return `${this.name} barks!`;
    }
}

class Cat extends Animal{
    sound(){
        return `${this.name} meows`;
    }
}

const d = new Dog("Dog");
const c = new Cat("Cat");

console.log(d.sound())
console.log(c.sound())