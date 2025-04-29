let Score = 22;
let grade;
let Student = true;

if (Score>=91 ){
    grade ="A+"
}
else if (Score>81){
    grade="A";
}

else if (Score>72){
    grade="B";
}

else if (Score>=62){
    grade="C";
}

else if(Score>=55){
    grade = "D+";
}

else if (Score>=45){
    grade= "D";
}

else if (Score<=40 && Student){
    grade = "Fail with a chance to retake the exam";
}

else {
    grade = 'Fail';
}


console.log(`Your grade is ${grade}`);