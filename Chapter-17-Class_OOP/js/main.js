// Class (object bluePrint) ES6 - 2015 
// 01
const myPizza = {
  size: 'medium',
  crust: 'Original',
  bake: function() {
    return (
      console.log( `Baking a ${this.size} ${this.crust} curst Pizza...`)
    )
  }
}

myPizza.bake() // Baking a medium Original curst Pizza...

console.log('====================================');
console.log('***************************************');
console.log('====================================');

// 02 
class Pizza {
  // initialize
  constructor() {
    this.size = 'small'
    this.crust = 'original'
  }
  bake() {
    return (
      console.log(`Baking a ${this.size} ${this.crust} curst Pizza...`)
    )
  }
}

const anotherPizza = new Pizza();
anotherPizza.bake() // Baking a small original curst Pizza...

console.log(anotherPizza.size) // small
console.log(anotherPizza.crust)  // original 