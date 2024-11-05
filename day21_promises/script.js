let div = document.querySelector("div");

function showDataOnUi(data){
    let img = document.createElement("img");
    img.src = data.hdurl;
    img.height = "500";
    img.width = "500"
    div.appendChild(img)
}


async function fetchData(){
    let data = await fetch("https://api.nasa.gov/planetary/apod?api_key=o5Pc0QadAHgPIoN0TKyo5Mz2yNllnrA7f3qMerGN");
    let response = await data.json();
    showDataOnUi(response)
    console.log(response);
}
fetchData();

// let p1 = new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         return resolve("p1 Done");
//     }, 3000)
// });
// async function abc() {
//     let val = await p1;
//     console.log("hemlooo");
//     console.log(val);
//     let val2 = await p1;
//     console.log("police");
//     console.log(val2);
// }
// abc();

// fetch("https://api.nasa.gov/planetary/apod?api_key=o5Pc0QadAHgPIoN0TKyo5Mz2yNllnrA7f3qMerGN")
// .then(response => response.json())
// .then(data => console.log(data))


























// promise.all() -> will take an array of promises
// let promise1 = new Promise((reject,rej)=>{
//     setTimeout(()=> rej('Promise 1 resolved'), 100);
// })

// let promise2 = new Promise((resolve, reject)=>{
//     setTimeout(()=> reject('Promise 2 reject'), 10);
// })

// let promise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=> reject('Promise 3 resolved'), 50);
// })

// let promise4 = new Promise((resolve,reject)=>{
//     setTimeout(()=> reject('Promise 4 resolved'), 100);
// })


// let promiseArray = [promise1, promise2, promise3,promise4];

// Promise.any(promiseArray)
// .then((results)=>{
//     console.log(results);
// })
// .catch((error)=>{
//     console.log(error);
// })














// console.log("hello!!!");

// let logIn = true;
// function log(){
//     let p1 = new Promise(function(res, rej){
//         if(logIn === true){
//             res("User is loggedIn successfully situation 2");
//         }else{
//             rej("User is not loggedIn");
//         }
//     });
//     return p1;
// }

// log().
// then((rd)=>{
//     console.log(rd);
// })
// .catch((msg)=>{
//     console.log(msg);
// })


// console.log(p1);

