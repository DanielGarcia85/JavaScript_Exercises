// ========== EXERCICE 1 : Création de la Classe Forme ==========
class Forme {
 constructor({ x = 10, y = 20, l = 40, h = 30, couleur = 'red' } = {}) {
     this.position = { x, y };
     this.taille = { l, h };
     this.couleur = couleur;
 }

 // ========== EXERCICE 2 : Méthodes d'Accès et de Modification ==========

 // Modifier la taille par un facteur donné
 modifierTaille(facteur) {
     this.taille.l *= facteur;
     this.taille.h *= facteur;
 }

 // Obtenir la position
 getPosition() {
     return this.position;
 }

 // Modifier la position
 setPosition(x, y) {
     this.position.x = x;
     this.position.y = y;
 }

 // Obtenir la taille
 getTaille() {
     return this.taille;
 }

 // Modifier la taille
 setTaille(l, h) {
     this.taille.l = l;
     this.taille.h = h;
 }

 // Obtenir la couleur
 getCouleur() {
     return this.couleur;
 }

 // Modifier la couleur
 setCouleur(couleur) {
     this.couleur = couleur;
 }
}

// ========== EXERCICE 3 : Utilisation de la Classe Forme ==========

// Création d'une nouvelle instance de Forme
const forme1 = new Forme();
console.log("Forme Initiale :", forme1); 

// Modifier la taille par un facteur de 2 (double la taille)
forme1.modifierTaille(2);
console.log("Nouvelle taille :", forme1.getTaille());

// Obtenir et modifier la position
console.log("Position actuelle :", forme1.getPosition());
forme1.setPosition(100, 200);
console.log("Nouvelle position :", forme1.getPosition());

// Obtenir et modifier la couleur
console.log("Couleur actuelle :", forme1.getCouleur());
forme1.setCouleur("blue");
console.log("Nouvelle couleur :", forme1.getCouleur());
