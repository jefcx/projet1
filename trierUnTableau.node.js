/**
 * @name trierUnTableau
 * @desc Comment trier un tableau
 * @author Aelion - Déc. 2018 - Jérémy BLANC
 * @version 1.0.0
 */

 /**
 * @var number
 * save, permet de cloner la valeur d'un indice du tableau
 */
let save = 0;

/**
 * @var bool
 * dring, permet de continuer à parcourir le tableau
 */
let dring = false;

/**
 * @var array
 * Tableau de nombres entiers
 */
const tablo = [25, 50, 256, 312, 3, 22, 8, 50];

// Boucle permettant de reparcourir plusieurs fois le tableau
for(let i = 0; i < tablo.length; i++) {
    
    // Remise à false
    dring = false;

    // On compare deux valeurs du tableau
    for(let ii = i; ii < tablo.length; ii++){
        
        if(tablo[ii] > tablo[ii + 1]){
            
            a = tablo[ii];
            tablo[ii] = tablo[ii + 1];
            tablo[ii + 1] = a;
            
            // Si à true, cela veut dire qu'on a trié le tableau
            dring = true;
        }
    }

    // Cela permet de reboucler le tableau car i = i - 1
    if(dring == true){
        i--;
    }
}

// Affiche le tableau
console.log(tablo);




