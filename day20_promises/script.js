async function fetchData(){
    let response = await fetch("https://dog.ceo/api/breeds/image/random");
    // console.log(response);
    let data = await response.json();
}


let p1 = new Promise(function(rej,res){
    setTimeout(()=>{
        res()
    },4000)
});

async function prom(){
    let pr = await p1.then(()=>{
        console.log("Hello!!!");
    });

    let pr2 = await p1.then(()=>{
        console.log("Heelo2!!!");
    });
}




console.log(p1);


fetchData();
















// console.log("Promise Done!!");


// takingJokeFromServer((joke)=>{
//     translateJoke(joke, ()=>{
//         postJoke(translatedJoke, ()=>{
//             console.log("joke psted!!"); 
//         })
//     })
// })

// async function jokePostOnline(){
//     let joke = await takingJokeFromServer();
//     let translatedJoke = await translateJoke(joke);
//     let postedJoke = await postJoke(translatedJoke);
// }






takingJokeFromServer()
.then((joke)=>{
    return translateJoke(joke);
})
.then((translatedJoke)=>{
    return postJoke(translatedJoke)
})
.then(()=>{
    console.log("joke posted");
})
.catch((error)=>{
    console.log("error", error);
})


// let logIn = false;

// function loggingIn() {
//   let p1 = new Promise(function (res, rej) {
//     // Your code here
//     if (logIn === true) {
//       setTimeout(() => {
//         res("wooohhhoooo!!!!");
//       }, 5000);
//     } else {
//       setTimeout(() => {
//         rej("Aaaeee Haayyee!!");
//       }, 5000);
//     }
//   });
//   return p1;
// }

// console.log(loggingIn());

// console.log(
//  loggingIn().then(function (msg) {
//   console.log(msg);
// }).catch(function (msg) {
//   console.log(msg);
// }));

// console.log(p1);

// fetch()
// .then((data)=>{})
// .then((result)=>data.json)
