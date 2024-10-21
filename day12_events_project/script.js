// console.log("hello world!!");
let container = document.querySelector(".container");

// for creating the divs and appended it to our html document
for(let i=1;i<=300;i++){
    let div = document.createElement("div");
    div.classList.add("color-container")
    container.appendChild(div)
    // console.log(div);
}

// for creating the colors and appending it to our divs
let colorContainerDiv = document.querySelectorAll(".color-container");
console.log(colorContainerDiv);

generateColors();

// for generating colors
function generateColors(){
    colorContainerDiv.forEach((element)=>{
        let newColor = randomColor();
        element.style.background = '#'+newColor;
        element.style.height = "100px";
        element.style.width = "100px";
        element.style.display = "inline-block";
        // element.style.borderRadius = "50%";
        element.innerText = "#" + newColor;
    });
}

//random colors are generated here
function randomColor(){
    let letters = '0123456789ABCDEF';
    let colorCodeLength = 6;
    let colorCode = ""
    for(let i=0;i<colorCodeLength;i++){
        let randomNumber = Math.floor(Math.random()*letters.length);
        colorCode += letters.substring(randomNumber, randomNumber+1);
    }
    return colorCode;
}
