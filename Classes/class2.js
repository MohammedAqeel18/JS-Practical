// This is a class with private properties and methods

class Pizza {
    crust = "orginal";
    #sauce ="tomato";
    constructor (sizePizza){
        this.size = sizePizza;
    }
    getCrust(){
        return this.crust;
    }
    setCrust(crustPizza){
        this.crust=crustPizza;
    }
    bake(){
        return console.log(`Baking  a ${this.size} ${this.crust} ${this.#sauce} pizza`)
    }
}

const myPizza = new Pizza("small");
myPizza.bake();
console.log(myPizza.sauce)