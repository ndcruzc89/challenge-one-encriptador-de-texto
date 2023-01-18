let mensaje = "";
let campoTexto;
let campoMensaje;
const contenidoMensaje = document.querySelector(".contenido-mensaje");
const ningunMensaje = document.querySelector(".ningun-mensaje");
const btnEncriptar = document.querySelector(".boton-encriptar");
const btnDesencriptar = document.querySelector(".boton-desencriptar");
const btnCopiar = document.querySelector(".boton-copiar");

function encriptar(event) {
  event.preventDefault();
  campoTexto = document.querySelector(".ingresar-texto").value;
  campoMensaje = document.querySelector(".mensaje-resultante");
  mensaje = "";
  if (campoTexto === "") {
    ningunMensaje.classList.remove("ocultar");
    contenidoMensaje.classList.add("ocultar");
  } else {
    for (let index = 0; index < campoTexto.length; index++) {
      if (campoTexto.charAt(index) == "a") {
        mensaje += "ai";
      } else if (campoTexto.charAt(index) == "e") {
        mensaje += "enter";
      } else if (campoTexto.charAt(index) == "i") {
        mensaje += "imes";
      } else if (campoTexto.charAt(index) == "o") {
        mensaje += "ober";
      } else if (campoTexto.charAt(index) == "u") {
        mensaje += "ufat";
      } else {
        mensaje += campoTexto.charAt(index);
      }
    }
    ningunMensaje.classList.add("ocultar");
    contenidoMensaje.classList.remove("ocultar");
    campoMensaje.value = mensaje;
  }
}

function desencriptar(event) {
  event.preventDefault();
  campoTexto = document.querySelector(".ingresar-texto").value;
  campoMensaje = document.querySelector(".mensaje-resultante");
  mensaje = "";
  if (campoTexto === "") {
    ningunMensaje.classList.remove("ocultar");
    contenidoMensaje.classList.add("ocultar");
  } else {
    mensaje = campoTexto
      .replaceAll("ai", "a")
      .replaceAll("enter", "e")
      .replaceAll("imes", "i")
      .replaceAll("ober", "o")
      .replaceAll("ufat", "u");
    ningunMensaje.classList.add("ocultar");
    contenidoMensaje.classList.remove("ocultar");
    campoMensaje.value = mensaje;
  }
}

function copiar(event) {
  event.preventDefault();
  campoMensaje = document.querySelector(".mensaje-resultante").value;
  navigator.clipboard.writeText(campoMensaje);
}

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;
