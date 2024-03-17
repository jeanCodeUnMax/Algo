//* Exercice 12 : Écrire un algorithme qui demande à l'utilisateur de saisir deux nombres et qui affiche le plus grand commun diviseur de ces deux nombres. *//
function diviseurplus() {
    let nombre1 = parseFloat(prompt("Nombre pour donner son pgdc :")); 
    let nombre2 = parseFloat(prompt("Nombre pour donner son pgdc :"));
    let pgcd = 1

    for (let i = 1; i <= nombre1 && i <= nombre2; i++ ){
    if (nombre1 % i === 0 && nombre2 % i === 0 ){
        pgcd = i}
    }
    return pgcd
}

let result = diviseurplus();
alert("Le pgcd de ces nombres est " + result )