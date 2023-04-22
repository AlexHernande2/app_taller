function tip_numero() {
    var numeros = document.getElementById("numeros").value;
    let result = '';
    let lista = numeros.split(",");
    for (let i = 0; i < lista.length; i++) {

        let num = parseFloat(lista[i].trim());
        if (!Number.isInteger(num)) {
            result += lista[i] + '  <font color = "red" > No es un número entero <br>  </font>';
        } else if (num % 2 == 0) {
            result += lista[i] + '<font color = "blue" > Es par <br> </font>';
        }else {
            // result += ' A ingresado valores erroneos <br>'
            result += lista[i] +  ' <font color = "green" > Es impar <br> </font>';
        }
    }

    document.getElementById('resultado').innerHTML = result;

}

