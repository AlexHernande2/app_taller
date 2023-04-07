function mayorEdad(){
    let edad = document.getElementById('edad').value;
    let nombre = document.getElementById('nombre').value;
    if(!nombre){
        alert ('Debe ingresar un nombre');
    }else{
        if(!edad){
            alert ('Debe ingresar una edad');
        }else if (edad >=18){
            alert ('Hola ' + nombre + ' Eres mayor de Edad');
        }else if (edad >0){
            alert ('Hola '+ nombre + ' Eres menor de edad' );
        }else if(edad ==0){
            alert ('No es una edad valida');
        }else{
            alert ('Los datos ingresados no son validos');
        }
    }
}