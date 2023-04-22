function mayorEdad() {
    const edad = parseFloat(document.getElementById('edad').value);
    const nombre = document.getElementById('nombre').value;
    if (nombre.trim() == '') {
        alert('Debe ingresar un nombre');
    } else {
        if (!edad) {
            alert('Debe ingresar una edad');
        } else if (!Number.isInteger(edad)) {
            alert('Deben ser números enteros');
        } else if (edad >= 18 && edad <= 120) {
            alert('Hola ' + nombre + ' Eres mayor de Edad');
        } else if (edad > 0 && edad <= 17) {
            alert('Hola ' + nombre + ' Eres menor de edad');
        } else if (edad == 0) {
            alert('No es una edad valida');
        } else {
            alert('Los datos ingresados no son validos');
        }
    }
}
