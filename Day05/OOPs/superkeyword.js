class Vehicle{
    constructor(brand){
        this.brand = brand;
    }

    start(){
        return `${this.brand} engine starts`;
    }
}

class Car extends Vehicle{
    constructor(brand,model){
        super(brand)
        this.model = model;
    }

    start(){
        const main = super.start();
        return `${main}\nModel: ${this.model} is ready to drive`;
    }
}
const car1 = new Car("Toyota","Fortuner");
console.log(car1.start());