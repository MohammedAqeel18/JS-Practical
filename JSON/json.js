// JSON - javascript object notation
// JSON is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate.
// JSON is language independent, but uses conventions that are familiar to programmers of the C family of languages, which includes C, C++, C#, Java, JavaScript, Perl, Python, and many others.

const myObj = {
    name: "John",
    age: 30,
    city: "New York",
    content :["Hello", "World", "How", "are", "you"],

    sub :function(){
        console.log("Hello World");
        myObj.sub();
    }
}

const sendJSON= JSON.stringify(myObj);
console.log(sendJSON); 

const recieveJSON= JSON.parse(sendJSON);
console.log(recieveJSON);