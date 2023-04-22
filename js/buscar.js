function buscartxt() {
    //toLowerCase convierte en minusculas
    const textoBuscar = document.getElementById('inpText').value.toLowerCase();
    const textIngr = document.getElementById('textoingresado').value.toLowerCase();
    let textoencontrado = '';
    //(indexOf)  busca  el string si no lo encuentra envia un valor de -1
    let posicion = textIngr.indexOf(textoBuscar);
    let inicio = 0;
    while (posicion !== -1) {
        //.substring toma dos argumentos el inicio y la ultmia posicion donde se encontro la coincidencia
        //<span> se utiliza para resaltar visualmente
        textoencontrado += textIngr.substring(inicio, posicion) + '<span class="highlight">' + textoBuscar + '</span>';
        //se actualica el valor de inicio para que apunte a la siguiente posicion
        inicio = posicion + textoBuscar.length;
        //se actualiza el valor para que apunte al siguiente palabra buscada del texto
        posicion = textIngr.indexOf(textoBuscar, inicio);
    }
    //esto se hace porque se puede presentar que no se agregue todo el texto digamos lo que falta del texto por eso no se le pone un final
    textoencontrado += textIngr.substring(inicio);

    document.getElementById('result').innerHTML = textoencontrado;
}