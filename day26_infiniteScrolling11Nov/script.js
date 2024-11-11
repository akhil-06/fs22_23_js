//closures
let myName = document.getElementById("my-name");
let btn = document.getElementById("my-btn");

function makeTextSizer(size){
    // function chnageSize(){
    //     myName.style.fontSize = `${size}px`;
    // }
    // return chnageSize;
    myName.style.fontSize = `${size}px`;
}

let size12 = makeTextSizer(12);
let size70 = makeTextSizer(80);
let size52 = makeTextSizer(52);
let size100 = makeTextSizer(100);


btn.addEventListener("click", size100)

//currying
// function sum(a){
//     return function(b){
//         return function(c){
//             // console.log(a+b+c);
//             return a+b+c;
//         }
//     }
// }
// let ans = sum(2)(3)(4);
// console.log(ans);

// console.log(sum(5)(6)(7));


// function makeAdder(x){
//     return function(y){
//         return x+y;
//     };
// }

// let add5 = makeAdder(5);
// let add20 = makeAdder(20);
// let dollar70 = makeAdder(80);


// console.log(dollar70(10));
// console.log(add5(10));











// function init(){
//     let name = "Akhil";

//     function displayName(){
//         console.log(name);
//     }
//     return displayName;
// }

// let ans = init();
// ans(); // prints "Akhil
// ans();
// ans();
// ans();
// ans();
// ans();

// ans();
// console.log(ans); //Akhil





// let apiKey = "m6JtyTqhaDezk8T3Gi-S8wXrrZ8M9lwmm4xtThv-HwQ";
// let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=10`;

// async function getPhots() {
//   try {
//     let response = await fetch(apiUrl);
//     let data = await response.json();
//     console.log(data); //array of photo onjects

//     let box = document.querySelector(".box");
//     data.forEach((photo) => {
//       console.log(photo);
//       let img = document.createElement("img");
//       img.src = photo.urls.regular;
//       img.style.height = "500px";
//       img.style.width = "400px";
//       box.appendChild(img);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

// getPhots();

// window.addEventListener("scroll", function(){
//     console.log(window.scrollY, window.innerHeight + 50, document.body.offsetHeight);
    
//     if(Math.ceil(window.scrollY + window.innerHeight) >= document.body.offsetHeight){
//         getPhots();
//     }
// })