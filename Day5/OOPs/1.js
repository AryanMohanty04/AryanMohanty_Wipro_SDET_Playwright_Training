class Animal{
    constructor(name){
        this.name = name;
    }
    sound(){
        return `${this.name} makes a sound`;
    }
}

let dog = new Animal("Dog");

console.log(dog.sound());

