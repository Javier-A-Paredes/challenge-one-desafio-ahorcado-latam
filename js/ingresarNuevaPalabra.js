let ingresarNuevaPalabra = document.querySelector('.agregar-palabra');
let guardarNuevaPalabra = document.querySelector('.guardar-nueva-palabra"');

ingresarNuevaPalabra.addEventListener('click', e => {    
    pantallaInicio.classList.add('oculto');
    pantallaNuevaPalabra.classList.remove('oculto');    
})



