var css = document.querySelector("h3")
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var btn = document.querySelector(".btn")
var body = document.getElementById("gradient")

function setGradient() {
    body.style.background =
        `linear-gradient(to right, 
            ${color1.value}, 
            ${color2.value})`;

    css.textContent = body.style.background + ";";
}

// 3. BONUS: Add a random button which generates two random numbers for the colour inputs.
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randomColors() {
    color1.value = getRandomColor();
    color2.value = getRandomColor();

    setGradient();
}

// 1. Write code so that the colour inputs match the background generated on the first page load.
// 2. Display the initial CSS linear gradient property on page load.
setGradient()

// 3. BONUS: Add a random button which generates two random numbers for the colour inputs.
btn.addEventListener("click", randomColors)

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)
