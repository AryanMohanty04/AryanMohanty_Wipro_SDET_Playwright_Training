let message: string = "Hello Aryan";
let result: number | string; //Union Type
result = 45;
result = "Success";
console.log(message, result);

function add(a:number,b:number):number{
    return a + b;
}
// console.log(add(4,5));

interface User {
    name: string;
    age: number;
    hobby?: string;
}

// declaration merging
interface User {
    city?: string;
}

const person1: User = {
    name: "Ray",
    age: 22,
    hobby: "Sleeping",
    city: "Siliguri"
};

const person2: User = {
    name: "Tada",
    age: 24
};

console.log(person1);
console.log(person2);

//Enums: are used as named constraints, instead of using random strings we use enums
enum Direction{
    Up,
    Down,
    Left,
    Right
}

console.log(Direction.Up);
console.log(Direction.Right);

enum Role {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}

console.log(Role.Admin);


//Tuples: It is a fixed size array where each position has a specific type
let user: [string, number];
user = ["Ray",23];
console.log(user);

let arr: number[] = [1,2,3,4];
console.log(arr);

//Generic: 
function identity<T> (value: T): T{
    return value;
}

console.log(identity<string>("Tada"));
console.log(identity<number>(23));
console.log(identity<boolean>(true));


class Storage<T> {
    private items: T[] = [];

    addItem(item: T): void {
        this.items.push(item);
    }

    getItem(index: number): T {
        return this.items[index]!;
    }
}

const names = new Storage<string>();

names.addItem("Ray");
names.addItem("Tada");

names.addItem("Rohan");

console.log(names.getItem(0), names.getItem(1), names.getItem(2), names.getItem(3));


//Generics_with_constraints_with_extends_keyword
//generics helps us for reusability 
interface HasLength{
    length: number;
}

function logLength<T extends HasLength>(args: T): void{
    console.log(args.length);
}
//extends means: T must contain a length property

logLength("Aryan Mohanty");
logLength([1,2,3,4,5,6]);
// logLength(1); // would give us an error, as number doesn't have any length