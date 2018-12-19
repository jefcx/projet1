/**
 * @name hello.NodeJS
 * @desc Juste pour les algorithmes
 * @author Aelion - Déc. 2018 - Jérémy BLANC
 * @version 1.0.0
 */

 /**
  * Retourne la valeur maximum entre deux valeurs
  * @param {*} currentMax Valeur maximum courant
  * @param {*} value Valeur lue dans le tableau
  * @eturn number La valeur la plus élevée entre currentValue et value
  */
function maximum(currentMax, value){
    if(value > currentMax){
        return value;
    }else{
        return currentMax;
    }
}

/**
  * Retourne la valeur minimale entre deux valeurs
  * @param {*} currentMin Valeur minimale courant
  * @param {*} value Valeur lue dans le tableau
  * @eturn number La valeur la plus élevée entre currentValue et value
  */
 function minimum(currentMin, value){
    if(value < currentMin){
        return value;
    }else{
        return currentMin;
    }
}

/**
  * Wrapper pour les fonctions minimum et maximum
  * @param {*} current Valeur courante
  * @param {*} value Valeur lue dans le tableau
  * @param {*} wantMax Variable optionnelle pour savoir si on cherche la valeur Max
  * @eturn maximum ou minimum
  */
function minOrMax(current, value, wantMax = true){
    
    // Si on cherche le maximum
    if(wantMax){
        return maximum(current, value);
    }    
    // Si on recherche le minimum
    return minimum(current, value);    
}

/**
 * @var array
 * Tableau de nombres entiers
 */
const tablo = [25, 50, 256, 312, 3, 22, 8];

/**
 * @var number
 * Nombre maxIs
 */
let maxIs = tablo[0];

/**
 * @var number
 * Nombre minIs
 */
let minIs = tablo[0];

/**
 * @var number
 * Somme
 */
let somme = 0;

// Boucle de parcours du tableau
for (let i = 0; i < tablo.length; i++) {
    
    // Si l'indice est supérieur à 0
    if( i > 0 ){
       
       maxIs = minOrMax(maxIs, tablo[i]); // Si pas de 3eme argument, il considère que c'est à true
       minIs = minOrMax(minIs, tablo[i], false);
    }

    // Cumul du tableau
    somme = somme + tablo[i];
}

// Sortie Console
console.log('Le nombre max est : ' + maxIs + '.');
console.log('Le nombre min est : ' + minIs + '.');
console.log('La somme du tableau est : ' + somme + '.');