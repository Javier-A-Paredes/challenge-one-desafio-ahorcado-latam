function dibujarAhorcado(errores) {
    canvas.lineWidth = 6
    canvas.lineCap = "round"
    canvas.lineJoin = "round"
    canvas.strokeStyle = "#0A3871"
    if (errores === 8) {
        //poste lateral
        canvas.moveTo(500, 500)
        canvas.lineTo(500, 100)
    }
    if (errores === 7) {//teto 
        canvas.moveTo(650, 100)
        canvas.lineTo(500, 100)
    }
    if (errores === 6) {//corda
        canvas.moveTo(650, 100)
        canvas.lineTo(650, 178)
    }
    if (errores === 5) {//para cara
        canvas.moveTo(700, 230)
        canvas.arc(650, 230, 50, 0, Math.PI * 2)
    }
    if (errores === 4) {//para corpo
        canvas.moveTo(650, 389)
        canvas.lineTo(650, 280)
    }
    if (errores === 3) {//para perna izquerda
        canvas.moveTo(650, 389)
        canvas.lineTo(600, 450)
    }
    if (errores === 2) {//para perna direita
        canvas.moveTo(650, 389)
        canvas.lineTo(690, 450)
    }
    if (errores === 1) {//para mão izquerda
        canvas.moveTo(650, 330)
        canvas.lineTo(600, 389)
    }
    if (errores === 0) {//para mão direita
        canvas.moveTo(650, 330)
        canvas.lineTo(690, 389)
    }
    canvas.stroke()
    canvas.closePath()
}
