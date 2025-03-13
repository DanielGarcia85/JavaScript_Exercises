// ========== EXERCICE 1 : Dessiner des rectangles sur le premier canvas ========== //
const monCanvas = document.getElementById("monCanvas");
const ctx1 = monCanvas.getContext("2d");

ctx1.fillStyle = "rgba(255, 0, 0, 1)";
ctx1.fillRect(25, 25, 50, 50);
ctx1.fillStyle = "rgba(0, 0, 200, 0.5)";
ctx1.fillRect(60, 30, 30, 60);

// ========== EXERCICE 2 : Dessin de formes sur le second canvas ========== //
document.getElementById("btn_dessiner").addEventListener("click", () => {
    const ctx2 = document.getElementById("canvas2").getContext("2d");

    ctx2.beginPath();
    ctx2.fillStyle = "rgba(255, 0, 0, 1)";
    ctx2.fillRect(0, 100, 200, 30);
    ctx2.strokeRect(10, 50, 60, 30);
    ctx2.closePath();

    ctx2.beginPath();
    ctx2.arc(100, 100, 20, 0, 2 * Math.PI);
    ctx2.stroke();
    ctx2.fill();
    ctx2.closePath();

    ctx2.beginPath();
    ctx2.moveTo(150, 150);
    ctx2.lineTo(175, 200);
    ctx2.lineTo(125, 200);
    ctx2.lineTo(150, 150);
    ctx2.stroke();
    ctx2.closePath();

    // Exercice 3 : Dessiner un escalier
    const ctx3 = document.getElementById("canvas3").getContext("2d");
    ctx3.fillStyle = "rgba(0, 0, 255, 1)";

    const stepWidth = 50;
    const stepHeight = 30;
    const numSteps = 10;
    
    let x = 0;
    let y = ctx3.canvas.height - stepHeight;

    for (let i = 0; i < numSteps; i++) {
        ctx3.fillRect(x, y, stepWidth, stepHeight);
        x += stepWidth;
        y -= stepHeight;
    }
});

// ========== EXERCICE 4 : Animation d'un cercle ========== //
const canvas4 = document.getElementById("canvas4");
const ctx4 = canvas4.getContext("2d");

let x = canvas4.width / 2;
let y = canvas4.height / 2;
const radius = 20;
let dx = 2;
let dy = 2;
let animationInterval;

document.getElementById("btn_animer").addEventListener("click", () => {
    clearInterval(animationInterval);
    animationInterval = setInterval(animateCircle, 10);
});

function animateCircle() {
    ctx4.clearRect(0, 0, canvas4.width, canvas4.height);
    ctx4.beginPath();
    ctx4.arc(x, y, radius, 0, 2 * Math.PI);
    ctx4.fillStyle = "rgba(255, 0, 0, 1)";
    ctx4.fill();
    ctx4.stroke();
    ctx4.closePath();

    if (x + radius > canvas4.width || x - radius < 0) {
        dx = -dx;
    }
    if (y + radius > canvas4.height || y - radius < 0) {
        dy = -dy;
    }

    x += dx;
    y += dy;
}
