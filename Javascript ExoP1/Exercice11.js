//* Exercice 11 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche son ppcm avec 10. *//
function petitmultiple() {
    let nombre = parseFloat(prompt("Nombre pour donner son ppcm avec 10 :")); 
    let pgcd = 1

    for (let i = 1; i <= nombre; i++ ){
        if (nombre % i === 0 && 10 % i === 0 ){
            pgcd = i}
    }
    ppcm = (nombre*10)/pgcd 
    return ppcm
}

let result = petitmultiple();
alert("Le ppcm de 10 avec ce nombre est " + result )

