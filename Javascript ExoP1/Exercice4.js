// Exercice 4 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche tous les nombres premiers compris entre 1 et ce nombre.

function nombrePremier() {
    let nombre = parseFloat(prompt("Nombre :"));
    let nombrePremier = []; 


    for (let i = 2; i <= nombre; i++) {
        if (verificationPremier(i)) { // Impossible de mettre de boucle for dans if car réponse booléenne 
            nombrePremier.push(i);
        }
    }

    return nombrePremier;
}

function verificationPremier(nombre) { // On utilise l'argument nombre ayant été def dans ma fonction nombrePremier, cela me permet de manipuler cette donnée

    for (let i = 2; i < nombre; i++) {
        if (nombre % i === 0) {
            return false; // le nombre n'est pas premier SI elle trouve un autre diviseur
        }
    }
    return true; // dans le cas contraire on renvoi un un true 
}


let result = nombrePremier();
alert(" Les nombres premiers compris entre 1 et ce nombre sont " + result);
