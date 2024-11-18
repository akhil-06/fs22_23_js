// function createStudent(name,rollNo,marks){
//     // console.log(this);
//     let student =  {};
//     student.name = name;
//     student.rollNo = rollNo;
//     student.marks = marks;
//     return student;   
// }

function CreateStudent(name,rollNo,marks){
    this.name = name;
    this.rollNo = rollNo;
    this.marks = marks;
}

let student1 = new CreateStudent("Akhil", 20, 80);
let student2 = new CreateStudent("Nikhil", 40, 100);
console.log(student1, student2);

// let obj = {
//     "my name":"Akhil Sharma"
// }
// console.log(obj["my name"]);


body.style.backgroundColor = "red";



// let studnet1 = {
//     name: "John",
//     age: 20,
//     grade: 85,
//     marks:80
// }

// let studen2 = {

// }

// let studen3 = {
    
// }

// let studen4 = {
    
// }
// let studen5 = {
    
// }















// let studen1 = {
//     name:"Akhil",
//     age:22,
//     gender:"Male",
//     // printDetails: function(){console.log(this.name);}
// }
// //100 students object
// let studen2 = {
//     name:"Saraj",
//     age:20,
//     gender:"Male",
//     // printDetails: function(){console.log(this.name);}
// }

// function printDetails(city, state){
//     console.log(this.name + city + state);
//     // console.log(this.name);
// }


// printDetails.call(studen2, "bhiwani", "haryana");
// printDetails.apply(studen2, [ "ooty", "TN"])



// "use strict";
// a = 90;

// function abc(){
//     console.log(this);
// }
// abc();
// window.abc()
// console.log(this);








// console.log("oops!!!!");
// let obj = {
//     name: "John",
//     age: 30,
//     city: "New York",
//     a: function(){
//         console.log("this");
//     },
//     b:{
//         a1:true,
//         b1: function(){
//             console.log(this);
//         }
//     }
// }

// obj.abc()
// obj.b.b1(); // prints the object itself

// function callThis(){
//     console.log(this);
// }
// callThis();

// var a = 20;
// console.log(this);

