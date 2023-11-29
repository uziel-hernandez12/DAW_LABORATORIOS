class Cuenta {
    constructor(saldo){
        this.saldo = saldo;
    }
    retirar(cantidad){
        if(cantidad <= this.saldo && cantidad > 0){
            this.saldo -= cantidad;
        }
    }
    depositar(cantidad){
        if(cantidad > 0){
            this.saldo += cantidad;
        }
    }
    consultarSaldo(){
        return  this.saldo;
    }
}

// objeto cuenta que se estará manipulando
var cuenta = new Cuenta(500);

//valida si el NIP es correcto
function validarNIP(){
    //obtengo la contraseña
    let nip = document.getElementById("password").value;

    //si la contraseña es correcta abro la otra ventana
    if(nip == "1234"){
        document.getElementById('bienvenido').innerHTML = "¡¡¡Bienvenido!!!";

     
        setTimeout(function() {
            // Esta parte del código se ejecutará después del retraso
            window.location.href = 'bienvenido.html';
        }, 2000); // 2000 milisegundos (2 segundos) de retraso

    }else{
        document.getElementById('errorMensaje').innerHTML = "NIP incorrecto"
    }
}

/*
    determina que operacion se seleccionó y la ejecuta
*/
function aceptar(){
    //obtengo el elemento select
    var operaciones = document.getElementById('operacion');

    //obtengo la opcion que selecciono
    var operacion = operaciones.value;

    //si operacion es igual a consultar saldo
    if(operacion == 'consultarSaldo'){
        document.getElementById('texto').value = cuenta.consultarSaldo();
    }else if(operacion == 'depositar'){
        depositar();
    }else if(operacion == 'retirar'){
        retirar();
    }else if(operacion == 'salir'){//si seleccionó salir
        document.getElementById('mensaje').innerHTML = "¡FUE UN PLACER ATENDERTE!"
        setTimeout(function() {
            // Esta parte del código se ejecutará después del retraso
            window.location.href = 'index.html';
        }, 2000); // 2000 milisegundos (2 segundos) de retraso

    }
}

function depositar(){
    //obtengo la cantidad a depositar
    let cantidad = parseFloat(document.getElementById('texto').value);

    //si la cantidad es negativa
    if(cantidad <= 0 || isNaN(cantidad)){
        document.getElementById('mensaje').innerHTML = "Cantidad inválida";
    }else{
        cuenta.depositar(cantidad);
        document.getElementById('mensaje').innerHTML = "Depósito Exitoso";
    }
}

function retirar(){
     //obtengo la cantidad a retirar
     let cantidad = parseFloat(document.getElementById('texto').value);

     //si la cantidad es negativa
     if(cantidad <= 0 || isNaN(cantidad) || cantidad>cuenta.consultarSaldo()){
         document.getElementById('mensaje').innerHTML = "Cantidad inválida";
     }else{
         cuenta.retirar(cantidad);
         document.getElementById('mensaje').innerHTML = "Retiro Exitoso";
         //limpia la caja de texto
         document.getElementById('texto').value = "";
     }
} 

// Obtener referencia al elemento select y la caja de texto
var selectElement = document.getElementById('operacion');
var cajaDeTexto = document.getElementById('texto');

// Agregar un escuchador de eventos 'change' al select
selectElement.addEventListener('change', function() {
  // Verificar si se ha seleccionado una opción válida (diferente de "")
  if (selectElement.value !== "") {
    // Limpiar la caja de texto
    cajaDeTexto.value = "";
    document.getElementById('mensaje').innerHTML = "";
  }
});
