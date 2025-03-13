document.addEventListener("DOMContentLoaded", () => {
 const maDiv = document.getElementById("maDiv");
 const btnGauche = document.getElementById("btnGauche");
 const btnStop = document.getElementById("btnStop");
 const btnDroite = document.getElementById("btnDroite");

 const pas = 1;
 const delai = 10;
 let tm;

 console.log((new Date()).toLocaleTimeString());

 btnStop.addEventListener("click", () => {
     clearInterval(tm);
 });

 btnDroite.addEventListener("click", () => {
     clearInterval(tm);
     tm = setInterval(() => {
         maDiv.style.left = `${maDiv.offsetLeft + pas}px`;
     }, delai);

     setTimeout(() => {
         clearInterval(tm);
     }, 2000);
 });

 btnGauche.addEventListener("click", () => {
     clearInterval(tm);
     tm = setInterval(() => {
         maDiv.style.left = `${maDiv.offsetLeft - pas}px`;
     }, delai);
 });
});
