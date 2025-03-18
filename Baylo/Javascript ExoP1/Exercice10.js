//* Exercice 10 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche son pgdc avec 10.  *//
function diviseurplus() {
    let nombre = parseFloat(prompt("Nombre pour donner son pgdc avec 10 :")); 
    let pgcd

    for (let i = 1; i <= nombre; i++ ){
    if (nombre % i === 0 && 10 % i === 0 ){
        pgcd = i}
    }
    return pgcd
}

let result = diviseurplus();
alert("Le pgcd de 10 avec ce nombre est " + result )