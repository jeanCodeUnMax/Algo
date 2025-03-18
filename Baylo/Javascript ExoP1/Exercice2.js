/**Exercice 2 : Écrire un algorithme qui demande à l'utilisateur de saisir deux nombres et qui affiche leur somme.**/

function somme() {
    let nombre1 = prompt("Le premier nombre :");
    let nombre2 = prompt("Le deuxième nombre :");

    nombre1 = parseFloat(nombre1); // Convertir les chaînes de caractères en nombres
    nombre2 = parseFloat(nombre2);
    
    let resultat = nombre1 + nombre2;
    return resultat;
}

let result = somme();
alert("La somme des nombres est : " + result);

