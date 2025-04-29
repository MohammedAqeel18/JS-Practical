let phone = false;
let price = 10000.00;
let model= "i phone 16 ";

let laptop = false;
let lapPrice= 30000.00;
let lapModel = "Hp";

let Radio = true;
let RadioStock ="Sorry Radio stocks are not available"; 
let reply;
if(phone){
reply=` you desired ${model} phone is  available and the price is ${price}`;

}else if(laptop){
    reply = `you desired ${lapModel} is available and the price is ${lapPrice} `;
}

else {
reply = RadioStock;
}

console.log(reply);