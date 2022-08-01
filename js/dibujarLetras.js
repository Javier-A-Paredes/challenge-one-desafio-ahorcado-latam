let canvas = document.querySelector('canvas').getContext('2d');
let letrasIngresadas = [];
let letrasVerificacion = [];
let palabraCorrecta = '';
let msjError = document.querySelector('.msj-error')

function dibujarLineas() {
    canvas.lineWidth = 6;
    canvas.lineCap = "round";
    canvas.lineJoin = "round";
    canvas.strokeStyle = "#0A3871";
    canvas.beginPath();

    let ancho = 600 / palabraSecreta.length;
    for (let i = 0; i < palabraSecreta.length; i++) {
        canvas.moveTo(300 + (ancho * i), 640);
        canvas.lineTo(350 + (ancho * i), 640);
    }
    canvas.stroke();
    canvas.closePath();
}

function dibujarLetrasCorrectas(posicion) {
    canvas.font = 'bold 52px Inter';
    canvas.lineWidth = 6;
    canvas.lineCap = 'round';
    canvas.lineJoin = "round";
    canvas.fillStyle = "#0A3871";

    let ancho = 600 / palabraSecreta.length;
    canvas.fillText(palabraSecreta[posicion], 305 + (ancho * posicion), 620);
}

function dibujarLetrasIncorrectas(letra, erroresRestantes) {
    canvas.font = 'bold 52px Inter';
    canvas.lineWidth = 6;
    canvas.lineCap = 'round';
    canvas.lineJoin = "round";
    canvas.fillStyle = "#0A3871";

    canvas.fillText(letra, 200 + (60 * (10 - erroresRestantes)), 710);
}


function verificarInputLetra(tecla) {
    if (letrasVerificacion.length < 1 || letrasVerificacion.indexOf(tecla) < 0) {
        letrasVerificacion.push(tecla);
        return false
    } else {
        letrasVerificacion.push(tecla);
        return true
    }
}

function agregarLetrasCorrectas(i) {
    palabraCorrecta += palabraSecreta[i].toUpperCase();
}

function agregarLetraIncorrecta(letra) {
    if (palabraSecreta.indexOf(letra) < 0) {
        limiteErrores -= 1;
    }
}

function limitarInput(key) {
    let verificacion = /^[a-z]/

    if (verificacion.test(key)) {
        errorInput(true)
        return true
    } else {
        errorInput(false)
        return false
    }
}

function recibirInputs() {

    if (estadoJuego) {
        document.onkeydown = function (e) {
            let input = e.key.toUpperCase();
            if (limiteErrores > 0) {
                if (!verificarInputLetra(e.key) && limitarInput(e.key)) {
                    if (palabraSecreta.includes(input)) {
                        agregarLetrasCorrectas(palabraSecreta.indexOf(input))
                        for (let i = 0; i < palabraSecreta.length; i++) {
                            if (palabraSecreta[i] === input) {
                                checkVictoria(input, i);
                            }
                        }
                    } else {
                        if (!verificarInputLetra(e.key) && !limitarInput(e.key)) return
                        checkDerrota(input)
                    }
                }
            }
        }
    }
}


function errorInput(err) {
    if (err) {
        msjError.classList.add('invisible')
    } else {
        msjError.classList.remove('invisible')
    }
}

function checkVictoria(key, i) {
    if (limiteErrores > 0 && palabraCorrecta.length < palabraSecreta.length) {
        dibujarLetrasCorrectas(i);
    }

    letrasIngresadas.push(key);
    if (letrasIngresadas.length == palabraSecreta.length) {
        canvas.font = 'bold 42px Inter';
        canvas.lineWidth = 6
        canvas.lineCap = "round"
        canvas.lineJoin = "round"
        canvas.fillStyle = "green"
        canvas.fillText("Ganaste,", 950, 320)
        canvas.fillText("Felicidades!", 930, 360)
        setTimeout(() => {
            location.reload();
        }, 1500);
    }

}

function checkDerrota(input) {

    if (limiteErrores > 0) {
        agregarLetraIncorrecta(input);
        dibujarLetrasIncorrectas(input, limiteErrores);
        dibujarAhorcado(limiteErrores);
    }

    if (limiteErrores <= 0) {
        canvas.font = 'bold 42px Inter';
        canvas.lineWidth = 6
        canvas.lineCap = "round"
        canvas.lineJoin = "round"
        canvas.fillStyle = "red"
        canvas.fillText("Lo siento,", 940, 320)
        canvas.fillText("Fin del Juego!", 900, 360)
    }

}
