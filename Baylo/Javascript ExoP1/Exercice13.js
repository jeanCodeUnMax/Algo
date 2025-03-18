//* Exercice 13 : Écrire un algorithme qui demande à l'utilisateur de saisir deux nombres et qui affiche le plus petit commun multiple de ces deux nombres. *//
function diviseurplus() {
    let nombre1 = parseFloat(prompt("Nombre pour donner son ppcm :")); 
    let nombre2 = parseFloat(prompt("Nombre pour donner son ppcm :"));
    let pgcd = 1

    for (let i = 1; i <= nombre1 && i <= nombre2; i++ ){
        if (nombre1 % i === 0 && nombre2 % i === 0 ){
            pgcd = i}
    }
    ppcm = (nombre1*nombre2)/pgcd 
    return ppcm
}


let result = diviseurplus();
alert("Le pgcd de ces nombres sont " + result )