document.addEventListener("DOMContentLoaded", () => {

 // Sélection des boutons
 document.getElementById("btn_additionner").addEventListener("click", () => calculer("+"));
 document.getElementById("btn_soustraire").addEventListener("click", () => calculer("-"));
 document.getElementById("btn_multiplier").addEventListener("click", () => calculer("*"));
 document.getElementById("btn_diviser").addEventListener("click", () => calculer("/"));
 document.getElementById("btn_racine").addEventListener("click", () => calculer("racine"));
 document.getElementById("btn_puissance").addEventListener("click", () => calculer("puissance"));
 document.getElementById("btn_log").addEventListener("click", () => calculer("log"));
 document.getElementById("btn_exp").addEventListener("click", () => calculer("exponentiel"));
 document.getElementById("btn_reinitialiser").addEventListener("click", reinitialiser);

 function calculer(operateur) {
     const valeur1 = parseFloat(document.getElementById("nombre1").value);
     const valeur2 = parseFloat(document.getElementById("nombre2").value);
     let resultat;

     if (validerInput(valeur1, valeur2, operateur)) {
         switch (operateur) {
             case '+':
                 resultat = valeur1 + valeur2;
                 break;
             case '-':
                 resultat = valeur1 - valeur2;
                 break;
             case '*':
                 resultat = valeur1 * valeur2;
                 break;
             case '/':
                 resultat = valeur2 !== 0 ? valeur1 / valeur2 : "Erreur: Division par 0";
                 break;
             case 'racine':
                 resultat = Math.pow(valeur1, 1 / valeur2);
                 break;
             case 'puissance':
                 resultat = Math.pow(valeur1, valeur2);
                 break;
             case 'log':
                 resultat = (valeur1 > 0 && valeur2 > 0 && valeur2 !== 1) 
                     ? Math.log(valeur2) / Math.log(valeur1) 
                     : "Erreur: base > 0 et ≠ 1, valeur > 0";
                 break;
             case 'exponentiel':
                 resultat = Math.exp(valeur1);
                 break;
             default:
                 resultat = "Opération non reconnue";
         }
         afficherResultat(`Résultat: ${resultat}`);
     } else {
         afficherResultat("Erreur : Entrées invalides");
     }
 }

 function afficherResultat(message) {
     document.getElementById("resultat").innerText = message;
 }

 function reinitialiser() {
     document.getElementById("nombre1").value = "";
     document.getElementById("nombre2").value = "";
     afficherResultat("Résultat: ");
 }

 function validerInput(valeur1, valeur2, operateur) {
     if (isNaN(valeur1) || (isNaN(valeur2) && operateur !== "exponentiel")) {
         alert("Veuillez entrer des nombres valides.");
         return false;
     }
     return true;
 }
});
