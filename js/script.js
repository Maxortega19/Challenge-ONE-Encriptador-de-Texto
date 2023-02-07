/* 

Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

*/

/* Declaración de variables */

let textIn = document.getElementById("text-in");
let textOut = document.getElementById("text-out");
let btnEncriptar = document.getElementById("btn-encrip");
let btnDesencriptar = document.getElementById("btn-desencrip");
let btnCopiar = document.getElementById("btn-copy");
let btnLimpiar = document.getElementById("btn-limpiar");


textIn.focus();

//Al presionar el botón llamamos a la funcion de encriptar
btnEncriptar.addEventListener("click", encriptar);
//Al presionar el botón llamamos a la funcion de desencriptar
btnDesencriptar.addEventListener("click", desencriptar);
//Al presionar el botón llamamos a la funcion de copiar
btnCopiar.addEventListener("click", copiar);


//Funciones 
function validar(texto) {
    // Se transforma a boolean ya que match devuelve las mayusculas o sino null
    //A-Z mayuscula y los codigos son los acentos
    let mayus = Boolean(texto.match(/[A-Z\u00E0-\u00FC]/));
    return mayus;
  }

function encriptar() {
    let textoEncriptado = textIn.value; //se accede al valor del objeto
    if(validar(textoEncriptado) == true){
        textIn.value = "Sólo se aceptan minúsculas y palabras sin acento";
    }
    else{
        textoEncriptado = textoEncriptado.replace(/e/img, "enter"); // i: mayuscula o minúscula g: busca mas de una m: busca en mas de una linea
        textoEncriptado = textoEncriptado.replace(/i/img, "imes");
        textoEncriptado = textoEncriptado.replace(/a/img, "ai");
        textoEncriptado = textoEncriptado.replace(/o/img, "ober");
        textoEncriptado = textoEncriptado.replace(/u/img, "ufat");
        textoEncriptado = textoEncriptado.replace(/''/img, "");
    
        textOut.innerHTML = textoEncriptado;
        textOut.focus();
    }
   

}

function desencriptar() {
    let textoEncriptado = textIn.value; //
    textoEncriptado = textoEncriptado.replace(/enter/img, "e");
    textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    textoEncriptado = textoEncriptado.replace(/ufat/img, "u");
    textoEncriptado = textoEncriptado.replace(/''/img, "");

    textOut.innerHTML = textoEncriptado;
    textOut.focus();
}

function copiar() {
    // Select the text field
    textOut.select();
    textOut.setSelectionRange(0, 99999); // For mobile devices
    // Copy the text inside the text field
    navigator.clipboard.writeText(textOut.value);

    textOut.innerHTML = "El texto " + textOut.value + " se ha copiado correctamente";
}













