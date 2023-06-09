
/**
 * Crea la imagen de la carta
 * @param {String} carta
 * @returns {HTMLImageElement} Retorna la imagen de la carta 
 */

 export const crearCartaHtml = ( carta ) => {

    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    

    return imgCarta

}