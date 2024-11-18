// Map Objects
let myMap =  new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
console.log(myMap.get("key2"));

console.log(myMap);





//set objects
// let numbers = [1,1,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,3,45,45,4,4,4,5,6,6,6,6,5,43,2,1,1,2,3,5,67,8,8];
// let uniqueArr = new Set(numbers);
// console.log(uniqueArr);






//default parametre and string literals
// function greet(guest){
//     console.log(`hello ${guest}`); 
// }

// greet();
// greet("john");






// let sum = ()=>{
//     console.log(4+9);
// }
// sum()









// //destrucing:- array 
// let numbers = [1,2,3,4,5,6,7];
// let [first, second, third, fourth, fifth] = numbers
// console.log(fifth);


// //destrucing:- objects
// let obj = {
//     name: 'John',
//     age:23,
//     marks:35,
//     address:{
//         pincode:127111,
//         city:'hyd',
//         personalInfo:{
//             phNumbr:1234567890,
//             email:'john@gmail.com',
//             password:'123456',
//         }
//     }
// }

// let {phNumbr:phoneNumber, email:userEmail, password:userPassword} = obj.address.personalInfo;
// console.log(phoneNumber, userEmail, userPassword);

// console.log(obj.address.personalInfo.phNumbr);
// console.log(obj.address.personalInfo.email);
// console.log(obj.address.personalInfo.password);



// let person = {
//     name: 'John',
//     age: 25,
//     city: 'New York'
// }

// let {age, city} = person;
// // console.log(person.city);
// // console.log(person.age);

// console.log(age, city);






// rest and spread operator
// function sum(...akhil){   // rest operator
//     console.log(akhil);
//     return akhil.reduce((acc,num) => acc+num, 0);
// }

// console.log(sum(1,2,3,4,5,6,10,7,8,11,12,13,14,15,16));




// const number1 = [1, 2, 3, 4, 5];
// const number2 = [6, 7, 8, 9];
// let number3 = [...number1, ...number2];  // spread operator
// console.log(number3);

// let obj = {
//     name: 'John',
//     age: 25
// }

// let student = {
//     name1: 'JoAsdfhn',
//     age1: 305,
// }

// let mergedObj = {
//     ...obj,
//     ...student
// }

// console.log(mergedObj);




// console.log("Hiii");
// let a = 10;
// const b = 20;
// console.log(a,b);

