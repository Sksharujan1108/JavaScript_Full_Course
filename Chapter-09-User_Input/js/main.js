//            // 01 ....  Return Boolean type (confirm)
// let myBoolean = confirm('Hi SkSharu')
// //user ok button press = true
// // user cancle button press = false
// console.log(myBoolean)


// 02 
// prompt use user Input Any Value
let name = prompt("Enter Your Name :")
              // ?? null coalescing
    if(name) {
      console.log(name ?? "You Didn't Your Name")
    } else {
      console.log("Please Enter Your Name")
    }
 //Un Wantted space remove
console.log(name.trim().length)
 