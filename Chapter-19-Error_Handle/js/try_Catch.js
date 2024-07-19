// try_catch

// 01
const makeError = () => {
    try {
       const name = 'sarujan'
       name = 'sk'
    } catch(err) {
        // console.log(err);
        console.error(err.stack);
        // logTheError(err.stack)
    }
}

makeError() // TypeError: Assignment to constant variable.

console.log("********************************");

// 02
const ErrorHandle = () => {
    try {
       throw new Error("This is CustomeError")
    } catch(err) {
        // console.log(err);
        console.error(err.stack);
        // logTheError(err.stack)
    } finally {
        console.log('..........finally block')
    }
}

ErrorHandle()

// function customeError(message) {
//     this.message = message
//     this.name = "customeError"
//     this.stack = `${this.name}: ${this.message}`
// }