let myJSON = '{"name":"tim Tuvestam","age": 28}';
let myOBJ = JSON.parse(myJSON);

students = {student: [
    {'elevID':1,Firstname:"Tim", Lastname:"Tuvestam", age:28},
    {'elevID':2,Firstname:"david", Lastname:"Wernow",age:"old"}
]}
let text = document.getElementById("text");

//text.innerHTML=myOBJ.name +" "+ myOBJ.age;

document.getElementById("fname").innerHTML=students.student[0].Firstname;
document.getElementById("lname").innerHTML=students.student[0].Lastname;
document.getElementById("age").innerHTML=students.student[0].age;

document.getElementById("fname1").innerHTML=students.student[1].Firstname;
document.getElementById("lname1").innerHTML=students.student[1].Lastname;
document.getElementById("age1").innerHTML=students.student[1].age;