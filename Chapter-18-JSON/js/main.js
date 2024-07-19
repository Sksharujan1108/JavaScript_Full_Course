// JSON JavaScript Objest Notation 
// Text Formet 
// To send and receive date in many Programming Language

const Obj = {
  name: 'Sk',
  content: ["play", "study", "Earn"],
  sub: function() {
    console.log("Thanks For Click Ball Icon")
  }
}

console.log(Obj) // {name: 'Sk', content: Array(3), sub: ƒ}
console.log(Obj.sub()) // Thanks For Click Ball Icon

Obj.sub() // Thanks For Click Ball Icon

const sendJSON = JSON.stringify(Obj)
console.log(sendJSON) // {"name":"Sk","content":["play","study","Earn"]}

console.log(sendJSON.name) // undefined

console.log(typeof Obj) // object

console.log(typeof sendJSON)  // string


// receive JSON In Sever Side Use Parse "Object File Change"
const receiveJson = JSON.parse(sendJSON)

console.log(receiveJson) // {name: 'Sk', content: Array(3)}  

console.log(typeof receiveJson) // object

console.log(receiveJson.name)  // Sk