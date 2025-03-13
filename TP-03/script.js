document.addEventListener("DOMContentLoaded", () => {
 const btnSoumettre = document.getElementById("btn_soumettre");
 const btnRecommencer = document.getElementById("btn_recommencer");
 const btnAbandonner = document.getElementById("btn_abandonner");
 const nombreInput = document.getElementById("nombre");
 const tentativeDiv = document.getElementById("tentative");
 const resultatDiv = document.getElementById("resultat");
 
 let valeur = Math.floor(Math.random() * 1000) + 1;
 let nbtentative = 1;
 let min = 1;
 let max = 1000;

 btnSoumettre.addEventListener("click", () => deviner(parseInt(nombreInput.value)));
 btnRecommencer.addEventListener("click", recommencer);
 btnAbandonner.addEventListener("click", abandonner);

 nombreInput.addEventListener("keypress", (event) => {
     if (event.key === "Enter") {
         btnSoumettre.click();
         nombreInput.select();
     }
 });

 function deviner(nombre) {
     if (isNaN(nombre) || nombre < 1 || nombre > 1000) {
         tentativeDiv.innerHTML = `Tentative N° ${nbtentative}`;
         nbtentative += 1;
         resultatDiv.innerHTML += `Le nombre est compris entre 1 et 1000<br>`;
     } else {
         if (nombre === valeur) {
             tentativeDiv.innerHTML = `Tentative N° ${nbtentative}`;
             resultatDiv.innerHTML = `Vous avez trouvé le juste prix : ${valeur}<br>`;
             nbtentative = 0;
         } else if (nombre < min || nombre > max) {
             tentativeDiv.innerHTML = `Tentative N° ${nbtentative}`;
             nbtentative += 1;
             resultatDiv.innerHTML += `Votre proposition n'a pas de sens<br>`;
         } else {
             tentativeDiv.innerHTML = `Tentative N° ${nbtentative}`;
             nbtentative += 1;
             if (nombre < valeur) {
                 resultatDiv.innerHTML += `Le nombre est plus grand que ${nombre}<br>`;
                 min = nombre;
             } else {
                 resultatDiv.innerHTML += `Le nombre est plus petit que ${nombre}<br>`;
                 max = nombre;
             }
         }
     }
 }

 function recommencer() {
     nombreInput.value = "";
     resultatDiv.innerHTML = "";
     tentativeDiv.innerHTML = "";
     valeur = Math.floor(Math.random() * 1000) + 1;
     nbtentative = 1;
     min = 1;
     max = 1000;
 }

 function abandonner() {
     nombreInput.value = "";
     resultatDiv.innerHTML = `Vous avez abandonné. Le nombre était : ${valeur}<br>`;
     tentativeDiv.innerHTML = "";
     valeur = Math.floor(Math.random() * 1000) + 1;
     nbtentative = 1;
     min = 1;
     max = 1000;
 }
});