document.addEventListener("DOMContentLoaded", () => {
 setInterval(getTemperature, 2000);
 afficherJson();
});

// ========== EXERCICE 1 : Récupérer la température via AJAX ========== //
function getTemperature() {
 fetch('meteo.php')
     .then(response => {
         if (!response.ok) {
             throw new Error(`Erreur réseau - Code ${response.status}`);
         }
         return response.json();
     })
     .then(data => {
         if (data.temperature !== undefined) {
             document.getElementById('temp').innerText = `${data.temperature}°C`;
             console.log("Température mise à jour :", data.temperature);
         } else {
             throw new Error("Donnée 'temperature' non trouvée dans la réponse");
         }
     })
     .catch(error => {
         document.getElementById('temp').innerText = 'Erreur lors du chargement';
         console.error('Erreur lors de la récupération de la météo:', error);
     });
}

// ========== EXERCICE 2 : Récupérer et afficher des utilisateurs depuis JSONPlaceholder ========== //
function afficherJson() {
 fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => {
         if (!response.ok) {
             throw new Error(`Erreur réseau - Code ${response.status}`);
         }
         return response.json();
     })
     .then(json => {
         const listElement = document.getElementById('list');
         listElement.innerHTML = ""; // Nettoie la liste avant d'ajouter les éléments
         json.forEach(user => {
             if (user && user.id && user.name && user.username && user.email && user.address) {
                 let li = document.createElement('li');
                 li.textContent = `ID: ${user.id}, Nom: ${user.name}, Username: ${user.username}, Email: ${user.email}, Adresse: ${user.address.street}, ${user.address.city}`;
                 listElement.appendChild(li);
             }
         });
     })
     .catch(error => {
         document.getElementById('list').innerHTML = "<li>Erreur lors du chargement des utilisateurs</li>";
         console.warn("Erreur lors du chargement des utilisateurs :", error);
     });
}
