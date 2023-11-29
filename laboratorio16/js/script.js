//Realiza las operaciones de suma, resta, multiplicacion y division
function realizarOperacion(){
    //almacena los tipos de operacion  en los radios
    var tipoOperacion = document.getElementsByName("operacion");

    //leemos los numeros de las cajas de texto
    var primerNumero = (Number)(document.getElementById("num1").value);
    var segundoNumero = (Number)(document.getElementById("num2").value);

    /*obtenemos el radio seleccionado y llamamos a la funcion 
    correspondiente para realizar la operacion*/
    for(var i = 0; i < tipoOperacion.length; i++){
        //checamos cual es el radio seleccionado 
        if(tipoOperacion[i].checked){
            var operacionSeleccionada = tipoOperacion[i].value;
            

            //procedemos a llamar a la funcion segun el radio escogido
            if(operacionSeleccionada == "suma"){
                suma(primerNumero,segundoNumero);
            }

             //procedemos a llamar a la funcion segun el radio escogido
            if(operacionSeleccionada == "resta"){
                resta(primerNumero,segundoNumero);
            }

            //procedemos a llamar a la funcion segun el radio escogido
            if(operacionSeleccionada == "multiplicacion"){
                multiplicacion(primerNumero,segundoNumero);
            }

            //procedemos a llamar a la funcion segun el radio escogido
            if(operacionSeleccionada == "division"){
                division(primerNumero,segundoNumero);
            }
        }//fin del if 1.0
    }// fin del for 1.0

}

//suma dos numeros
function suma(num1, num2){
    var resultado = num1 + num2;
    document.getElementById('resultado').innerHTML = "La suma de " + num1 + " + " + num2 + " = " + resultado;
}

//resta dos numeros
function resta(num1, num2){
    var resultado = num1 - num2;
    document.getElementById('resultado').innerHTML = "La resta de " + num1 + " - " + num2 + " = " + resultado;
}

//multiplica dos numeros
function multiplicacion(num1, num2){
    var resultado = num1 * num2;
    document.getElementById('resultado').innerHTML = "La multiplicacion de " + num1 + " * " + num2 + " = " + resultado;
}

//divide dos numeros
function division(num1, num2){
    var resultado = num1 / num2;
    document.getElementById('resultado').innerHTML = "La division de " + num1 + " / " + num2 + " = " + resultado;
}