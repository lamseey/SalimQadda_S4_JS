let now;
let actualHeure;
let actualMinutes;
let seconds;
let taches;
let checking;
let heures;
let minutes;
let descriptions;
const exTache = document.getElementById('exTache').innerHTML;
const gestionnaire = document.getElementById('Gestionnaire');
function updateClock(){
    now = new Date();
    actualHeure = now.getHours();
    actualMinutes = now.getMinutes();
    seconds = now.getSeconds();
    document.getElementById('clock').textContent = "Il est actuellement: " + String(actualHeure).padStart(2, '0') + ":" + String(actualMinutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');
    taches = document.getElementsByClassName('uneTache');
    checking = document.getElementsByClassName('checking');
    heures = document.getElementsByClassName('heure');
    minutes = document.getElementsByClassName('minute');
    descriptions = document.getElementsByClassName('description');
    if (seconds === 0){
        for (let i = 1; i < taches.length + 1; i++) {
            if (Number(heures[i].value) === actualHeure &&
                Number(minutes[i].value) === actualMinutes &&
                checking[i].checked) {
                    window.alert(descriptions[i].value);
            }
        }
    }
}
setInterval(updateClock, 1000);
updateClock();


function ajouterTache(){
    let tache = document.createElement('li');
    tache.innerHTML = exTache;
    tache.className = "uneTache";
    gestionnaire.appendChild(tache);
    const deletions = document.getElementsByClassName('deletion');
    deletions[deletions.length - 1].addEventListener('click', function (){
        document.getElementById('Gestionnaire').removeChild(tache);
    });
    updateClock();
}