// IF statement
// this is conditional statement

// if (condition) {
//     //run
// } else {
//     //run different code
// }

// 01
let viewer = 'java full course'
let reply;

if (viewer) {
    // reply = "Hello, how can I help you today?"
    reply = `Enjoy ${viewer }`
} else {
    reply = "I can't this week"
}

console.log(reply)

// 02
let customerIsBanned1 = false 
let viewer1 = 'java full course'
let reply1;
let finance = true

if (customerIsBanned1) {
    reply1 = 'Sorry'
}
else if (viewer1 && finance) {
    // reply = "Hello, how can I help you today?"
    reply1 = `Enjoy ${viewer } and finance course` 
}
else if (viewer1) {
    // reply = "Hello, how can I help you today?"
    reply1 = `Enjoy ${viewer }`
} else {
    reply1 = "I can't this week"
}

console.log(reply1)  


// 03
let testSocre = 70
let grade;
if (testSocre >= 75) {
    grade = 'A'
} else if (testSocre >= 65) {
    grade = 'B'
} else if (testSocre >= 55) {
    grade = 'C'
} else if (testSocre >= 45) {
    grade = 'D'
} else {
    grade = 'S'
}

console.log(grade)

// 03
let Socre = 40
let result;
let collegeStudent = true
if (Socre >= 75) {
    result = 'A'
} else if (Socre >= 65) {
    result = 'B'
} else if (Socre >= 55) {
    result = 'C'
} else if (Socre >= 45) {
    result = 'D'
} else {
    if (collegeStudent) {
        result = 'ReApply'
    }else {
        result = 'F'
    }
}

console.log(result) // ReApply