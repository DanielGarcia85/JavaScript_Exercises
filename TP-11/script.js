document.addEventListener("DOMContentLoaded", () => {
 document.getElementById('textJson_id').addEventListener("keyup", rechercheSommetsJson);
 document.getElementById('textXML_id').addEventListener("keyup", rechercheSommetsXML);
 document.getElementById('textCSV_id').addEventListener("keyup", rechercheSommetsCSV);
});

const divResultats = document.getElementById('div_id');

// ========== Fonction de nettoyage de l'affichage ========== //
function nettoyerAffichage() {
 divResultats.innerHTML = "";
}

// ========== RECHERCHE JSON ========== //
function rechercheSommetsJson() {
 nettoyerAffichage();
 document.getElementById('textXML_id').value = "";
 document.getElementById('textCSV_id').value = "";

 let recherche = document.getElementById('textJson_id').value;
 if (recherche.trim() === "") return;

 fetch(`TP11_AJAX_JSON.php?recherche=${recherche}`)
     .then(response => response.json())
     .then(json => {
         json.forEach(sommet => {
             let p = document.createElement('p');
             p.textContent = `ID: ${sommet.som_id}, Nom: ${sommet.som_nom}, Région: ${sommet.som_region}, Altitude: ${sommet.som_altitude}`;
             divResultats.appendChild(p);
         });
     })
     .catch(error => console.warn("Erreur JSON :", error));
}

// ========== RECHERCHE XML ========== //
function rechercheSommetsXML() {
 nettoyerAffichage();
 document.getElementById('textJson_id').value = "";
 document.getElementById('textCSV_id').value = "";

 let recherche = document.getElementById('textXML_id').value;
 if (recherche.trim() === "") return;

 fetch(`TP11_AJAX_XML.php?recherche=${recherche}`)
     .then(response => response.text())
     .then(response => {
         let parser = new DOMParser();
         return parser.parseFromString(response, "text/xml");
     })
     .then(xml => {
         let sommets = xml.getElementsByTagName('sommet');
         Array.from(sommets).forEach(sommet => {
             let nom = sommet.getElementsByTagName('nom')[0].textContent;
             let region = sommet.getElementsByTagName('region')[0].textContent;
             let altitude = sommet.getAttribute('altitude');

             let p = document.createElement('p');
             p.textContent = `Nom: ${nom}, Région: ${region}, Altitude: ${altitude}`;
             divResultats.appendChild(p);
         });
     })
     .catch(error => console.warn("Erreur XML :", error));
}

// ========== RECHERCHE CSV ========== //
function rechercheSommetsCSV() {
 nettoyerAffichage();
 document.getElementById('textJson_id').value = "";
 document.getElementById('textXML_id').value = "";

 let recherche = document.getElementById('textCSV_id').value;
 if (recherche.trim() === "") return;

 fetch(`TP11_AJAX_CSV.php?recherche=${recherche}`)
     .then(response => response.text())
     .then(text => {
         let lignes = text.split("\n").filter(line => line.trim() !== ""); // Évite les lignes vides
         lignes.forEach(ligne => {
             let champs = ligne.split(";");
             let p = document.createElement('p');
             p.textContent = `Nom: ${champs[1]}, Altitude: ${champs[0]}, Région: ${champs[2]}`;
             divResultats.appendChild(p);
         });
     })
     .catch(error => console.warn("Erreur CSV :", error));
}
