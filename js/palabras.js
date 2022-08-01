let palabras = ['ALURA', 'AHORCADO', 'ORACLE', 'HTML', 'CSS', 'JAVASCRIPT'];
let palabraSecreta = '';

function elegirPalabra() {
    let palabra = palabras[Math.floor(Math.random()*palabras.length)]      
    palabraSecreta = palabra
    palabraSecreta = palabra
    console.log(palabraSecreta)
    return palabra
}

