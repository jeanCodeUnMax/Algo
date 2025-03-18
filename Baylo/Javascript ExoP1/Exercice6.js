//*Exercice 6 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche sa factorielle. *//
function factorielle() {
    let nombre = parseFloat(prompt("Nombre :"));
    let facto = 1; //On commence par 1 jusqu'au nombre dans la boucle


for (let i = 1; i <= nombre; i++) { // On multiplie jusqu'à la valeur du nombre en ayant commencé par 1, le résultat est facto
    facto = facto*i; // facto *= i
    }
    return facto;
}

let result = factorielle();
alert("La factorielle de ce nombre est " + result);

