function tip_numero() {
    var numeros = document.getElementById("numeros").value;
    let result = '';
    let lista = numeros.split(",");
    for (let i = 0; i < lista.length; i++) {

        let num = parseFloat(lista[i].trim());
        if (!Number.isInteger(num)) {
            result += lista[i] + ' No es un número entero <br>';
        } else if (num % 2 == 0) {
            result += lista[i] + ' Es par <br>';
        } else if (num % 2 != 0) {
            result += lista[i] + ' Es impar <br>';
        } else {
            result += ' A ingresado valores erroneos <br>'
        }

    }

    document.getElementById('resultado').innerHTML = result;

}

