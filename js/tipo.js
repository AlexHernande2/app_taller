
function validar() {
    let validarD = document.getElementById('datoInp').value;
    let result ="";
    if (validarD.trim() === '') {
    // trim para eliminar espacios en blanco y comprobar si es una cadena vacia 
        result = 'Debe ingresar al menos un dato';
    } else if (isNaN(validarD)) {
        result = 'A ingresado texto';
    } else {
        result = 'A ingresado un numero';
    }
    document.getElementById('result').innerHTML = result;
}

