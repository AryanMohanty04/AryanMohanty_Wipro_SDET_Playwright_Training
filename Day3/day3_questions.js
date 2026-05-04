//Q1>
console.log('Question 1 Answer:- ');
const names = ['Alice','Bob','Charlie'];
names.forEach(name => {
    console.log(`Hello, ${name}`);
})

//Q2>
console.log('\nQuestion 2 Answer:- ');
const celsius = [0,10,20,30];
const fahrenheit = celsius.map(
    temp => temp* 1.8 +32
);
console.log(fahrenheit);

//Q3>
console.log(`\nQuestion 3 Answer:- `);
const users = [
    {names : 'Li', age: 16},
    {names: 'Dan', age: 22},
    {names: 'Sarah',age: 17}
];
const adults = users.filter(user => user.age >= 18);
console.log(adults);

//Q4>
console.log(`\nQuestion 4 Answer:- `);
function string(arr){
    return arr.filter(str => str.length > 5);
}
console.log(string(['hello','aryan','aaryanSir','tada','helloAryan']));

//Q5>
console.log(`\nQuestion 5 Answer:- `);
const prices = [19.99,5.30,3.99,25.00];
const total = prices.reduce((sum, price) => sum + price, 0);
console.log(total);

//Q6>
console.log(`\nQuestion 6 Answer:- `);
const fruits = ['apple','banana','orange','apple','banana','watermelon'];
const count = fruits.reduce((acc,fruit)=> acc + (fruit == 'apple'),0);
console.log(`Occurrence of apple is: ${count}`);

//Q7>
console.log(`\nQuestion 7 Answer:- `);
const numbers = [1,2,3,4,5,6];
const result = numbers
    .filter(num => num%2 === 0)
    .map(num => num* num);

console.log(result);

//Q8>
console.log(`\nQuestion 8 Answer:- `)
const products = [
    {id: 1, title: 'Laptop'},
    {id: 2, title: 'Mouse'}
];
const titles = products.map(p => p.title);
console.log(titles);

//Q9>
console.log(`\nQuestion 9 Answer:- `)
const scores = [80,90,70,100];
const avg = scores.reduce((sum,score)=> sum + score, 0)/ scores.length;
console.log(avg);

//Q10>
console.log(`\nQuestion 10 Answer:- `);
const nested = [[1,2],[3,4],[5,6]];
const flat_array= nested.reduce((actual, curr) => actual.concat(curr),[]);
console.log(flat_array);