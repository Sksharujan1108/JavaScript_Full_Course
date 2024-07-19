// CallBack Function

function myCallback() {
    console.log("If You Bad I am Your Dad")
}

function higherOrderFunction(myCallback) {
    myCallback();
}
higherOrderFunction(myCallback)

// SetTimeOut(Function, 1000)

setTimeout(() => {
    console.log('Hello World')
},3000)

// every one sec afeter again again call setInterval use
// silder and show some Photo 
setInterval(() => {
    console.log('Hi Every two Sec');
},2000)  // After 2sec again again show  //Hi Every two Sec 

// For each
const number = [1,2,3] 
number.forEach(function(num)  {
    console.log(`${num}`)
})