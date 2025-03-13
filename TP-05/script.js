// Exercice 1 : Ajouter un élément à la liste
document.getElementById('btn_ajouter').addEventListener('click', () => {
 let input = document.getElementById('inputText').value;
 if (input !== "") {
     let ul = document.getElementById('liste');
     let li = document.createElement('li');
     li.textContent = input;
     ul.appendChild(li);
     document.getElementById('inputText').value = "";
 }
});

// Exercice 2 : Supprimer éléments de la liste
document.getElementById('btn_supprimer_dernier').addEventListener('click', () => {
 let liste = document.getElementById('liste');
 if (liste.children.length > 0) {
     liste.removeChild(liste.lastChild);
 }
});

document.getElementById('btn_supprimer_premier').addEventListener('click', () => {
 let liste = document.getElementById('liste');
 if (liste.children.length > 0) {
     liste.removeChild(liste.firstChild);
 }
});

document.getElementById('btn_supprimer_tous').addEventListener('click', () => {
 document.getElementById('liste').innerHTML = "";
});

// Exercice 3 : Gestion des modèles
const bmwModels = ['X1', 'X2', 'X3', 'X4', 'X5'];
const mercedesModels = ['Classe C', 'Classe E', 'Classe S'];

document.getElementById('marques').addEventListener('change', () => {
 const modeles = document.getElementById('modeles');
 modeles.innerHTML = ""; 
 const selectedBrand = document.getElementById('marques').value;
 const models = selectedBrand === "bmw" ? bmwModels : mercedesModels;

 models.forEach(model => {
     let option = document.createElement('option');
     option.value = model.toLowerCase();
     option.textContent = model;
     modeles.appendChild(option);
 });
});

// Exercice 4 : Supprimer un élément en cliquant dessus
document.getElementById('liste').addEventListener('click', (e) => {
 if (e.target.nodeName === 'LI') {
     e.target.remove();
 }
});

// Exercice 5 : Calculatrice
document.querySelector('.calculatrice').addEventListener('click', (e) => {
 if (e.target.nodeName === 'BUTTON') {
     calculer(e.target.value);
 }
});

function calculer(operateur) {
 let valeur1 = parseFloat(document.getElementById('nombre1').value);
 let valeur2 = parseFloat(document.getElementById('nombre2').value);
 let resultat;

 if (!isNaN(valeur1) && !isNaN(valeur2)) {
     switch (operateur) {
         case '+': resultat = valeur1 + valeur2; break;
         case '-': resultat = valeur1 - valeur2; break;
         case '*': resultat = valeur1 * valeur2; break;
         case '/': resultat = valeur2 !== 0 ? valeur1 / valeur2 : "Erreur: Division par zéro"; break;
     }
 } else {
     resultat = "Entrées invalides";
 }

 document.getElementById('resultat').innerText = "Résultat: " + resultat;
}

// Exercice 6 : Changer image principale
document.getElementById('vignettes').addEventListener('click', (e) => {
 if (e.target.nodeName === 'IMG') {
     document.getElementById('image').src = e.target.src;
 }
});
