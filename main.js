var color = 'black';
var tempColor = color;
var colorBool = false;
var tempColorBool = colorBool;
var sum = 0;
let r = 255,g = 0,b = 0;


const blackButton = document.getElementById("blackButton");
const redButton = document.getElementById("redButton");
const greenButton = document.getElementById("greenButton");
const blueButton = document.getElementById("blueButton");
const rgbButton = document.getElementById("rgbButton");

const slider = document.getElementById("slideBar");
const sliderVal = document.getElementById("sliderVal");

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



blackButton.addEventListener("click", () => {
    color='black';
    tempColor = color;
    sum=0;
    colorBool = false;
});
redButton.addEventListener("click", () => {
    color='red'
    tempColor = color;
    sum=0;
    colorBool = false;
});
greenButton.addEventListener("click", () => {
    color='green';
    tempColor = color;
    sum=0;
    colorBool = false;
});
blueButton.addEventListener("click", () => {
    color='blue';
    tempColor = color;
    sum=0;
    colorBool = false;
});
rgbButton.addEventListener("click", () => {
    colorBool = true;
    tempColorBool = colorBool;
});

document.addEventListener("keypress", (event) => {
    if(event.code == "KeyE") {
      if(sum===0) {
        color='white';
        colorBool=false;
        sum++;
      }
      else if(sum===1) {
        color=tempColor;
        colorBool = tempColorBool;
        sum=0;
      } 
    }
});

for(let i = 1; i<=slider.value; i++) {
    for(let z = 1; z<=slider.value; z++) {
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

