
// not with event deligation
// let btns = document.querySelectorAll("button");
// btns.forEach((ele)=>{
//     ele.addEventListener("click",function(){
//         console.log("btn is cliked@@@") 
//     })
// })


// with event deligation code

let div = document.querySelector("div");
div.addEventListener("click", function(event){
    if(event.target.tagName === "Click2"){
        console.log("button is clicked", event)
    }else if(event.target.tagName === "H1"){
        console.log("button is clicked", event)
    }
})






















// console.log("hello");

// let div1 = document.querySelector("#div1");
// let div2 = document.querySelector("#div2");
// let div3 = document.querySelector("#div3");
// let body = document.querySelector("body");

// body.addEventListener("click", function(){
//     console.log("body is clicked!!!!");
// });

// div1.addEventListener()

// div1.addEventListener("click", function(e){
//     console.log("div1 is clicked"); 
//     e.stopPropagation();
// // });

// div2.addEventListener("click", function(e){
//     console.log("div2 is clicked"); 
//     e.stopPropagation();
// });

// div3.addEventListener("click", function(e){
//     console.log("div3 is clicked"); 
//     e.stopPropagation();
// });








// let h1 = document.querySelector("#head1");
// console.log(h1);

// h1.addEventListener("click", function(){
//     alert("h1 is clicked!!")
// })

