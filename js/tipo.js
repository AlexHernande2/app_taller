
function validar() {
    let validarD = document.getElementById('datoInp').value;
    if (validarD.trim() === '') {
    // trim para eliminar espacios en blanco y comprobar si es una cadena vacia 
        document.getElementById('result').innerHTML = 'Debe ingresar al menos un dato';
    } else if (isNaN(validarD)) {
        document.getElementById('result').innerHTML = 'A ingresado texto';
    } else {
        document.getElementById('result').innerHTML = 'A ingresado un numero';
    }
}



