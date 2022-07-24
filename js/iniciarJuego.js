let iniciarJuego = document.querySelector('.iniciar-juego');
let pantallaInicio = document.querySelector('.pantalla-inicio');
let pantallaJuego = document.querySelector('.pantalla-juego');
let pantallaNuevaPalabra = document.querySelector('.pantalla-nueva-palabra');;


iniciarJuego.addEventListener('click', e => {
    pantallaInicio.classList.add('oculto');
    pantallaJuego.classList.remove('oculto');
})