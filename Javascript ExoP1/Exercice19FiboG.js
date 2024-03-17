/* Exercice 19 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche sa suite de Fibonacci généralisée jusqu'à ce nombre. */
// Suite récurrente linéaire d'ordre deux nombres. Sert à chercher le nombre d'or
function Fibonacci() {
    let nombre = parseFloat(prompt("Le premier nombre dont vous souhaiteriez afficher la suite de Fibonacci.")); // Plus on cherche le nombre d'or avec des nombres élevés plus le nombre d'or sera précis ! 
    let nombre2 = parseFloat(prompt("Le deuxième nombre dont vous souhaiteriez afficher la suite de Fibonacci."));
    let limite = parseFloat(prompt("Nombre déterminant la limite de cette suite.\nNombre jusqu'auquel vous souhaiteriez que la suite s'arrête sans le dépasser :")); // Mais plus le calcul sera complexe..

    let Fibonacci = [nombre,nombre2]; // Nous mettons le nombre en F(0) et affichons dans la suite généralisée le chiffre F(1)

    while (nombre <= limite) { // Toujours le même principe de calcul
        let x = nombre + nombre2; 
        if (x > limite) { // On rajoute cette condition pour pouvoir sortir de la boucle si le résultat est au dessus de notre limite
            break; 
        }
        Fibonacci.push(x); // On push le résultat de notre calcul initial
        nombre2 = nombre; // i = x + nombre - On échange les différentes valeurs pour faciliter nos calculs (Donc là i prend la valeur de nombre) ce qui échange notre calcul
        nombre = x; // Same here, notre boucle s'effectue jusqu'à ce que le calcul atteingne la limite de l'utilisateur
    } // In fine  x = nombre + nombre2 pour par la suite faire nombre2 = x + nombre et réitérer avec nombre = nombre2 + x
    return Fibonacci;
}

let result = Fibonacci();
alert("La suite de Fibonacci généralisée de ces nombres est :\n " + result.join("\n"));

// J'ai juste eu à remplacer la valeur i par la var nombre2 ayant un prompt