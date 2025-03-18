//* Exercice 16 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche sa suite de Collatz jusqu'à ce nombre. *//
 // C'est en réalité le même exercice que le numéro 15 mais dans cette fonction on pourra cependant calculer la durée de vol (Longueur de calcul avant cycle trivial) et l'altitude max (Nombre max)

let maxaltitude = 0; // On initialise l'altitude maximale en dehors de notre fonction car portée de la var en bloc
let duréevol = 0 // Initialisée à 0 pour donner une var nombre
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

    if (nombre > maxaltitude) { // On affecte le nombre à notre variable si elle est supérieure 
        maxaltitude = nombre;
        }
    duréevol++ // On incrémente +1 comme compteur pour la durée de vol (Pour chaques réitérations de boucle)
    } 
    return Syracuse;
}

let result = Syracuse();
alert("La suite de Syracuse de ce nombre est " + result.join(", ") + ".\nL'altitude maximale est de " + maxaltitude + " .\nLa durée de vol est de " + duréevol + ".");
