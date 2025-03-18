//* Exercice 9 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche son plus petit diviseur (Autre que 1) *//
function diviseurmoins() { 
    let nombre = parseFloat(prompt("Nombre pour donner son plus petit diviseur :")); // on cherche en réalité le plus petit diviseur propre
    let diviseurP = 2; // On start à 2 pour autre que 1 
    
    while (nombre % diviseurP !== 0) { // On incrémente jusqu'à ce que la condition soit respectée
        diviseurP++;
    }
    
    return diviseurP;
}

let result = diviseurmoins();
alert("Le plus petit diviseur de ce nombre est " + result )