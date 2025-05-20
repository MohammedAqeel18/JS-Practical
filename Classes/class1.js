class Pizza {
    constructor (sizePizza){
        this.size = sizePizza;
        this.crust= "orginal"
    }
    getCrust(){
        return this.crust;
    }
    setCrust(crustPizza){
        this.crust=crustPizza;
    }
}

class specialPizza extends Pizza {
    constructor(sizePizza){
        super(sizePizza);
        this.type = "Beef"
    }


slice (){
    console.log(`our ${this.type} ${this.size} ${this.crust} pizza has 10 slices`)
}
}
const myspeacialPizza= new specialPizza("Large");
myspeacialPizza.slice();