document.addEventListener("DOMContentLoaded", () => {
 loadCSV();
 loadXML();
});

// Fonction pour charger le fichier CSV
function loadCSV() {
 fetch('client.csv')
     .then(res => res.text())
     .then(res => {
         console.log("Données CSV :", res);
         const clients = res.split("\n");
         const csvClientsList = document.getElementById("csvClients");

         clients.forEach(client => {
             const champs = client.split(";");
             if (champs.length >= 3) {
                 console.log(champs[0], champs[1], champs[2]);

                 // Affichage dans la page
                 const li = document.createElement("li");
                 li.textContent = `Nom: ${champs[0]}, Prénom: ${champs[1]}, Téléphone: ${champs[2]}`;
                 csvClientsList.appendChild(li);
             }
         });
     })
     .catch(err => console.error("Erreur chargement CSV:", err));
}

// Fonction pour charger le fichier XML
function loadXML() {
 fetch('client.xml')
     .then(res => res.text())
     .then(res => {
         console.log("Données XML :", res);

         const parser = new DOMParser();
         const xml = parser.parseFromString(res, "text/xml");

         // Extraction des clients
         const clients = Array.from(xml.getElementsByTagName("client"));
         const xmlClientsList = document.getElementById("xmlClients");

         clients.forEach(client => {
             const nom = client.getElementsByTagName('nom')[0].textContent;
             const prenom = client.getElementsByTagName('prenom')[0].textContent;
             const telephone = client.getElementsByTagName('telephone')[0].textContent;
             console.log(nom, prenom, telephone);

             // Affichage dans la page
             const li = document.createElement("li");
             li.textContent = `Nom: ${nom}, Prénom: ${prenom}, Téléphone: ${telephone}`;
             xmlClientsList.appendChild(li);
         });
     })
     .catch(err => console.error("Erreur chargement XML:", err));
}
