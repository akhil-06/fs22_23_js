console.log("Script start");

setTimeout(() => {
  console.log("setTimeout 1 start");

  setTimeout(() => {
    console.log("Nested setTimeout inside setTimeout 1");
  }, 0);

  console.log("setTimeout 1 end");
}, 100);

console.log("Script end");














// function printMe(){
//     console.log("print mwe");
// }

// function test(){
//     console.log('test');
// }

// setTimeout(printMe, 2000);
// test();








// console.log("start");

// setTimeout(()=>{
//     console.log("Time1");
// }, 0)

// setTimeout(()=>{
//     console.log("Time2");
// }, 0)

// setTimeout(()=>{
//     console.log("Time3");
// }, 0)

// function end(){
//     console.log("end from functtion");
// }

// end();
// console.log("end");









// console.log("start");

// function operation1(){
//     console.log("operation1 is started");
//     for(let i=0;i<100000000;i++){
//         // can do anything here
//     }
//     console.log("operation1 is ended");
// }


// function operation2(){
//     console.log("operation2 is started");
//     for(let i=0;i<5000000000;i++){
//         // can do anything here
//     }
//     console.log("operation2 is ended");
// }

// function operation3(){
//     console.log("operation3 is started");
//     for(let i=0;i<20000000000;i++){
//         // can do anything here
//     }
//     console.log("operation3 is ended");
// }

// operation1();
// operation2();
// operation3();
// console.log("END");
