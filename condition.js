let phone = false;
let phonebrand="I phone 14 pro max";
let price = 100000.00;

let laptop =false;
let lapbrand= "Macbook pro 16 inch";
let lapprice= 1300000.00;


let reply;

if (phone){
    reply= `Here is the brand new ${phonebrand} and the price is ${price}`;
}

else if(laptop){
    reply = `Here is the brand new ${lapbrand} and the price is ${lapprice}`;
}

else 
{
    reply = `Sorry, the product is not available`;

}

console.log(reply);