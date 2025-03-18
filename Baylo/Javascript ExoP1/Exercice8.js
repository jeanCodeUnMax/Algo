//* Exercice 8 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche son plus grand diviseur *//
function diviseurplus() {
    let nombre = parseFloat(prompt("Nombre pour donner son plus grand diviseur :")); // on cherche en réalité le plus grand diviseur propre
    let diviseurG = 1 //On initialise à 1, la même méthode que pour la facto

    for (let i = 1; i < nombre; i++) { // Pas de <= sinon le plus grand diviseur sera initialisé comme étant le nombre lui-même
        if (nombre % i === 0) {
            diviseurG = i;
        }
    }
    return diviseurG;
}


let result = diviseurplus();
alert("Le plus grand diviseur de ce nombre est " + result )