//classes
class Bank{
    constructor(bankBalance){
        this.bankBalance = bankBalance;
    }

    get bankBalanceG(){
        return this.bankBalance;
    }

    set bankBalanceS(value){
        if(value >= 0 && authentication){
            this.bankBalance = value;
        }
    }
}

let bb1 = new Bank();
// this.bankBalance = 10000;
bb1.bankBalanceS(100000);
console.log(bb1.bankBalanceG());





// class Student{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     getName(){
//         console.log(this.name);   
//     }
// }

// let s1 = new Student("Akhil", 23);












// console.log("helloo!");
//new keyword
// function createStudent(name,age){
//     let student = {};
//     student.name = name;
//     student.age = age;
//     return student;
// }

// function createStudent(name, age) {
//     this.name = name;
//     this.age = age;
//     // this.collegeName = "Amity University"
//     createStudent.prototype.getName = function(){
//         console.log(this.name);
//     }
//     createStudent.prototype.collegeName = "Amity University";
//     // this.getName = function(){
//     //     console.log(this.name);
//     // }
//     // this.getAge = function(){
//     //     console.log(this.age);
//     // }
// }
// let student1 = new createStudent("Akhil", 23);
// let student2 = new createStudent("Aakash", 26);
// // console.log(student1.getName());
// console.log(student2, student1);

