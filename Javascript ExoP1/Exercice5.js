//*Exercice 5 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche la table de multiplication de ce nombre.*//
function multiplication() {
    let nombre = parseFloat(prompt("Nombre pour obtenir sa table de multiplication :"));
    let tablemulti = [];

    for (let i = 1; i <= 10; i++) {
    let calcul = nombre * i;
    tablemulti.push(nombre + " * " + i + " = " + calcul); // On peut mettre du texte dans les tableaux 
    }
    return tablemulti;
}

let result = multiplication();
alert(" Table de multiplication du nombre \n" + result.join('\n')); // Join permet de joindre un élément au résultat, ici représenté par un retour à la ligne