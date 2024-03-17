/**Exercice 3 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche tous les nombres pairs compris entre 1 et ce nombre.**/
function pairs() {
    let nombre = parseFloat(prompt("Nombre :")); // Appliquer le parseFloat directement au prompt
    
    let nombrepairs = []; // On crée le tableau qui va stocker nos nombres pairs
    
    for (let i = 1; i <= nombre; i++) {
        if (i % 2 === 0) {
            nombrepairs.push(i);
        }
    }
    return nombrepairs;
}

let result = pairs();
alert(" Les nombres pairs compris entre 1 et ce nombre sont " + result);


