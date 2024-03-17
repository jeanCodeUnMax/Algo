/* Exercice 18 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche sa suite de Pell jusqu'à ce nombre. */

function Pell() { // Reprise de la fonction Fibonacci en changeant les calculs
    let nombre = parseFloat(prompt("Nombre dont vous souhaiteriez afficher la suite de Fibonacci.\nInitialiser à 0 pour la suite classique Pell : ")); 
    let limite = parseFloat(prompt("Nombre déterminant la limite de cette suite.\nNombre jusqu'auquel vous souhaiteriez que la suite s'arrête sans le dépasser :"));
    let i = 1; // Même initialisation que dans celle de Fibo P(1) = nombre P(0) = i
    
    let Pell = [nombre]; // On peut initialiser des variables directement dans le tableau, on ne met que la var nombre pour afficher correctement la suite "0,1,2,5,12,29,70,169 etc."


    while (nombre <= limite) {
        let x = 2 * nombre + i; // On change juste la première valeur avec 2* 
        if (x > limite) { 
            break; 
        }
        Pell.push(x); // On push le résultat de notre calcul initial 
        i = nombre; // 
        nombre = x; // Same here, notre boucle s'effectue jusqu'à ce que le calcul atteingne la limite de l'utilisateur
    }
    return Pell;
}

let result = Pell();
alert("La suite de Pell de ce nombre est " + result.join(", "));

