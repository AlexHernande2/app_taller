let cont = document.getElementById('datCaracter'); //pedimos la longitud del textarea

function contarCaracteres() {
    let contar = cont.value.length;
    document.getElementById('contador')
        .innerHTML = 'caracteres ingresados: ' + contar;

}
contarCaracteres();
//Se ejecuta cada vez que se ingresa un dato con el evento input 
//Y se vuelve a ejecutar la funcion contar caracteres
cont.addEventListener("input", contarCaracteres);

