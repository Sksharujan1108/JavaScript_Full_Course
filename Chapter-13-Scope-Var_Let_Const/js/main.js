// scope var, let, cost

// Global scope 

// parent
var x = 1;
let y = 2;
const z = 3;

console.log(`global: ${x}`);  // global: 1
console.log(`global: ${y}`);  // global: 2
console.log(`global: ${z}`);  // global: 3


// Local scope  // block scope

// Local scope  // function scope
function func() {
  const z = 5;
    console.log(`function: ${x}`);  // function: 1
    console.log(`function: ${y}`);  // function: 2
    console.log(`function: ${z}`);  // function: 5

  {
    let y = 4
      console.log(`block: ${x}`);  // block: 1
      console.log(`block: ${y}`);  // block: 4
      console.log(`block: ${z}`);  // block: 5
  }
}

console.log(x); // 1

console.log(y); // 2

func()
console.log(z); // 3