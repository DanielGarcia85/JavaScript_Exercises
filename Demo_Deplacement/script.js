let maDiv = document.getElementById("maDiv");

let modeDeplacement = false;
let offsetLeft = 0;
let offsetTop = 0;

maDiv.addEventListener("mousedown", (evt) => {
    offsetLeft = evt.clientX - maDiv.offsetLeft;
    offsetTop = evt.clientY - maDiv.offsetTop;
    modeDeplacement = true;
});

document.addEventListener("mouseup", () => {
    modeDeplacement = false;
});

document.addEventListener("mousemove", (evt) => {
    if (modeDeplacement) {
        maDiv.style.left = `${evt.clientX - offsetLeft}px`;
        maDiv.style.top = `${evt.clientY - offsetTop}px`;
    }
});
