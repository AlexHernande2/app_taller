
function validarProme() {
    const nombreEst = document.getElementById('nombre').value;
    const nomMateria = document.getElementById('nombreMateria').value;
    const not1 = parseFloat(document.getElementById('not1').value);
    const not2 = parseFloat(document.getElementById('not2').value);
    const not3 = parseFloat(document.getElementById('not3').value);
    const outPromedio = document.getElementById('promedio');
    let promedio = 0;
    if (nombreEst.trim() == "") {
        alert('Debe ingresar un nombre');
    } else {
        if (nomMateria.trim() == "") {
            alert('Debe ingresar el nombre de la Materia');
        } else {
            if (not1 >= 0 && not1 <= 5 && not2 >= 0 && not2 <= 5 && not3 >= 0 && not3 <= 5) {
                promedio = (not1 + not2 + not3) / 3
                //toFixed permite controlar la cantidad de decimales
                promedio = promedio.toFixed(2);
                // si se deja sin el value se le asigna solo una cadena de texto
                outPromedio.innerHTML = promedio >= 3 ?
                    'Felicitaciones ' + nombreEst + ', ' + ' <font color = "green" > su nota es ' + promedio + '</font> ' + ', ' + ' Pasaste la materia de ' + nomMateria :
                    'Lo siento ' + nombreEst + ',' + '<font color="red"> su nota es ' + promedio + '</font>' + ', ' + 'No pasaste la materia de ' + nomMateria;
            } else {
                alert('Las notas deben estar entre 0 y 5')
            }
        }
    }
}

