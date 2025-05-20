"use strict";

const makeError = ()=>{

    let i = 0;
    while(i<=10)
    try {
        throw newError("This is a custom error");
    }catch (err){
        console.error(err.stack);
    }finally{
        console.log("This is the finally block");
        i++;
    }
}

makeError();



