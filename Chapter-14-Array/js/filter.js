// fliter() Method JS

let number = [1,2,3,4,5,6,7,8,9,10,11,12]

let evenNumber = number.filter (number => 
    number % 2 === 0
)
console.log(evenNumber)

console.log('***************************************');

// 02
// Dummy data - an array of objects representing people
const people = [
    { name: "Alice", age: 28 },
    { name: "Bob", age: 35 },
    { name: "Charlie", age: 22 },
    { name: "David", age: 29 },
    { name: "Eve", age: 41 },
  ];
  
  // Use the filter method to create a new array of people under the age of 30
  const youngPeople = people.filter( 
      person => person.age < 30
  );
  
  console.log(youngPeople);
  // 0: {name: 'Alice', age: 28}
  // 1: { name: "Charlie", age: 22 }
  // 2:  {name: 'David', age: 29}