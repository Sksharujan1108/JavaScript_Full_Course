// ForEach use 
// value
const number = [1,2,3,4,5]
number.forEach((value) => {
    console.log(`${value}`)
}) // 1 2 3 4 5 

// index use
number.forEach((value, index) => {
    console.log(`Index: ${index} value: ${value}`)
}) // 1 2 3 4 5 

console.log('*****************************************************');

// Exploring the forEach method in javascript 

// 1. Example of using the forEach method toprint each element of an array :

const fruit = ['apple', 'orange', 'cherry']

console.log(fruit)// ['apple', 'orange', 'cherry']
fruit.forEach(function (element) {
    console.log(element); // apple orange cherry
});

console.log('*****************************************************');

// Example using forEach method sum all element an array :

const num = [1, 2, 3, 4]
let totalSum = 0;
num.forEach(sumElement => {
    totalSum += sumElement;
});
console.log(`Total: ${totalSum}`); // Total: 10