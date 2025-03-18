//* Exercice 7 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche son inverse. *//

function inverse() {
    let nombre = parseFloat(prompt("Nombre à inverser :"));
    let nombrechaine = nombre.toString(); // Création de la chaîne de caractère pour pouvoir la manipuler à l'aide des autres méthodes
    let inversement = nombrechaine.split('').reverse().join(''); // On divise la chaîne en tableau pour inverser l'ordre et la réassembler en chaîne par la suite
    // '' permet de faire en sorte que chaque élément dans le tableau devienne des éléments disctints en premier lieu et par la suite la réassembler en élément de réassemblage (chaine vide)
    return inversement;
  }
let result = inverse(); 
alert("Ce nombre à l'inverse donne " + result )

