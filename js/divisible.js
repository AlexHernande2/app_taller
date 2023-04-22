function validarnumeros() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = '';
    let divisible = 0;
    if (isNaN(num1) == true || isNaN(num2) == true) {
        resultado = 'Debe ingresar dos números';
    } else if (num1 >= 0 && Number.isInteger(num1) && num2 >= 0 && Number.isInteger(num2)) {
        divisible = num1 % num2;

        divisible == 0 ? resultado = 'El número ' + num1 + ' es divisible entre el número ' + num2
            : resultado = 'El número ' + num1 + ' no es divisible entre el número ' + num2;

    } else if (!Number.isInteger(num1) && Number.isInteger(num2)) {
        num1 > 0 ? resultado = 'El número ' + num1 + ' no es entero ' :
            resultado = 'El número ' + num1 + ' no es entero positivo';
    } else if (Number.isInteger(num1) && !Number.isInteger(num2)) {
        num2 > 0 ? resultado = 'El número ' + num2 + ' no es entero ' :
            resultado = 'El número ' + num2 + ' no es entero positivo';
    }
    else if (num1 > 0 && !Number.isInteger(num1) && num2 > 0 && !Number.isInteger(num2)) {
        resultado = 'Los números ' + num1 + ' y ' + num2 + ' no son enteros';
    } else if (num1 < 0 && !Number.isInteger(num1) && num2 < 0 && !Number.isInteger(num2)) {
        resultado = 'Los números ' + num1 + ' y ' + num2 + ' no son enteros positivos';
    } else if (!Number.isInteger(num1) && !Number.isInteger(num2)) {
        resultado = 'Los números' + num1 + ' y ' + num2 + ' no son enteros ';
    }else if (num1<0){
        resultado=' El número '+ num1 + ' no es positivo';
    }else if (num2<0){
        resultado=' El número '+ num2 + ' no es positivo';
    }



    document.getElementById('result_divi').innerHTML = resultado;


}