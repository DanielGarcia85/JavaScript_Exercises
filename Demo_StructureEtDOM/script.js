document.addEventListener("DOMContentLoaded", () => {
    // Sélection des éléments HTML
    const produits = document.getElementById("produits");
    const quantite = document.getElementById("quantite");
    const btnAjouter = document.getElementById("btnAjouter");
    const btnSupprimerDernier = document.getElementById("btnSupprimerDernier");
    const listeAffichee = document.getElementById("listeAffichee");
    const demo = document.getElementById("demo");

    // Tableau du panier
    let panier = [];

    // Fonction d'affichage du panier
    function afficherPanier() {
        listeAffichee.innerHTML = ""; // Vider la liste avant de l'afficher

        panier.forEach((p, index) => {
            let li = document.createElement("li");
            li.setAttribute("data-index", index);
            li.textContent = `${p.nom} - ${p.qte}`;
            listeAffichee.appendChild(li);
        });
    }

    // Ajout d'un produit au panier
    btnAjouter.addEventListener("click", () => {
        if (!produits.value || !quantite.value || quantite.value <= 0) {
            alert("Veuillez sélectionner un produit et entrer une quantité valide.");
            return;
        }

        let nouveauProduit = panier.find((p) => p.nom === produits.value);

        if (!nouveauProduit) {
            panier.push({
                nom: produits.value,
                qte: Number(quantite.value)
            });
        } else {
            nouveauProduit.qte += Number(quantite.value);
        }

        panier.sort((p1, p2) => p1.nom.localeCompare(p2.nom));

        afficherPanier();
        console.log("Panier mis à jour:", panier);
    });

    // Suppression du dernier élément
    btnSupprimerDernier.addEventListener("click", () => {
        if (panier.length > 0) {
            panier.pop(); // Supprime le dernier élément du tableau
            afficherPanier(); // Mettre à jour l'affichage
        }
    });

    // Suppression d'un élément en cliquant dessus
    listeAffichee.addEventListener("click", (event) => {
        if (event.target.nodeName === "LI") {
            let index = event.target.dataset.index;
            panier.splice(index, 1); // Supprime l'élément du tableau
            afficherPanier();
        }
    });

    // Bouton Demo (Console log)
    demo.addEventListener("click", (event) => console.log("Événement Demo:", event));
});
