// condition ? exprIfTrue : exprIfFalse

// 01
const age = 26;
const average = age >= 21 ? "Beer" : "Juice";
console.log(average); // "Beer"

// 02
const greeting = (person) => {
  const name = person ? person.name : "stranger";
  return `Howdy, ${name}`;
};

console.log(greeting({ name: "Alice" })); // "Howdy, Alice"
console.log(greeting(null)); // "Howdy, stranger"

// 03
let subscriber = "SubScribed";
let response = subscriber ? "WelCome" : "Kindly_Subscribe";
console.log("response :", response);

// 04
let score = 50;
let result = score >= 80 ? "A" : score >= 70 ? "B" : score >= 60 ? "C" : "F";

console.log(result);

//04

let player = "scissors";
let computer = "rock";
let res =
  player === computer
    ? "Tie"
    : player === "rock" && computer === "paper"
    ? "Computer Win!!"
    : player === "paper" && computer === "scissors"
    ? "Computer Win!!"
    : player === "scissors" && computer === "rock"
    ? "Computer Win!!"
    : "Player Win!!";
console.log(res); // Computer win
