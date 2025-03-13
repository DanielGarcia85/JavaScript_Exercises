document.addEventListener("DOMContentLoaded", () => {
 fetchData();
});

function fetchData() {
 fetch('http://127.0.0.1:8000/api/haircuts', {
     method: 'GET',
     headers: {
         'Authorization': 'Bearer 5|5xQYXPMCVidYi83wJuLdb3c0Q5N7Wyck2nSfzHYNd0b5f44a',
         'Content-Type': 'application/json'
     }
 })
 .then(response => {
     if (!response.ok) {
         throw new Error(`Erreur HTTP! Statut: ${response.status}`);
     }
     return response.json();
 })
 .then(json => {
     console.log("Données reçues :", json);
     const list = document.getElementById("list");
     list.innerHTML = ""; // Nettoyer la liste avant d'ajouter de nouveaux éléments

     json.forEach(element => {
         let li = document.createElement("li");
         li.textContent = Object.values(element).join(", ");
         list.appendChild(li);
     });
 })
 .catch(error => console.warn("Erreur lors de la requête :", error));
}
