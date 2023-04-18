function parImpar() {
    let numero = parseFloat(document.getElementById('inpNumero').value);
    let result = "";

    if (numero >= 0 && Number.isInteger(numero)) {
        let oper = numero % 2
        if (oper == 0) {
            result = 'El número ingresado es par';
        } else {
            result = 'El número ingresado es impar';
        }
    } else if (numero < 0 && !Number.isInteger(numero)) {
        result = 'Debe ingresar números enteros positivos';
    } else if (numero < 0) {
        result = 'Debe ingresar números positivos';
    } else if (isNaN(numero)) {
        result = 'Debe ingresar por lo menos un número'
    }
    else {
        result = 'Debe ingresar un entero ';
    }
    document.getElementById('outResultado').innerHTML = result;
}