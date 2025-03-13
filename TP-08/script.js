// Référence vers la div en déplacement
let div = null;
let offsetX, offsetY;
let resetInterval;

// Début du déplacement
document.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains("draggable")) {
        div = e.target;
        offsetX = e.clientX - parseInt(div.style.left);
        offsetY = e.clientY - parseInt(div.style.top);
    }
});

// Fin du déplacement
document.addEventListener('mouseup', () => {
    div = null;
});

// Mouvement du curseur
document.addEventListener('mousemove', (e) => {
    if (div) {
        div.style.left = (e.clientX - offsetX) + 'px';
        div.style.top = (e.clientY - offsetY) + 'px';

        // Réinitialisation du délai avant le retour des divs
        clearTimeout(resetInterval);
        resetInterval = setTimeout(() => {
            document.querySelectorAll('.draggable').forEach(d => {
                d.style.left = "0px";
                d.style.top = "0px";
            });
        }, 2000);
    }
});
