// console.log("heyy@@@");
let btn = document.querySelector("button");
let textArea = document.getElementById("text_area");
let color = document.getElementById("color");
let notes_container = document.getElementById("notes_container");
let referesh = document.querySelector("#refresh")

function addNotes(){
    if(textArea.value === ""){
        alert("Please enter some text");
        return;
    }
    let div = document.createElement("div");
    let p = document.createElement("p");
    let cross_btn = document.createElement("button")

    div.appendChild(p);
    div.appendChild(cross_btn);
    // console.log(textArea.innerText, color.value);
    

    cross_btn.innerText = 'X';
    p.innerText = textArea.value;

    div.style.backgroundColor=color.value;

    notes_container.appendChild(div);
    textArea.value = "";
    // console.log(div);

    cross_btn.addEventListener("click", function(){
        console.log(cross_btn);
        
        div.style.display = "none"
    })
}


btn.addEventListener('click', addNotes);
referesh.addEventListener('click', function(){
    notes_container.innerHTML = "";
})