const nombreEst = document.getElementById('nombre').value;
const nomMateria = document.getElementById('nombreMateria').value;
const not1 = parseFloat(document.getElementById('not1').value);
const not2 = parseFloat(document.getElementById('not2').value);
const not3 = parseFloat(document.getElementById('not3').value);

function validarProme() {
    let resul = "";
    let promedio = 0;
    if (nombreEst.trim() == "") {
        alert('Debe ingresar un nombre');
    } else {
        if (nomMateria.trim() == "") {
            alert('Debe ingresar el nombre de la Materia');
        } else {
            if (not1 > 0 && not1 <= 5 && not2 > 0 && not2 <= 5 && not3 > 0 && not3 <= 5) {
                promedio = (not1 + not2 + not3) / 3
            } else {
                alert('Las notas no deben estar entre 0 y 5')
            }
        }
    }
    let mensaje = promedio >= 3 ?
        'Felicitaciones aprobó' :
        'Lo sentimos vuelva a repetir la materia';

     
}

