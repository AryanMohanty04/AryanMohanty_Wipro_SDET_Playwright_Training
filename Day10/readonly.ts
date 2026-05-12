// AS CONST
const userMain = {
    id: 21,
    name: "Aryan",
    age: 23
} as const;

// user.name = "Arush"; // ERROR

console.log(userMain);



// INTERFACE WITH READONLY PROPERTY
interface Task {
    readonly title: string;
    completed: boolean;
}



// READONLY<T>
const myTask: Readonly<Task> = {
    title: "Do Homework",
    completed: true
};

// myTask.completed = false; // ERROR
// myTask.title = "New Task"; // ERROR



// NORMAL OBJECT
const myTask1: Task = {
    title: "Do Homework",
    completed: true
};

// myTask1.title = "Updated"; // ERROR
myTask1.completed = false; // ALLOWED



console.log(myTask);
console.log(myTask1);



// READONLY ARRAY
const scores: ReadonlyArray<number> = [10, 20, 30];

console.log(scores[0]);

// scores.push(40); // ERROR
// scores[0] = 100; // ERROR