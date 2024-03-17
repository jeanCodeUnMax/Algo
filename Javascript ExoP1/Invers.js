//* Exercice 7 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche son inverse. *// 
//*
function inverse() {
    let nombre = parseFloat(prompt("Nombre pour donner son inverse :"));
    calcul = 1 / nombre
    return calcul
    }
let result = inverse(); 
alert("L'inverse de ce nombre est " + result )

//Ce n'était pas ce qui était demandé ex:321 = 123