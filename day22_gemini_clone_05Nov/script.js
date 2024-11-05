let apiKey = AIzaSyCaOgxmWWpiF9JJU5xMufKW6M0LO7GoXz8;




// async function complexExample() {
//     console.log('A');
    
//     setTimeout(()=> console.log('B'), 1000);

//     let p1 = new Promise((resolve)=> setTimeout(()=> resolve('C'), 500));
//     console.log(await p1);

//     let p2 = Promise.resolve('D');
//     p2.then((res)=> console.log(res))

//     console.log('E');

//     await new Promise(resolve => setTimeout(resolve, 100));
//     console.log('F');  
    
// }

// complexExample();
// console.log('G');












// async function fetchData(){
//     console.log('fethcing data !!!');

//     let stop1 = await new Promise(resolve => setTimeout(()=> resolve('step 1 completed'), 1000));
//     console.log(stop1);

//     let stop2 = await new Promise(resolve => setTimeout(()=> resolve('step 2 completed'), 1000));
//     console.log(stop2);

//     let stop3 = await new Promise(resolve => setTimeout(()=> resolve('step 3 completed'), 1000));
//     console.log(stop3);

//     console.log('All steps completed');
// }

// function sum(){
//     console.log(3+5);
// }

// fetchData();
// console.log("async sequence");
// sum();








// async function example() {
//     console.log('1');
//     setTimeout(()=> console.log('2'), 0);
//     let result = await Promise.resolve('3');
//     console.log(result);
//     console.log('4');
// }
// example();
// console.log('5');





// async function example() {
//     console.log('start');
//     const result = await Promise.resolve("Resolved!!!");
//     console.log(result);
//     console.log('End');
// }

// example();
// console.log('outside the async function');


