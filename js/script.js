//////////////////////////////////////////////////////
// Declaración de variables //////////////////////////
//////////////////////////////////////////////////////


let textIn = document.getElementById("text-in");
let textOut = document.getElementById("text-out");
let btnEncrypt = document.getElementById("btn-encrypt");
let btnDecrypt = document.getElementById("btn-decrypt");
let btnCopiar = document.getElementById("btn-copy");
let btnClean = document.getElementById("btn-clean");


//////////////////////////////////////////////////////
// Llamado a los eventos /////////////////////////////
//////////////////////////////////////////////////////


textIn.focus();
//Al presionar el botón llamamos a la funcion de encriptar
btnEncrypt.addEventListener("click", encrypt);
//Al presionar el botón llamamos a la funcion de desencriptar
btnDecrypt.addEventListener("click", decrypt);
//Al presionar el botón llamamos a la funcion de copiar
btnCopiar.addEventListener("click", copy);
//Al presionar el boton llamamos a la función para recargar el textarea
btnClean.addEventListener('click', clean);


//////////////////////////////////////////////////////
// Declaración de funciones //////////////////////////
//////////////////////////////////////////////////////


function validate(text) {
    // Se transforma a boolean(true or false) ya que match devuelve las mayusculas o sino null
    //A-Z mayuscula y los codigos son los acentos
    let validation = Boolean(text.match(/[A-Z\u00E0-\u00FC]/));
    return validation;
}


function encrypt() {

    let encryptedText = textIn.value; //se accede al valor del objeto

    if (validate(encryptedText) == true) {
        textIn.value = "Sólo se aceptan minúsculas y palabras sin acento";
        setTimeout(clean, 5000); //Ejecutar la función de limpiar luego de 5s
    }
    else {
        // i: mayuscula o minúscula g: busca mas de una m: busca en mas de una linea
        encryptedText = encryptedText.replace(/e/img, "enter");
        encryptedText = encryptedText.replace(/i/img, "imes");
        encryptedText = encryptedText.replace(/a/img, "ai");
        encryptedText = encryptedText.replace(/o/img, "ober");
        encryptedText = encryptedText.replace(/u/img, "ufat");
        encryptedText = encryptedText.replace(/''/img, "");

        textOut.classList.toggle("radiationS");

        textOut.innerHTML = encryptedText;
        textOut.focus();
    }
}


function decrypt() {
    let encryptedText = textIn.value;

    if (validate(encryptedText) == true) {
        textIn.value = "Sólo se aceptan minúsculas y palabras sin acento";
        setTimeout(clean, 5000); //Ejecutar la función de limpiar luego de 5s
    }
    else {

        encryptedText = encryptedText.replace(/enter/img, "e");
        encryptedText = encryptedText.replace(/imes/img, "i");
        encryptedText = encryptedText.replace(/ai/img, "a");
        encryptedText = encryptedText.replace(/ober/img, "o");
        encryptedText = encryptedText.replace(/ufat/img, "u");
        encryptedText = encryptedText.replace(/''/img, "");

        textOut.classList.toggle("radiationS");

        textOut.innerHTML = encryptedText;
        textOut.focus();
    }

}


function copy() {
    if (textOut.value !== "") {
        textOut.select(); // Selección del campo de texto
        textOut.setSelectionRange(0, 99999); // Para dispositivos móviles
        navigator.clipboard.writeText(textOut.value); // Función de copia
        textOut.innerHTML = "El texto " + textOut.value + " se ha copiado correctamente";
    }
}


function clean() {
    textIn.value = "";
    textOut.value = "";
    textIn.placeholder = "Ingrese el texto...";
    textOut.placeholder = "No se encontró ningún texto";
    textIn.focus();
    location.reload();
}










