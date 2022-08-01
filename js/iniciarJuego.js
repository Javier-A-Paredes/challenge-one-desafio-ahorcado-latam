let botonInicio = document.querySelector('.iniciar-juego');
let pantallaInicio = document.querySelector('.pantalla-inicio');
let pantallaJuego = document.querySelector('.pantalla-juego');
let pantallaNuevaPalabra = document.querySelector('.pantalla-nueva-palabra');
let reiniciarPartida = document.querySelector('.reiniciar-partida');
let botonRendirse = document.querySelector('.desistir')
let limiteErrores = 9;
let estadoJuego = false

function comienzoJuego() {
    pantallaInicio.classList.add('oculto');
    pantallaJuego.classList.remove('oculto');
    estadoJuego = true
    limiteErrores = 9
    dibujarLineas(elegirPalabra())
    recibirInputs()    
}

botonInicio.addEventListener('click', e => {
    comienzoJuego();
})

reiniciarPartida.addEventListener('click', e => {
    location.reload();    
})

botonRendirse.addEventListener('click', e => {
    location.reload();    
})



