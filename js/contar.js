let cont = document.getElementById('datCaracter'); //pedimos la longitud del textarea
//Se ejecuta cada vez que se ingresa un dato con el evento input 
//Y se vuelve a ejecutar la funcion contar caracteres
cont.addEventListener("input", () => {
    document.getElementById('contador')
        .innerHTML = 'caracteres ingresados: ' + cont.value.length;
});