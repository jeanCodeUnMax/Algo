/* Exercice 20 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche sa suite de Lucas généralisée jusqu'à ce nombre. */
function Lucas() {
    let nombre = parseFloat(prompt("Premier nombre dont vous souhaiteriez afficher la suite de Lucas.\nInitialisez à 1 pour la suite classique Lucas :"));
    let nombre2 = parseFloat(prompt("Deuxième nombre dont vous souhaiteriez afficher la suite de Lucas."))
    let limite = parseFloat(prompt("Nombre déterminant la limite de cette suite. \nNombre jusqu'auquel vous souhaiteriez que la suite s'arrête sans le dépasser : ")); // C'est la partie ou l'utilisateur va pouvoir demander le nombre
     // En réalité l'initialisation de la var nombre se fait sur L1 et non L0 si nous souhaitons créer la suite avec d'autres nombres

    let Lucas= [nombre,nombre2]; // Pour afficher les variables précédemment initialisées dans le tableau on commence par le nombre car la formule initiale est L(0) = 2 /  L(1) = 1 / On viens modifier L(1) ici


    while (nombre <= limite) {
        let x = nombre + nombre2; 
        if (x > limite) { // On rajoute cette condition pour pouvoir sortir de la boucle si le résultat est au dessus de notre limite
            break; 
        }
        Lucas.push(x); // On push le résultat de notre calcul initial
        nombre2 = nombre; // i = x + nombre - On échange les différentes valeurs pour faciliter nos calculs (Donc là i prend la valeur de nombre) ce qui échange notre calcul
        nombre = x; // Same here, notre boucle s'effectue jusqu'à ce que le calcul atteingne la limite de l'utilisateur
    } // In fine  x = nombre + i pour par la suite faire i = x + nombre et réitérer avec nombre = i + x, nous avons notre boucle
    
    return Lucas;
}

let result = Lucas();
alert("La suite de Lucas de ce nombre est :" + result.join(", "));