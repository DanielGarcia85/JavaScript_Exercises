document.addEventListener("DOMContentLoaded", () => {

 console.log("Bonjour");
 console.warn("Attention ! Ceci est un message de warning");
 console.error("Erreur ! Ceci est un message d'erreur");

 const btnSend = document.getElementById("btn_send");
 const btnCalcule = document.getElementById("btn_calcule");
 const btnConvertir = document.getElementById("btn_convertir");

 // Exercice 1-2-3
 btnSend.addEventListener("click", () => {
     let source = document.getElementById("src").value;
     console.log(source);
     document.getElementById("dst").value = source;
 });

 // Exercice 4-5
 btnCalcule.addEventListener("click", () => {
     let montantMensuel = Number(document.getElementById("mont_mensuel").value);
     let nombreAnnee = Number(document.getElementById("nb_annee").value);
     let resultat = montantMensuel * 12 * nombreAnnee;
     document.getElementById("spn_epargne").innerHTML = 
         `En épargnant ${montantMensuel} CHF par mois pendant ${nombreAnnee} années, vous disposerez d'un total de ${resultat} CHF.`;
 });

 // Exercice 6
 btnConvertir.addEventListener("click", () => {
     const tauxEuro = 2;
     const tauxUsd = 3;
     let montant = Number(document.getElementById("montant").value);
     let devise = document.getElementById("devise").value;
     let res;
     let taux;

     switch (devise) {
         case "eur":
             res = montant * tauxEuro;
             taux = tauxEuro;
             break;
         case "usd":
             res = montant * tauxUsd;
             taux = tauxUsd;
             break;
     }

     document.getElementById("resultat").value = res;
     document.getElementById("resultat2").innerHTML = 
         `Le montant converti est de ${montant * taux} ${devise.toUpperCase()}`;
 });

});
