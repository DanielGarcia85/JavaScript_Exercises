// ========== EXERCICE 1 : Stockage des informations ========== //
document.addEventListener("DOMContentLoaded", () => {
 if (localStorage.getItem('nom')) {
     document.getElementById('nom').value = localStorage.getItem('nom');
 }
 if (localStorage.getItem('npa')) {
     document.getElementById('npa').value = localStorage.getItem('npa');
 }
});

document.getElementById('nom').addEventListener('keyup', remplirLocalStorage);
document.getElementById('npa').addEventListener('keyup', remplirLocalStorage);

function remplirLocalStorage() {
 localStorage.setItem('nom', document.getElementById('nom').value);
 localStorage.setItem('npa', document.getElementById('npa').value);
}

// ========== EXERCICE 2 : Compteur de visites ========== //
let cpt = localStorage.getItem('cpt') ? parseInt(localStorage.getItem('cpt')) + 1 : 1;
localStorage.setItem('cpt', cpt);
document.getElementById('compteur').textContent = cpt;

// ========== EXERCICE 3 : Gestion du panier ========== //
let panierTab = JSON.parse(localStorage.getItem("panier")) || [];

const panierUl = document.getElementById("panierUl");
const produit = document.getElementById("produit");
document.getElementById("btn_ajouter").addEventListener("click", ajouterProduit);

afficherPanier();

function ajouterProduit() {
 if (produit.value.trim() !== "") {
     panierTab.push(produit.value.trim());
     panierTab.sort();
     localStorage.setItem('panier', JSON.stringify(panierTab));
     afficherPanier();
 }
}

panierUl.addEventListener('click', (e) => {
 if (e.target.nodeName === "LI") {
     supprimerProduitDuPanier(e.target.textContent);
     afficherPanier();
 }
});

function supprimerProduitDuPanier(produitSupprime) {
 panierTab = panierTab.filter(product => product !== produitSupprime);
 localStorage.setItem('panier', JSON.stringify(panierTab));
}

function afficherPanier() {
 panierUl.innerHTML = "";
 panierTab.forEach(product => {
     let li = document.createElement('li');
     li.textContent = product;
     panierUl.appendChild(li);
 });
}
