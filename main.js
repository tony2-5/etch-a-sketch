var color = 'black';
var tempColor = color;
var colorBool = false;
var tempColorBool = colorBool;
var sum = 0;
let r = 255,g = 0,b = 0;


const blackButton = document.getElementById("blackButton");
blackButton.style.backgroundColor = "black";
const redButton = document.getElementById("redButton");
redButton.style.backgroundColor = "red";
const greenButton = document.getElementById("greenButton");
greenButton.style.backgroundColor = "green";
const blueButton = document.getElementById("blueButton");
blueButton.style.backgroundColor = "blue";
const rgbButton = document.getElementById("rgbButton");

const slider = document.getElementById("slideBar");
const sliderVal = document.getElementById("sliderVal");
sliderVal.innerHTML = `${slider.value}x${slider.value}`

function clearBoard() {
    let grid = document.getElementById("grid");
    for(let i = 1; i<=grid.childNodes.length; i++) {
        grid.childNodes[i].style.backgroundColor = 'white';
    }
}

slider.addEventListener("input", () => {
    sliderVal.innerHTML = `${slider.value}x${slider.value}`
    document.querySelector(':root').style.setProperty('--rows', slider.value);
    document.querySelector(':root').style.setProperty('--columns',slider.value);
    clearBoard();
});

const currentColor = document.getElementById("currentColor");

blackButton.addEventListener("click", () => {
    color='black';
    currentColor.innerHTML = "Current Color";
    currentColor.style.backgroundImage = 'none';
    currentColor.style.backgroundColor = color;
    tempColor = color;
    sum=0;
    colorBool = false;
});
redButton.addEventListener("click", () => {
    color='red'
    currentColor.innerHTML = "Current Color";
    currentColor.style.backgroundImage = 'none';
    currentColor.style.backgroundColor = color;
    tempColor = color;
    sum=0;
    colorBool = false;
});
greenButton.addEventListener("click", () => {
    color='green';
    currentColor.innerHTML = "Current Color";
    currentColor.style.backgroundImage = 'none';
    currentColor.style.backgroundColor = color;
    tempColor = color;
    sum=0;
    colorBool = false;
});
blueButton.addEventListener("click", () => {
    color='blue';
    currentColor.innerHTML = "Current Color";
    currentColor.style.backgroundImage = 'none';
    currentColor.style.backgroundColor = color;
    tempColor = color;
    sum=0;
    colorBool = false;
});
rgbButton.addEventListener("click", () => {
    colorBool = true;
    currentColor.innerHTML = "Current Color";
    currentColor.style.backgroundImage = "linear-gradient(135deg, red 0%,red 33%,green 33%,green 66%,blue 66%, blue 100%)";
    tempColorBool = colorBool;
});

document.addEventListener("keypress", (event) => {
    if(event.code == "KeyE") {
      if(sum===0) {
        color='white';
        colorBool=false;
        currentColor.innerHTML = "Eraser Mode Activated";
        sum++;
      }
      else if(sum===1) {
        if(tempColorBool) {
            colorBool = tempColorBool;
            tempColorBool = false;
        }
        color=tempColor;
        currentColor.innerHTML = "Current Color";
        sum=0;
      } 
    }
});

for(let i = 1; i<=64; i++) {
    for(let z = 1; z<=64; z++) {
        const newDiv = document.createElement("div");
        newDiv.addEventListener("mouseover", () => {
            if(colorBool) {
                newDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                if(r===255) {
                    r=0;
                    g=255;
                }
                else if(g===255) {
                    g=0;
                    b=255;
                }
                else {
                    b=0;
                    r=255;
                }
            } 
            else {
                newDiv.style.backgroundColor = color;
            }
        })
        document.getElementById("grid").appendChild(newDiv);
    }
}

const clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", clearBoard);

