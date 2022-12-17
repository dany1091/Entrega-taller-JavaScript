"use strict"
const nombres = document.getElementById("nombre");
const apellidos = document.getElementById("apellido");
const cedulas = document.getElementById("cedula");
const usuarios = document.getElementById("usuario");
const correos = document.getElementById("correo");
const passwords = document.getElementById("password");
const mensajeError = document.getElementById("mensajesDelSistema");


function validacion(campo){
    console.log(campo)
    if (campo && campo.value == "") {

        //alert("valor indefinido")
        mensajeError.innerHTML="<p>No ha digitado info requerida</p>"
        campo.classlist.add("error")
    } else {
        mensajeError.innerHTML=""

    }
}

function enviar(){
    console.log("entrando a la funcion a validar...")
    validacion(nombres);
    validacion(apellidos);
    validacion(cedulas);
    validacion(usuarios);
    validacion(correos);
    validacion(passwords);

}

