let ingresarNuevaPalabra = document.querySelector('.agregar-palabra');

ingresarNuevaPalabra.addEventListener('click', e => {
    console.log('CLICK NUEVA PALABRA')
    pantallaInicio.classList.add('oculto');
    pantallaNuevaPalabra.classList.remove('oculto');
    
})