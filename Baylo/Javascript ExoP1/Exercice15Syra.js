//* Exercice 15 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche sa suite de Syracuse jusqu'à ce nombre. *//
function Syracuse(){
    let nombre = parseFloat(prompt("Nombre entier dont vous souhaiteriez afficher la suite de Syracuse : "));
    let Syracuse = [];
    Syracuse.push(nombre);

    while (nombre !== 1){ // Tant que x n'est pas égal à 1 car la boucle est 4-2-1 (Cycle trivial)
        if (nombre % 2 === 0) {// S'il est divisable par 2 c'est qu'il est pair
        nombre = nombre / 2
            } else { // Sinon c'est qu'il est impair
        nombre = nombre * 3 + 1
        }   
    Syracuse.push(nombre);
    }
return Syracuse;
} 
let result = Syracuse();
alert("La suite de Syracuse de ce nombre est " + result.join(", "));