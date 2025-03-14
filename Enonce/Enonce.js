/** Exercice 1 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche son carré.**/
function carre() {

    let number = parseFloat(prompt('Entrez un nombre et je vous donne son carré'));
    let carre = number*number;
    return alert('le carré de ' + number + ' est '+ carre);
}
/**Exercice 2 : Écrire un algorithme qui demande à l'utilisateur de saisir deux nombres et qui affiche leur somme.**/

function addition() {

    let number1 = parseFloat(prompt('Entrez le premier nombre a additionner'));
    let number2 = parseFloat(prompt('Entrez le deuxieme nombre a additioner'));
    let result = number1 + number2;
    return alert('le résultat de l\'addition est ' + result);
}

function additionAlt() {

    let tableau = prompt('Entrez les deux nombres a additioner séparé par une virgule');
    let nombres = tableau.split(',');
    let result = parseFloat(nombres[0]) + parseFloat(nombres[1]);
    return alert('le résultat de l\'addition est ' + result);
    
}

/**Exercice 3 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche tous les nombres pairs compris entre 1 et ce nombre.**/

function pairs() {
    let number = parseFloat(prompt('Entrez un nombre, je vous donne tout les nombre pair entre 1 et ce nombre'));
    let tableau = [];
    let i = 1;
    while (i < number) {
        if (i % 2 === 0 ) {
            tableau.push(i);
        }
        i++
    }

    return alert(tableau);
}

/**Exercice 4 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche tous les nombres premiers compris entre 1 et ce nombre.**/

function premier() {
    
    let number = parseFloat(prompt('Entrez un nombre'));
    let tableauPremier = [];
    for(let i = 2; i <= number; i++) {
        if (verifPremier(i)){
            
            tableauPremier.push(i)
        }
    }

    return alert(tableauPremier);
    }


function verifPremier(number) {
for (let i = 2; i < number; i++) {
    if (number % i === 0 ) {
        return false;
    }}
    return true;
}

/**Exercice 5 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche la table de multiplication de ce nombre.**/

function table() {
    let number = parseFloat(prompt('Nombre :'))
    let tableau = [];

    for(let i = 1; i <= 10; i++) {
        let result = i * number
        tableau.push(i + 'x' + number + ' = '  + result)
    }
    console.log(tableau.join("\n"));
    return tableau;
}

/**Exercice 6 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche sa factorielle.**/

function factorielle() {

    let number = parseFloat(prompt('Nombre :'));
    let result;
    
    if(number === 1 || number === 0) {

        return 1;
    }
    
    calculfactorielle(number);

    console.log(`{la factorielle de ${number} est ${result}`);
}

function calculfactorielle(number) {
    let result = 1;

    for (let i = 1; i <= number; i++) {

        result *= i;
        
    }

    return alert(result);
}

/**Exercice 7 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche son inverse.**/

function inverse() {
    let number = parseFloat(prompt('Nombre :'));

    result = number * -1;
    return result;
}

/**Exercice 8 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche son plus grand diviseur.**/

function bigDivide() {
    number = parseFloat(prompt('Entrez un nombre je vous donne son plus grand diviseur')) 
    let diviseur = 0 
    for (i= 2; i < number; i++) {

        if (number % i === 0) {
            if (i > diviseur) {
                diviseur = i;
            }
            }
    }

    return alert(`le plus grand diviseur est ${diviseur}`)
}

/**Exercice 9 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche son plus petit diviseur.**/

function diviseurMoins() {
    let number = parseFloat(prompt('Entrez un nombre je vous donne son plus petit diviseur')) 
    let diviseur = 0;
    for (i= 2; i <= number; i++) {

        if (number % i === 0) {
            
                diviseur = i;
                return alert(`Le plus petit divisieur de ${number} est ${diviseur}`);
            }
    }

}

/**Exercice 10 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche son pgcd avec 10.**/

function pgDiviseurDix() {
    number = parseFloat(prompt('Entrez un nombre, je vous donne son plus grand diviseur commun avec 10')) 
    let pgDiviseur = 0 
    if(number === 1 || number === 0) {

        return console.log('pas de diviseur commun')
    }
    for (i= 2; i <= number; i++) {

        if (number % i === 0 && 10 % i === 0) {
                pgDiviseur = i;
            
            }
    }

    return alert(`le plus grand diviseur commun entre ${number} et 10 est ${pgDiviseur}`);
}

/**Exercice 11 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche son ppcm avec 10.**/

function petitMultiple() {
    let nombre = parseFloat(prompt("Entrez un nombre, je vous donne son plus petit multiple commun avec 10")); 
    let pgcd = 1

    for (let i = 1; i <= nombre; i++ ){
        if (nombre % i === 0 && 10 % i === 0 ){

            pgcd = i
        }
    }
    ppcm = (nombre*10)/pgcd;
    return alert(`Le plus petit commun multiple de ${nombre} est ${ppcm}`);
    
}

/**Exercice 12 : Écrire un algorithme qui demande à l'utilisateur de saisir deux nombres et qui affiche le plus grand commun diviseur de ces deux nombres.**/

function pgDiviseurNumber() {
    number = prompt('Entrez deux nombre séparé par une virgule, je vous donne leur plus grand diviseur commun de ces 2 nombres')
    let numbers = number.split(',');
    let number1 = parseFloat(numbers[0]);
    let number2 = parseFloat(numbers[1]);
    let pgDiviseur = 1 ;

    number = Math.min(number1,number2);   
    
    for (i= 2; i <= number; i++) {

        if (number1 % i === 0 && number2 % i === 0) {
                pgDiviseur = i;
            
            }
        }
    return alert(`le plus grand diviseur commun entre ces deux nombres est ${pgDiviseur}`);
}

/**Exercice 13 : Écrire un algorithme qui demande à l'utilisateur de saisir deux nombres et qui affiche le plus petit commun multiple de ces deux nombres.**/

function ppMultiple() {
    number = prompt('Entrez deux nombre séparé par une virgule, je vous donne leur plus petit multiple commun')
    let numberTable = number.split(',').map(num => parseInt(num.trim()));
    let number1 = numberTable[0];
    let number2 = numberTable[1];
    let ppcm = Math.max(number1,number2) ;

    while (ppcm % number1 !== 0 || ppcm % number2 !== 0){
        
        ppcm++
    }

            return alert(`le plus petit multiple commun entre ces deux nombres est ${ppcm}`);
}

/**Exercice 14 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche sa suite de Fibonacci jusqu'à ce nombre.**/

function Fibonacci() {
    number = parseFloat(prompt('Entrez un nombre, je vous donne sa suite de fibonacci')) ;
    let suiteFibo = [0,1];
    let i = 2;

    while (suiteFibo[i-1] < number) {
        
        suiteFibo[i] = suiteFibo[i-1] + suiteFibo[i-2];


        i++;
    }
    suiteFibo.pop();
    return alert(`la suite de fibonacci pour votre nombre est ${suiteFibo}`);

}

/**Exercice 15 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche sa suite de Syracuse jusqu'à ce nombre.**/

function Syracuse() {
    let number = parseFloat(prompt('Entrez un nombre, je vous donne sa suite de Syracuse')) ;
    let Syracuse = [number];//number est le premier nombre entré dans le tableau (comme Syracuse[0] = number)
    let SyraEnd = number; 

    while (SyraEnd !== 1) {

        if(SyraEnd % 2 === 0) {
            SyraEnd = SyraEnd / 2;
            
        }
        
        else {
            SyraEnd = SyraEnd * 3 + 1;
            
        }
        Syracuse.push(SyraEnd);
    }

    alert(`La suite de Syracuse pour votre nombre est : ${Syracuse}`);
}

/**Exercice 16 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche sa suite de Collatz jusqu'à ce nombre.**/

 // PAREIL QUE SYRACUSE? **/

/**Exercice 17 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche sa suite de Lucas jusqu'à ce nombre.**/

function suiteLucas() {
    number = parseFloat(prompt('Entrez un nombre, je vous donne sa suite de Lucas')) ;
    let suiteLucas = [2,1];
    let i = 2;

    while (suiteLucas[i-1] < number) {

        suiteLucas[i] = suiteLucas[i-1] + suiteLucas[i-2];

        i++;
    }
    suiteLucas.pop(); //supprime l'element qui dépasse la limite
    return alert(`la suite de Lucas pour votre nombre est ${suiteLucas}`);

}

/**Exercice 18 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche sa suite de Pell jusqu'à ce nombre.**/

function suitePell() {
    number = parseFloat(prompt('Entrez un nombre, je vous donne sa suite de Pell')) ;
    limite = parseFloat(prompt('donnez moi le nombre max a ne pas dépasser'));
    let suitePell = [0,1];
    let i = 2;

    while (suitePell[i-1] < limite) {

        suitePell[i] = suitePell[i-1] * 2 + suitePell[i-2];

        i++;
    }
    suitePell.pop();
    return alert(`la suite de Pell pour votre nombre est ${suitePell}`);

}

/**Exercice 19 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche sa suite de Fibonacci généralisée jusqu'à ce nombre.**/

/**Exercice 20 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche sa suite de Lucas généralisée jusqu'à ce nombre.**/
