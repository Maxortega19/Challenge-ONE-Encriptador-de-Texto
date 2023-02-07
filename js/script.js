/* 

Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

*/

/* Declaración de variables */

let textin = document.getElementById("text-in");
let textout = document.getElementById("text-out");
let btnEncriptar = document.getElementById("btn-encrip");
let btnDesencriptar = document.getElementById("btn-desencrip");
let btnCopiar = document.getElementById("btn-copy");
textin.focus();


//Al presionar el botón llamamos a la funcion de encriptar
btnEncriptar.addEventListener("click", encriptar);
//Al presionar el botón llamamos a la funcion de desencriptar
btnDesencriptar.addEventListener("click", desencriptar);
//Al presionar el botón llamamos a la funcion de copiar
btnCopiar.addEventListener("click", copiar);




//Funciones 

function encriptar() {
    let textoEncriptado = textin.value; //se accede al valor del objeto 
    textoEncriptado = textoEncriptado.replace(/e/img, "enter"); // i: mayuscula o minúscula g: busca mas de una m: busca en mas de una linea
    textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    textoEncriptado = textoEncriptado.replace(/u/img, "ufat");
    textoEncriptado = textoEncriptado.replace(/''/img, "");

    textout.innerHTML = textoEncriptado;
    textout.focus();

}

function desencriptar() {
    let textoEncriptado = textin.value; //
    textoEncriptado = textoEncriptado.replace(/enter/img, "e");
    textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    textoEncriptado = textoEncriptado.replace(/ufat/img, "u");
    textoEncriptado = textoEncriptado.replace(/''/img, "");

    textout.innerHTML = textoEncriptado;
    textout.focus();
}

function copiar() {
    
    // Select the text field
    textout.select();
    textout.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(textout.value);
    
    // Alert the copied text
    alert("Copied the text: " + textout.value);    
  }













  