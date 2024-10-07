// https://javascript.info/
// Hoisting

// console.log(akhil);
// const akhil = 10;


hello();

function hello(){
    var akhil = 10;
    console.log(akhil);
}


// var akhil;
// console.log(akhil);
// akhil = 10;













//function chaining
// let a = 10;
// function outerMost(){
//     let b = 20;
//     console.log(a--,b++);
//     function outer(){
//         let c = 30;
//         console.log(a--,b++,c++);
//         function inner(){
//             let d = 40;
//             console.log(a--,b++,c++,d++);
//             function innerMost(){
//                 let e = 50;
//                 console.log(a--,b++,c++,d++,--e);
//             }
//             innerMost();
//         }
//         inner();
//     }
//     outer();
// }
// outerMost();






// if(true){
//     var name = "saani"
//     console.log(name1);
// }

// console.log(name1);








// let studentName = "Manish";

// function avantika(){
//     const studentName = "Avantika"
//     console.log(studentName);
// }
// avantika();

// console.log(studentName);


// let studentName = "Surya";

// {
//     console.log(studentName);
// }




















// 6:- 0,1,1,2,3,5
// 7:- 0,1,1,2,3,5,8
// function fibbonacciSeries(n){
//     let a =0;
//     let b = 1;
//     let nextTerm = null;
//     for(let i=1;i<=n;i++){
//         console.log(a);
//         nextTerm = a + b;
//         a = b;
//         b = nextTerm;
//     }
// }
// fibbonacciSeries(10);



// function factorial(num){
//     if(num < 0){
//         return "Factorial is not defined for negative numbers";
//     }else if(num === 0 || num === 1){
//         return 1;
//     }else{
//         let fact = 1;
//         for(let i=2;i<=num;i++){
//             fact *= i;
//         }
//         return `The factorial of ${num} is ${fact}`;
//     }
// }
// console.log(factorial(-5));
// console.log(factorial(5));
// console.log(factorial(2));




// //function declaration
// function sum(a, b){
//     // console.log(2+3);
   
//     return a+b;
//     //tdz
//     console.log("sadgcajsedfc");
//     console.log(2+3);

// }

// //function calling
// let ans = sum(10,20);
// console.log(ans);
