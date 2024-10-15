//IIFE 

var b = 20;
function p(){
    b = 10;
    console.log(b);
}
p();
console.log(b);

// var a = 10;
// ((a)=>{
//     a = 9;
//     console.log(a);
// })(a);

// console.log(a);





// var b = 10;
// function func(){
//     let b=8;
//     console.log(b);
// }
// func()
// console.log(b);

// (function(){
//     console.log(90-30);
// })();




//arrow functions
// function sum(){
//     // console.log(50+90);
//     return 90+90;
// }
// sum();

//arrow functions
// let sum1 = (a,b)=>{
//     return a-b;
// }//{}
// let ans =sum1(90,20);
// console.log(ans);






//HOF:- Higher order function:- regular func. but it takes one or more functions as argumnets or return a function as a vlaue from it.
// function calculate(ope, initialValue, numbers){
//     let total = initialValue;
//     for(let number of numbers){
//         total = ope(total, number)
//     }
//     return total;
// }

// function sum(n1,n2){
//     return n1 + n2;
// }

// function multiply(n1,n2){
//     return n1 * n2;
// }

// calculate(sum, 0, [1,2,3,4,5,6])
// calculate(multiply, 1, [1,2,3,4,5,6])






// function returnFunc(){
//     return function(){
//         console.log("hi");
//     }
// }

// let fn = returnFunc();
// fn()


// function getCapture(){
// }

// getCapture(function(){
//     console.log('canon');
// })






//Anonynous functions:- which don't have any name
// let b = function(){
//     console.log(10+20);
// }
// b(); 


//named function expression
// var a = 9;
// let sum1  = function sum(){
//     console.log(2+3);
// }
// sum1()
// console.log(sum1);




// function statement
// function sum(x, y){
//     return x+y;
// }
// let ans = sum(4,5);
// console.log(ans);
