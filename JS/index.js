function affichZero(nombre) {

    return nombre < 10 ? '0' + nombre : nombre;

}

function dateEtHeure() {

    const infos = new Date();
     
    document.getElementById('heure_exacte').innerHTML = ' ' + affichZero(infos.getHours()) + 'H' + affichZero(infos.getMinutes());
    
}
     
window.onload = function() {

    setInterval("dateEtHeure()", 100);

};