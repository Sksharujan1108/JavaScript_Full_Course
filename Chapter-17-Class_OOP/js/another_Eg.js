// Class
class Pizza {
    // initialize
    crust = 'original'; // public Property
    #sause = 'tomatto'  // private property
    constructor(sizePizza) {
      this.size = sizePizza;
    }
    // method
    setPizza(sizePizza) {
      this.size = sizePizza;
    }
    // method
    getPizza() {
      return {
        size: this.size,
      };
    }
    bake () {
        return (
            console.log(`Backing a ${this.size} ${this.crust} ${this.#sause} Pizza`)
        )
    }
  }

  const myPizza = new Pizza ('Large')

  myPizza.bake() // Backing a Large original tomatto Pizza

  console.log(myPizza.crust) // original 

  console.log(myPizza.getPizza()) // {size: 'Large'}
                                  // size : "Large"

console.log(myPizza.sause) // undefined


// console.log(myPizza.#sause) // Uncaught SyntaxError: Private field '#sause' must be declared in an enclosing class (at another_Eg.js:37:20)