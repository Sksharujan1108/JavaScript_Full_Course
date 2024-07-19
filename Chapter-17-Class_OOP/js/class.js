class Pizza {
    // initialize
    constructor(typePizza, typeSize, typeCrust) {
      this.type = typePizza
      this.size = typeSize
      this.crust = typeCrust
    }
    bake() {
      return (
        console.log(`Baking a ${this.type} ${this.size} ${this.crust} curst Pizza...`)
      )
    }
  }
  
  const anotherPizza = new Pizza('margarita', 'medium', 'original');
  anotherPizza.bake() // Baking a margarita medium original curst Pizza...

  const NewPizza = new Pizza('Pepperomi', 'small', 'original');
  NewPizza.bake()  // Baking a Pepperomi small original curst Pizza...


  console.log('====================================');
  console.log('******************************************');
  console.log('====================================');


// Good Develop that class
class Briyani {
  // initialize
  constructor(typeBriyani) {
    this.type = typeBriyani
    this.size = 'normal'
    this.price = 350
  }
  // method
   setBriyani(typeSize, typePrice){
    this.size = typeSize
    this.price = typePrice
  }
  // method
  getBriyani(){
    return {
      size: this.size,
      price: this.price
    }
  }
  bake() {
    return (
      console.log(`Prepair a ${this.type} ${this.size}  ${this.price} curst Briyani...`)
    )
  }
}

const NewBriyani = new Briyani('chicken')

NewBriyani.setBriyani('Full', 500) 

console.log(NewBriyani.price) // 500

NewBriyani.bake(); // Prepair a chicken Full  500 curst Briyani...

console.log(NewBriyani.getBriyani()) // {size: 'Full', price: 500}
