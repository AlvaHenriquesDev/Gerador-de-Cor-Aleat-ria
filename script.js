
const containerEls = document.querySelectorAll(".container");

function generateColors() {
    containerEls.forEach((containerEl) => {
        for (let i = 0; i < 30; i++) {
            const colorContainerEl = document.createElement("div");
            colorContainerEl.classList.add("color-container");
            containerEl.appendChild(colorContainerEl);
            
            const newColorCode = randomColor();
            colorContainerEl.style.backgroundColor = "#" + newColorCode;
            colorContainerEl.innerText = "#"+newColorCode
        }
    });
}

function randomColor() {
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";

    for (let i = 0; i < colorCodeLength; i++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNum, randomNum + 1);
    }
    return colorCode;
}

generateColors();
