// ========= Création d'une Promesse ========= //
const maPromesse = (nom) => {
 let timeout = Math.random() * 1500 + 500; // 0.5 à 2 secondes

 return new Promise((resolve, reject) => {
     setTimeout(() => {
         if (Math.random() < 0.8) {
             resolve(`${nom} réussi`);
         } else {
             reject(`${nom} échoué`);
         }
     }, timeout);
 });
};

console.log("Test d'affichage console intermédiaire 1");

// ========= Exécuter plusieurs promesses indépendamment ========= //
["Test1", "Test2", "Test3"].forEach(test =>
 maPromesse(test)
     .then(res => console.log(res))
     .catch(erreur => console.log(erreur))
);

console.log("Test d'affichage console intermédiaire 2");

// ========= Promise.all() : Attendre que toutes les promesses soient réalisées ========= //
Promise.all([maPromesse("Test4"), maPromesse("Test5"), maPromesse("Test6")])
 .then(results => {
     console.log("Toutes les promesses terminées :", results);
 })
 .then(([res1, res2, res3]) => {
     console.log("Résultats individuels :", res1, res2, res3);
 })
 .catch(erreur => console.log("Une des promesses a échoué :", erreur));

console.log("Test d'affichage console intermédiaire 3");

// ========= Promise.race() : La première promesse qui se résout gagne ========= //
Promise.race([maPromesse("Test7"), maPromesse("Test8"), maPromesse("Test9")])
 .then(res => {
     console.log("Première promesse terminée :", res);
 })
 .catch(erreur => console.log("Erreur dans la course :", erreur));

console.log("Test d'affichage console intermédiaire 4");

// ========= Appels API avec Promise.all() ========= //
Promise.all([
 fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json()),
 fetch('https://jsonplaceholder.typicode.com/posts').then(r => r.json())
])
 .then(([users, posts]) => {
     // Associer chaque post avec son auteur
     const postsWithAuthors = posts.map(post => {
         const author = users.find(user => user.id === post.userId);
         return { ...post, authorName: author ? author.name : 'Auteur inconnu' };
     });

     // Affichage dans la console
     postsWithAuthors.forEach(post => {
         console.log(`Post: ${post.title}, Auteur: ${post.authorName}`);
     });
 })
 .catch(error => console.error("Erreur lors de la récupération des données :", error));
