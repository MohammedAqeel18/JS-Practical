const movie= {

    actor :"Vijay",
    music : "ARR",
    MOVIE: "Thuppaki",
    director : "AR Murugadoss",
    producer : "Kalaipuli S Thanu",
    year : 2012,
    language : "Tamil",
    genre : "Action",
}
// Destructuring the object
const {actor , music , MOVIE ,director , producer, language ,genre}=movie;
console.log(actor);