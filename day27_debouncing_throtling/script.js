// async function fetchData() {
//     let data = await fetch("http://www.omdbapi.com/?apikey=c8d793ca&s=The Conjuring");
//     let result = await data.json();
//     console.log(result);
// }

// fetchData();



document.getElementById('movie-search').addEventListener('keyup',(e)=>{
    let timer;
    if(timer) clearTimeout(timer);

    let query = e.target.value.trim();
    if(query.length < 3) return;

    timer = setTimeout(async ()=>{
        let data =  await fetch(`http://www.omdbapi.com/?apikey=c8d793ca&s=${query}`);
        let result = await data.json();
        console.log(result);
    }, 2000)
})





// function myThrottle(func, delay) {
//     return function(){
//         document.getElementById("my-btn").disabled = true;
//         setTimeout(()=>{
//             func()
//         }, delay)
//     }
// }



// let newFun = myThrottle(()=>{
//     document.getElementById("my-btn").disabled = false;
//     console.log('btn is free now ');
// }, 3000)



// let counter = 0;
// function count(){
//     console.log(counter++); 
// }

// function myDebounce(func, delay){
//     let timer;
//     return function(){
//         if(timer) clearTimeout(timer);
//         timer = setTimeout(()=>{
//             func();
//         }, delay)
//     }
// }


// let betterFunction = myDebounce(count,1000)