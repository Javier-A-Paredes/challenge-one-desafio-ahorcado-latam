let ingresarNuevaPalabra = document.querySelector('.agregar-palabra');
let guardarNuevaPalabra = document.querySelector('.guardar-nueva-palabra');
let inputNuevaPalabra = document.querySelector('.input-nueva-palabra');
let botonCancelar = document.querySelector('.cancelar')

function validarInput(texto) {
    const restricciones = /[a-z]/;
    return restricciones.test(texto);
}

function mostrarError(err){
    if (err) {
        document.querySelector('.aviso-texto').classList.remove('invisible')
    } else {        
        document.querySelector('.aviso-texto').classList.add('invisible')
    }
}

ingresarNuevaPalabra.addEventListener('click', e => {
    pantallaInicio.classList.add('oculto');
    pantallaNuevaPalabra.classList.remove('oculto');
})

guardarNuevaPalabra.addEventListener('click', e => {
    if (inputNuevaPalabra.value.length > 1 && validarInput(inputNuevaPalabra.value)) {
        palabras.push(inputNuevaPalabra.value.toUpperCase())        
        pantallaNuevaPalabra.classList.add('oculto')        
        mostrarError(false)
        comienzoJuego();
        inputNuevaPalabra.value = ''
    } else {
        mostrarError(true)
        errorInput(validarInput(inputNuevaPalabra.value))
        inputNuevaPalabra.value = '';
    }
})

botonCancelar.addEventListener('click', e=>{
    inputNuevaPalabra.value= ''
    location.reload()
})