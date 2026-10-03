



let mensaje;
mensaje = document.getElementById("mensajeInicio");

const botonLogin = document.getElementById("btnLogin");




botonLogin.addEventListener("click", function(){
let logUsuario;
logUsuario = document.getElementById("usuario").value;

let logPass;
logPass = document.getElementById("contraseña").value;

if(logUsuario == "usuario" && logPass == "contraseña"){
    mensaje.innerHTML = "REDIRIGIENDO...";
    mensaje.className = "mensaje-exito"
   

}else if(logUsuario =="" || logPass ==""){
    mensaje.innerHTML = "Introduce Usuario y Contraseña"
    mensaje.className = "mensaje-error"
    
}else{
    mensaje.innerHTML = "Error en los datos"
    mensaje.className = "mensaje-error"
}
    
    



})