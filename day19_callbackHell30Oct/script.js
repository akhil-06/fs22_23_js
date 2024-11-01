let loggedIn = true;

let p1 = new Promise(function(res, rej){
    if(loggedIn === true){
        setTimeout(()=>{
            res("Party chalte hai!!")
        }, 3000)
    }else{
        rej("Dosti Khatam!!")
    }
});







// console.log("Hey!!!");

// function takingJokeFromServer(joke){
//     //will take joke form server and return joke in japnese langugae
// }

// function translatedJoke(joke){
//     //this will translate the joke into hindi languuage
// }

// function postJoke(translateJoke){
//     //will post the joke
// }

// takingJokeFromServer((joke)=>{
//     // console.log(joke);
//     translateJoke(joke, ()=>{
//         postJoke(translatedJoke, ()=>{
//             console.log("joke psted!!"); 
//         })
//     })
// })
