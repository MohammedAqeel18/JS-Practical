const vehicle = {
    doors:2,
    engine :function (){
        return" Vrooom Vrooom!";
    }
};

console.log(vehicle.engine());

const car = Object.create(vehicle);

car.color = "Black";
car.engine = function (){
    return "whoooshhh!";
}
console.log(car.engine());
const premio = Object.create(car);

premio.color= "white";
premio.engine= function(){
    return "shhhhhhhhhhh!";
}
console.log(premio.engine());

