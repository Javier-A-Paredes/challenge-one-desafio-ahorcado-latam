let botonInicio = document.querySelector('.iniciar-juego');
let pantallaInicio = document.querySelector('.pantalla-inicio');
let pantallaJuego = document.querySelector('.pantalla-juego');
let pantallaNuevaPalabra = document.querySelector('.pantalla-nueva-palabra');
let reiniciarPartida = document.querySelector('.reiniciar-partida');
let limiteErrores = 9;

function comienzoJuego() {
    pantallaInicio.classList.add('oculto');
    pantallaJuego.classList.remove('oculto');

    limiteErrores = 9
    dibujarLineas(elegirPalabra())
}
botonInicio.addEventListener('click', e => {
    comienzoJuego();
})

reiniciarPartida.addEventListener('click', e => {
    location.reload();    
})





