// Variables globales
let nombre_requetes = 0;
let nombre_impact = 0;
let tm;

// Vérifier si une fréquence est enregistrée en localStorage
if (localStorage.getItem('frequence')) {
    document.getElementById('frequence').value = localStorage.getItem('frequence');
}

// Lancer les requêtes automatiquement au chargement
lancerRequetes();

// Événement : Enregistrer la fréquence dans le localStorage
document.getElementById('btnEnregistrer').addEventListener('click', () => {
    localStorage.setItem('frequence', document.getElementById('frequence').value);
});

// Événement : Changement de la fréquence
document.getElementById('frequence').addEventListener('change', () => {
    clearInterval(tm); // Arrêter l'intervalle
    lancerRequetes();  // Redémarrer avec la nouvelle fréquence
});

// Fonction pour envoyer des requêtes à l'API
function lancerRequetes() {
    let frequence = parseInt(document.getElementById('frequence').value) || 500;
    
    tm = setInterval(() => {
        fetch("cc_meteo.php")
            .then(res => {
                nombre_requetes++; // Incrémentation
                document.getElementById('nbRequetes').innerText = nombre_requetes;

                if (res.status === 200) {
                    return res.json();
                } 
                
                return Promise.reject("Code 204 - Pas d'impact");
            })
            .then(data => {
                nombre_impact++; // Incrémentation
                document.getElementById('nbImpacts').innerText = nombre_impact;
                document.getElementById('dernierImpact').innerText = data.date;

                dessinerImpact(data.impact);
            })
            .catch(error => console.warn(error));
    }, frequence);
}

// Fonction pour dessiner un impact sur le canvas
function dessinerImpact(impact) {
    let canvas = document.getElementById('monCanvas');
    let ctx = canvas.getContext("2d");

    ctx.fillStyle = impact.style;
    ctx.beginPath();
    ctx.arc(impact.x, impact.y, impact.r, 0, Math.PI * 2);
    ctx.fill();
}
