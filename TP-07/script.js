// ========== EXERCICE 1 : Affichage de l'heure en temps réel ========== //
setInterval(() => {
 let time = new Date().toLocaleTimeString();
 document.getElementById('timer').innerHTML = time;
}, 1000);

// ========== EXERCICE 2 : Suppression progressive des éléments d'une liste ========== //
let interval2 = setInterval(() => {
 let list = document.getElementById("list");
 if (list.firstChild) {
     list.removeChild(list.lastChild);
 } else {
     clearInterval(interval2);
 }
}, 1000);

// ========== EXERCICE 3 : Diaporama automatique ========== //
let delai = 1000;
let imageActuelle = 0;
let opacite = 1;
let image = document.getElementById('image');

function diaporama() {
 const listeVignettes = document.getElementsByClassName('vignette');
 imageActuelle = (++imageActuelle) % listeVignettes.length;
 image.src = listeVignettes[imageActuelle].src;
 image.style.opacity = opacite;
 
 opacite = Math.max(opacite - 0.1, 0.1);
 if (opacite === 0.1) opacite = 1;
}

let interval3 = setInterval(diaporama, delai);

// ========== EXERCICE 4 : Contrôle du diaporama avec boutons ========== //
document.getElementById('button').addEventListener('click', (e) => {
 switch (e.target.id) {
     case "btn_stop":
         clearInterval(interval3);
         break;
     case "btn_start":
         clearInterval(interval3);
         interval3 = setInterval(diaporama, delai);
         break;
     case "btn_slow":
         clearInterval(interval3);
         delai *= 2;
         interval3 = setInterval(diaporama, delai);
         break;
     case "btn_fast":
         clearInterval(interval3);
         delai /= 2;
         interval3 = setInterval(diaporama, delai);
         break;
 }
});
