const a = "ai";
const e = "enter";
const i = "imes";
const o = "ober";
const u = "ufat";

let campoTexto;
let mensaje = "";
let campoMensaje;
const contenidoMensaje = document.querySelector(".contenido-mensaje");
const ningunMensaje = document.querySelector(".ningun-mensaje");
const btnEncriptar = document.querySelector(".boton-encriptar");
const btnDesencriptar = document.querySelector(".boton-desencriptar");
const btnCopiar = document.querySelector(".boton-copiar");

function encriptar() {
  campoTexto = document.querySelector(".ingresar-texto").value;
  campoMensaje = document.querySelector(".mensaje-resultante");
  mensaje = "";
  if (campoTexto === "") {
    ningunMensaje.classList.remove("ocultar");
    contenidoMensaje.classList.add("ocultar");
  } else {
    for (let index = 0; index < campoTexto.length; index++) {
      console.log(campoTexto.length);
      if (campoTexto.charAt(index) == "a") {
        mensaje += a;
      } else if (campoTexto.charAt(index) == "e") {
        mensaje += e;
      } else if (campoTexto.charAt(index) == "i") {
        mensaje += i;
      } else if (campoTexto.charAt(index) == "o") {
        mensaje += o;
      } else if (campoTexto.charAt(index) == "u") {
        mensaje += u;
      } else {
        mensaje += campoTexto.charAt(index);
      }
    }
    ningunMensaje.classList.add("ocultar");
    contenidoMensaje.classList.remove("ocultar");
    campoMensaje.value = mensaje;
  }
}

btnEncriptar.onclick = encriptar;
