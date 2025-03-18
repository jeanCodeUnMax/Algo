//* Exercice 14 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche sa suite de Fibonacci jusqu'à ce nombre. *//
// Dans les faits ma fonction était déjà généralisée, je l'ai modifié 
function Fibonacci() {
    let nombre = parseFloat(prompt("Nombre dont vous souhaiteriez afficher la suite de Fibonacci.\nInitialiser à 0 pour la suite classique Fibonacci : ")); // Mettre 0 ou 1 reviens à faire la suite de Fibonacci
    let limite = parseFloat(prompt("Nombre déterminant la limite de cette suite.\nNombre jusqu'auquel vous souhaiteriez que la suite s'arrête sans le dépasser :")); 
    let i = 1; // Le seul réel changement entre Fibo et Lucas

    let Fibonacci = [nombre]; // Nous mettons le nombre en F(0)

    while (nombre <= limite) {
        let x = nombre + i; 
        if (x > limite) { // On rajoute cette condition pour pouvoir sortir de la boucle si le résultat est au dessus de notre limite
            break; 
        }
        Fibonacci.push(x); // On push le résultat de notre calcul initial 
        i = nombre; // i = x + nombre - On échange les différentes valeurs pour faciliter nos calculs (Donc là i prend la valeur de nombre) ce qui échange notre calcul
        nombre = x; // Same here, notre boucle s'effectue jusqu'à ce que le calcul atteingne la limite de l'utilisateur
    } // In fine  x = nombre + i pour par la suite faire i = x + nombre et réitérer avec nombre = i + x, nous avons notre boucle
    return Fibonacci;
}

let result = Fibonacci();
alert("La suite de Fibonacci de ce nombre est :" + result.join(", "));



/*while (i > limite || nombre > limite || x > limite) {
    i = x + nombre
    Fibonacci.push(i)
    nombre = i + x
    Fibonacci.push(nombre)
    x = nombre + i
    Fibonacci
} F(0) = nombre
F(1) = i */
/*  if (nombre === 0) {
    nombre = 1
    } Inutile dès lors que nous devons initialiser nombre à 0 pour la suite classique Fib*/


