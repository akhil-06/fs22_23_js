console.log("i m done");
import {value} from "./script2.js";
console.log(value);








// class Person {
//     #nameProtected; // Private field

//     constructor(name) {
//         this.#nameProtected = name; // Set the private field
//     }

//     // Getter for name
//     get name() {
//         return this.#nameProtected;
//     }

//     // Setter for name
//     set name(newName) {
//         if (newName && typeof newName === "string") {
//             this.#nameProtected = newName;
//         } else {
//             console.error("Invalid name!");
//         }
//     }
// }

// const person = new Person("John");
// console.log(person.name); // Accessing via getter: "John"

// person.name = "Doe"; // Setting via setter
// console.log(person.name); // Accessing via getter: "Doe"

// person.name = 123; // Invalid input
// Output: Invalid name!
















// class Parent{
//     // greet(){
//     //     console.log("Hello from Parent Class");
//     // }
//     add(a,b,c){
//         if(c!==undefined) return a+b+c;
//         else return a+b;
//     }
// }


// class Child extends Parent{
//     greet(){
//         console.log("Hello from Child Class");
//     }
// }

// let c1 = new Child();
// c1.greet(); 















// class Parent{
//     constructor(name, lastName, marks){
//         console.log(this);
//         this.name = name;
//         this.lastName = lastName;
//         this.marks = marks;
//     }
//     greet(){
//         console.log("Hello");
//         console.log(4+8); 
//     }
//     multiply(){
//         console.log(10*80); 
//     }
// }

// class Child1 extends Parent{
//     constructor(name, lastName, age){
//         super(name);
//         this.age = age;
//     }
//     greet(){
//         super.multiply()
    // }
// }
// class Child2 extends Parent{};
// let c1 = new Child1("Akhil", "Sharma", 20);
// let c1 = new Child1();
// let c2 = new Child2();
// c1.greet(); // Output: Hello
// c2.greet(); // Output: Hello


//Static 
// class Ecommerce{
//     // access modifier:- private 
//      #products = 100000;

//     static calculateProfit(){
//         return this.products*100;
//     }
// }
// let e1 = new Ecommerce();
// // console.log(e1.calculateProfit());

// // Ecommerce.products = 100;
// console.log(Ecommerce.products);
// console.log(Ecommerce.calculateProfit());
