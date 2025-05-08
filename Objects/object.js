//object have a key and value pair
//object is a collection of properties

const myObj = {name : "Aqeel"};

const myObj2 = {
    student:true,
    degree: "IIT",
    regno:20057,

    results: {
        OOP : 90,
        DBMS :80
    },

    Rank:["OOP: MERIT PASS", "DBMS: SUPER PASS"],

    action :function(){
        return `The ${this.degree} student got ${this.results.OOP}and the  rank is in ${this.Rank[0]}`
    }
}   


console.log(myObj2.action());
console.log(myObj.name);