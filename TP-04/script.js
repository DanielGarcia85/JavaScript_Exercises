let panier = [];
let nbarticle = 0;

document.getElementById("btn_add").addEventListener("click", () => {
    let article = document.getElementById("articleselected").value;
    let quantite = Number(document.getElementById("inp_nbarticle").value);

    if (article === "") {
        alert("Vous devez sélectionner un article");
    } else if (quantite <= 0 || isNaN(quantite)) {
        alert("Vous devez renseigner une quantité valide");
    } else {
        let art = panier.find((p) => p.nom === article);
        if (!art) {
            art = { nom: article, qte: quantite };
            panier.push(art);
            panier.sort((p1, p2) => p1.nom.localeCompare(p2.nom));
        } else {
            art.qte += quantite;
        }

        nbarticle += quantite;
        afficherPanier();
    }
});

function afficherPanier() {
    document.getElementById("spn_nbarticle").innerHTML = nbarticle;
    let panierAffichage = "";
    panier.forEach((e) => {
        panierAffichage += `${e.qte} ${e.nom}<br>`;
    });
    document.getElementById("spn_panier").innerHTML = panierAffichage;
}
