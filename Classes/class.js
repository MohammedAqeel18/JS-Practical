class Pizza {
    constructor (typePizza, sizePizza, pricePizza)
{
this.type= typePizza;
this.size= sizePizza;
this.price= pricePizza;
this.toppings= [];
}

getToppings(){
    return this.toppings;
}

setToppings(toppingsPizza){
    this.toppings.push(toppingsPizza);
}

bake(){
    return console.log(`Baking a ${this.size} ${this.type} crust Pizza and the price is ${this.price} with ${this.toppings}`);
}
}
const pizzaorder1= new Pizza ("Beef","Large", 2500.00)
pizzaorder1.setToppings("Sausage");
pizzaorder1.setToppings("Egg");
console.log(pizzaorder1.getToppings());
pizzaorder1.bake();