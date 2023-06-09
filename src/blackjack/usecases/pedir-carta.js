
/**
 * Esta funcion sirve para pedir una carta
 * @param {Array<String>} deck Es un array de string
 * @returns {String} Retorna una carta 
 */

export const pedirCarta = (deck) => {


    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}