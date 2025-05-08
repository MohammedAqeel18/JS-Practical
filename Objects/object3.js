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

delete movie.music; // Deleting a property
console.log(movie.hasOwnProperty("music"));// Checking if a property exists
movie.actress= "Keerthi Suresh";// Adding a new property
console.log(Object.values(movie));

for (let job in movie){
    console.log(`${job},its ${movie[job]}`);
}   