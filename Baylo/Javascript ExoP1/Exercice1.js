/** Exercice 1 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche son carré.**/

function nombre() {
    let nombre = prompt("Nombre :");
    nombre = parseFloat(nombre); // Convertion de la chaine de cara en nombre
    let carre = nombre ** 2;
    return carre;
}

let result = nombre();
alert(" Le carré du nombre est : " + result);

