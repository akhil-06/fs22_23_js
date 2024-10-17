
let input = document.querySelector("input");
console.log(input);

input.addEventListener("keyup", function(e){
    if(keycode === 97&&keycode==65){
        //then only trigger this task
    }
    console.log("key is pressed:- ", e);
})






let para = document.querySelector("#para")
let substractBtn = document.querySelector("#substract")
let addBtn = document.querySelector("#add")
let value = 1;


substractBtn.addEventListener("click", function () {
    if(value > 1){
        value--;
        para.innerText = value;
    }
})

// let arrowFujnc = ()=>{

// }

addBtn.addEventListener("click", ()=>{
    value++;
    para.innerText = value;
})




// console.log("helloo");

// let h1 = document.querySelector("h1");
// // console.log(typeof h1);

// h1.addEventListener("click", function(e){
//     //event object
//     console.log(e.clientX);
    
//     // alert("This is me:- Your Mentor")
//     console.log("Hi, This is Me.");
//     h1.innerText = "JS is Super 🔥"
//     // h1.style.color="green";
//     // h1.style.borderColor = "black"
// })