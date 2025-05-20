"use strict";

const makeError = ()=>{
    try {
        const variable = "Aqeel";
        variable = "Ali";
    }catch (error){
        console.error(error.stack);
    }
}

makeError();