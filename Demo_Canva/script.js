let canvas = document.getElementById("monCanvas");
let ctx = canvas.getContext("2d");

let x = 150;
let y = 150;
let sens = 1;
let vitesse = 2;

setInterval(() => {
    x += vitesse * sens;

    // Option rebondir
    if (x > 280 || x < 20) {            
        sens *= -1;
        let r = Math.random() * 255;
        let g = Math.random() * 255;
        let b = Math.random() * 255;
        let t = 0.1 + Math.random() * 0.9;
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${t})`;
    }

    // Option apparaître de l'autre côté
    // if (x > 320) x = -20

    ctx.clearRect(0, 0, 300, 300);
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}, 10);
