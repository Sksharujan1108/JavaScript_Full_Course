// Functions 

console.log('Sharujan'.toUpperCase()) // SHARUJAN

console.log('====================================');
console.log('*************************************************');
console.log('====================================');

// 01
function sum (n1,n2) {
  return n1+n2;
}
console.log(sum(10, 2)); // 12

console.log('====================================');
console.log('*************************************************');
console.log('====================================');

// 02
function num (n1,n2) {
  console.log(n1+n2); 
}
num(10, 20); // 30 
num(5, 20);  // 25
num(10, 0);  // 10
num(1, 20);  // 21

console.log('====================================');
console.log('*************************************************');
console.log('====================================');

// 03 
let email = "SharujanVirat1219@gmail.com"
console.log(email.slice(0, email.indexOf('@')))

console.log('====================================');
console.log('*************************************************');
console.log('====================================');

// 04 
function getUserNameFormEmail (Gmail) {
  let print = Gmail.slice(0, Gmail.indexOf('@'))

  console.log(print)
}
getUserNameFormEmail('SharujanVirat@gmail.com');
getUserNameFormEmail('loop@gmail.com');
getUserNameFormEmail('lock@gmail.com');

console.log('====================================');
console.log('*************************************************');
console.log('====================================');


// 05
const toPrperCase = (name) => {
  let result = name.charAt(0)  // Take Frist letter in the Name
  const resultUpper = result.toUpperCase() // Take a Frist letter capital
  const final = resultUpper + name.slice(1).toLowerCase() // Another letter small

  console.log(final)  // Chunnakam  // Mango  // Local
}
toPrperCase("chunnakam"); 
toPrperCase("mango");
toPrperCase("local")

console.log('====================================');
console.log('*************************************************');
console.log('====================================');