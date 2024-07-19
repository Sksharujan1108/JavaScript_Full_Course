// IF statement
// this is conditional statement

// switch (expression or value) {
//     case value1: 
//         // run code
//         break;
//     case value2:
//         // run different code
//         break;

//     default:
//         // run different code 
// }

// 01
let age = 15;
let result;
switch (age) {
    case 10:
        result = 'Smaller'
        break;
    case 20:
        result = 'Middum'
        break;
    case 30:
        result = 'Fit'
        break;

    default:
        result = 'Un_Fit'
}

console.log(result) // Un_Fit

// 02
let player = 'rock'
let computer = 'rock'
let result1;

switch (player) {
    case computer:
        result1 = 'Tie!!!'
        break;
    default:
        result1 = 'No_Tie!!'
}

console.log(result1) // Tie!!

// 03
let player1 = 'rock'
let computer1 = 'scissors'
let result11;

switch (player1) {
    case computer1:
        result11 = 'Tie!!!'
        break;
    case 'rock':
        if (computer1 === 'scissors') {
            result11 = "You Win!"
        } else {
            result11 = "Computer Win"
        }
        break;
    default:
        result11 = 'No_Tie!!'
}

console.log(result11) // You Win!  