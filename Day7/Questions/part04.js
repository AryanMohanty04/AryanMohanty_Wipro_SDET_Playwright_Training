//Arrays

// Q1. Find the largest and smallest number in an array.

console.log("Question 1 Answer:");

let numbersArray = [12, 45, 7, 89, 23, 5];

let largestNumber = numbersArray[0];
let smallestNumber = numbersArray[0];

for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] > largestNumber) {
        largestNumber = numbersArray[i];
    }

    if (numbersArray[i] < smallestNumber) {
        smallestNumber = numbersArray[i];
    }
}

console.log("Largest Number:", largestNumber);
console.log("Smallest Number:", smallestNumber);



// Q2. Remove duplicate elements from an array.

console.log("\nQuestion 2 Answer:");

let duplicateArray = [1, 2, 3, 2, 4, 5, 1, 6];
let uniqueArray = [];

for (let i = 0; i < duplicateArray.length; i++) {
    if (!uniqueArray.includes(duplicateArray[i])) {
        uniqueArray.push(duplicateArray[i]);
    }
}

console.log("Array Without Duplicates:", uniqueArray);



// Q3. Sort an array without using built-in sort().

console.log("\nQuestion 3 Answer:");

let unsortedArray = [45, 12, 89, 3, 67, 21];

for (let i = 0; i < unsortedArray.length; i++) {
    for (let j = 0; j < unsortedArray.length - 1; j++) {
        if (unsortedArray[j] > unsortedArray[j + 1]) {

            let temp = unsortedArray[j];
            unsortedArray[j] = unsortedArray[j + 1];
            unsortedArray[j + 1] = temp;
        }
    }
}

console.log("Sorted Array:", unsortedArray);



// Q4. Find second largest number in an array.

console.log("\nQuestion 4 Answer:");

let secondLargestArray = [12, 45, 7, 89, 23, 67];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < secondLargestArray.length; i++) {

    if (secondLargestArray[i] > largest) {
        secondLargest = largest;
        largest = secondLargestArray[i];
    } 
    
    else if (
        secondLargestArray[i] > secondLargest &&
        secondLargestArray[i] !== largest
    ) {
        secondLargest = secondLargestArray[i];
    }
}

console.log("Second Largest Number:", secondLargest);


// Q5. Merge two arrays and remove duplicates.

console.log("\nQuestion 5 Answer:");

let firstArray = [1, 2, 3, 4];
let secondArray = [3, 4, 5, 6];

let mergedArray = [...firstArray, ...secondArray];
let finalUniqueArray = [];

for (let i = 0; i < mergedArray.length; i++) {

    if (!finalUniqueArray.includes(mergedArray[i])) {
        finalUniqueArray.push(mergedArray[i]);
    }
}

console.log("Merged Unique Array:", finalUniqueArray);