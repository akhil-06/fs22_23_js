class Person{
    #age; // private field
    constructor(name, age){
        this.name = name;
        this.#age = age; // private field
    }

    getAge(){
        return this.#age; // private field
    }
}
let p1 = new Person("John", 25);
console.log(p1.getAge());
console.log(p1["#age"]);



















// class Vechile{
//     move(){
//         throw new Error("Abstract method to simulate the abstraction ")
//     }
// }

// class Car extends Vechile{
//     move(){
//         console.log("Car is moving");
//     }
// }










// class Parent{

//     constructor(age, name){
//         this.age = age;
//         this.name = name;
//     }
//     greet(){
//         console.log("Hello from parent class");
//     }
// }

// class Child extends Parent{
//     constructor(childName){
//         super(25, "John");
//         this.childName = childName;
//     }
//     greet(){
//         // console.log("Hello from child class"); 
//         super.greet();
//     }
// }

// let p1 = new Parent();
// p1.greet(); //Hello from parent class
// let c1 = new Child();
// c1.greet(); //Hello from child class


// class Calculator{
//     sum(a,b,c){
//         if(c!= undefined) return a+b+c;
//         return a+b;
//     }
// }

// let calc = new Calculator();
// console.log(calc.sum(2,4));
// console.log(calc.sum(2,4,5));










// class GrandParent{
//     greet(){
//         console.log("Heelow wolrdsd");
//     }
// }

// class Parent extends GrandParent{}
// class Child extends Parent{}
// let c1 = new Child();
// c1.greet(); // Heelow wolrdsd



// class GrandParent{
//     greet(){
//         console.log("Heelow wolrdsd");
//     }
// }

// class Child1 extends GrandParent{
//     smile(){
//         console.log("I am smiling");
//     }
// }
// class Child2 extends GrandParent{}
// let c1 = new Child1();
// let c2 = new Child1();
// c1.greet(); // Heelow wolrdsd
// c1.smile();
// c2.greet(); // Heelow wolrdsd











// class Student{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }

// let s1 = new Student("Akhil", 40);



























//classes
// class Bank {
//     constructor(bankBalance) {
//         this._bankBalance = bankBalance;
//         this.authentication = true;
//     }

//     get bankBalance() {
//         return this._bankBalance;
//     }

//     set bankBalance(value) {
//         if (value >= 0 && authentication) {
//             this._bankBalance = value;
//         } else {
//             console.log("Balance cannot be negative.");
//         }
//     }
// }

// let bb1 = new Bank();
// bb1.bankBalance = 20000; // Sets the bank balance to 10000
// console.log(bb1.bankBalance); // Outputs 10000






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

