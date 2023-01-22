/*funvion para validar el texto que no contenga punto,
 numero de acuerdo a la expresion regular dada.
*/
function validarExpresionTexto() {
    var texto = document.getElementById("text-area").value;
    texto = texto.toLowerCase().split('');
    cadena = texto.join("");

    const expresion = { solotexto: /^(a-z){2,30}?\s|[a-z]$/ }

    if ((expresion.solotexto.test(cadena))) {
        return true;
    } else {
        return false;
    }

}
//funcion para validar que no permita espacios en blanco.
function validar() {
    var cadena = document.getElementById("text-area");

    if (cadena.value == "") {
        return false;

    } else {
        return true;
    }

}

//Funcion para encriptar el texto enviado
function encriptar() {
    var texto = document.getElementById("text-area").value;
    texto = texto.toLowerCase().split('');
    var validartexto = validar();
    var expresion = validarExpresionTexto();
    if (validartexto == false) {
        alert("Debe ingresar un texto o una letra para poder encriptar o desencriptar");
    } else {
        if (expresion == false) {
            alert("Datos erroneos");
        } else {


            for (var c = 0; c < texto.length; c++) {

                switch (texto[c]) {
                    case "a":
                        texto.splice(c, 1, ("ai"));
                        break;

                    case "e":
                        texto.splice(c, 1, ("enter"));
                        break;

                    case "i":
                        texto.splice(c, 1, ("imes"));
                        break;

                    case "o":
                        texto.splice(c, 1, ("ober"));
                        break;

                    case "u":
                        texto.splice(c, 1, ("ufat"));
                        break;
                }
            }

            document.getElementById("mensaje").value = texto.join("");
            document.getElementById("mensaje").style.backgroundImage = "none";
            document.getElementById("text-area").value = "";
        }
    }
}

//Funcion que desencripta el texto enviado por el text area
function desencriptar() {
    var texto = document.getElementById("text-area").value;
    texto = texto.toLowerCase().split('');
    var expresion = validarExpresionTexto();
    var validartexto = validar();

    /*Valida si la variable es falso debe arrojar un mensaje de error y si es true continua con el siguiente proceso.*/

    if (validartexto == false) {
        alert("Debe ingresar un texto o una letra para poder encriptar o desencriptar");
    } else {
        if (expresion == false) {
            alert("Datos erroneos");
        } else {
            for (var c = 0; c < texto.length; c = c++) {
                if (texto[c] + texto[c + 1] == "ai") {
                    texto.splice(c, 2, "a");
                } else if (texto[c] + texto[c + 1] + texto[c + 2] + texto[c + 3] + texto[c + 4] == "enter") {
                    texto.splice(c, 5, "e");
                } else if (texto[c] + texto[c + 1] + texto[c + 2] + texto[c + 3] == "imes") {
                    texto.splice(c, 4, "i");
                } else if (texto[c] + texto[c + 1] + texto[c + 2] + texto[c + 3] == "ober") {
                    texto.splice(c, 4, "o");
                } else if (texto[c] + texto[c + 1] + texto[c + 2] + texto[c + 3] == "ufat") {
                    texto.splice(c, 4, "u");
                }
            }

            document.getElementById("mensaje").value = texto.join("");
            document.getElementById("mensaje").style.backgroundImage = "none";
            document.getElementById("text-area").value = "";
        }
    }
}

//Funcion para copiar lo que esta en el text area del mensaje con despues de dar clic en el boton copiar
function copiar() {
    var mensaje1 = document.getElementById("mensaje").value;
    if (mensaje1 != "") {
        document.querySelector("#mensaje").select();
        document.execCommand("copy");
    } else {
        document.getElementById("btn-copiar").disabled = true;
    }
}