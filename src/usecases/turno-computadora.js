import { pedirCarta, valorCarta, crearCartaHtml } from './index';
import Swal from 'sweetalert2';
import 'animate.css';

/**
 * Turno de la computadora 
 * @param {Number} puntosMinimos Puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML Elemento HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora Elemento HTML para mostrar cartas
 * @param {Array<String>} deck 
 */

 export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if( !puntosMinimos ) throw new Error ('Puntos minimos es necesario');
    if( !puntosHTML ) throw new Error ('Argumento puntosHTML es necesario')

     let puntosComputadora = 0; 

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        
        const imgCarta = crearCartaHtml(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            Swal.fire({
                position: 'center',
                color: 'white',
                background: 'black',
                title: 'Nadie gana 🤝',
                text: 'Empataron!',
                showConfirmButton: true,
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
              })
        } else if ( puntosMinimos > 21 ) {
            Swal.fire({
                position: 'center',
                color: 'white',
                background: 'black',
                title: 'Computadora gana 🏆',
                text: 'Lo siento, perdiste',
                showConfirmButton: true,
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
              })
        } else if( puntosComputadora > 21 ) {
            Swal.fire({
                position: 'center',
                color: 'white',
                background: 'black',
                title: 'Jugador gana 🏆',
                text: 'Felicitaciones has ganado!!',
                showConfirmButton: true,
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  } 
              })
        } else {
            Swal.fire({
                position: 'center',
                color: 'white',
                background: 'black',
                title: 'Computadora gana 🏆',
                text: 'Lo siento, la computadora te ganó!',
                showConfirmButton: true,
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
              })
        }
    }, 300 );
}