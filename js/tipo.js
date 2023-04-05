
function validar(){
    let validarD = document.getElementById('datoInp').value;
    if(isNaN(validarD)){
        document.getElementById('result').innerHTML = 'A ingresado texto' ;
    }else{
         document.getElementById('result').innerHTML = 'A ingresado un numero' ;
    }
}



 