//#default paramters
function welcome(name ="Guest"){ //declaring default paramters
    console.log(`Welcome ${name}`)
    ;
}

welcome("Tada");
welcome();

//Spread Operators
const nums = [1,2,3,4,5,6];
const newNums = [...nums,7,8,9];
console.log(newNums);

const obj ={name: "aryan"};
const updatedObj = {...obj,age:"24"};
console.log(updatedObj);

//Rest Operator/Parameters
const cal = {
    sum: (...nums) => nums.reduce((a,b) => a+b,0)
}
console.log(cal.sum(1,2,3,4));

//Array Destructuring 
// const arr = ["Aryan","Tada","Ray","Doc"];
// const first = arr[0];
// const second = arr[1];
// console.log(first);
// console.log(second);

const [first,second,thrid,fourth,fifth] = ["Tada","Ray","Aryan","Doc"];
console.log(first,second,thrid,fourth,fifth)

const [one, two] = [1,2,3,4,5];
console.log(one,two)

//key based extraction/Object Destructuring
const person = {
    name: "Aryan",
    age: 23
};

const { name, age } = person;
console.log(name, age);