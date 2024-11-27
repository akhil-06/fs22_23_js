
let p1 = new Promise((resolve)=>{
    setTimeout(()=> resolve('p1 is rresolved'),100)
})
let p2 = new Promise((resolve)=>{
    setTimeout(()=> resolve('p2 is rresolved'),500)
})
let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=> reject('p3 is rresolved'),100)
})

let promiseArray = [p1,p2,p3];
Promise.any(promiseArray)
.then((values)=>{
    console.log(values);
})
.catch((error)=>{
    console.log(error);
})














































// dil

// function displayDataOnUi(data){
//     console.log(data);
//     data.forEach((data)=>{
//         const div = document.createElement('div');
//         div.innerHTML = `
//         <h2>${data.Title}</h2>
//         <p>Age: ${data.Year}</p>
//         <img src=${data.Poster}/>
//         <p>Country: ${data.Type}</p>
//         `;
//         document.body.appendChild(div);
//     })
    
// }

// let query = "pyar"
// let API_KEY = "768ac372";
// async function fakeProductsFetching() {
//     let data = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&type=series`);
//     let result = await data.json();
//     // console.log(result.Search);
//     displayDataOnUi(result.Search)
// }

// fakeProductsFetching();