// parent class
class Pizza {
  // initialize
  constructor(sizePizza) {
    this.size = sizePizza;
    this.crust = "original";
  }
  // method
  setPizza(curstPizza) {
    this.crust = curstPizza;
  }
  // method
  getPizza() {
    return {
      crust: this.crust,
    };
  }
}

// child class  {"Extend key word Use"}
class specialPizza extends Pizza {
    constructor(sizePizza) {
        // super Key word Use " Parent class take sizePizza "
        super(sizePizza);
        this.type = 'Margarita'
    }
    slice() {
        console.log(`Our ${this.type} ${this.size} ${this.crust} Pizza has 8 slice`);
    }
}

// Object Create
const MyspecialPizza = new specialPizza('small')

MyspecialPizza.slice() // Our Margarita small original Pizza has 8 slice
