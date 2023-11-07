// ACTIVIDAD 1
function primo(numero) {
  for (let i = 2; i < numero; i++) {
    if (numero % i == 0) {
      console.log(i);
      return false;
    }
  }
  return true;
}
primo(17);

// ACTIVIDAD 2

function sumasMatriz(a, b) {
  for (let i = 0; i < a.length; i++) {
    for (let x = 0; x < a[i].length; x++) {
      /* console.log(a[i][x] + b[i][x]); */
    }
  }
}

let matrizA = [
  [1, 2],
  [3, 4],
];
let matrizB = [
  [5, 6],
  [7, 8],
];

sumasMatriz(matrizA, matrizB);

// ACTIVIDAD 3
function sumaRango(a, b) {
  let suma = 0;
  for (let i = a; i <= b; i++) {
    suma += i;
  }
  return suma;
}

sumaRango(1, 3);

// ACTIVIDAD 4
function contarVocales(palabra) {
  let letras = palabra.split("");
  let contador = 0;
  //console.log(letras)
  for (let i = 0; i < letras.length; i++) {
    //console.log(letras[i])
    if (
      letras[i] == "a" ||
      letras[i] == "o" ||
      letras[i] == "e" ||
      letras[i] == "i" ||
      letras[i] == "u"
    ) {
      contador += 1;
    }
  }
  return contador;
}
contarVocales("helicoptero");

// ACTIVIDAD 5
function nombreUnico(listaDeNombres) {
  let nuevaLista = [];
  for (let i = 0; i < listaDeNombres.length; i++) {
    if (!nuevaLista.includes(listaDeNombres[i])) {
      nuevaLista[i] = listaDeNombres[i];
    }
  }
  return nuevaLista;
}
nombreUnico(["elias", "joaquin", "elias"]);

// ACTIVIDAD 6

function reverse1(texto) {
  let textoR = "";
  let nuevoTexto = texto.split("");

  for (let i = nuevoTexto.length - 1; i >= 0; i--) {
    textoR += nuevoTexto[i];
    ;
  }
  return textoR;
}

console.log(reverse1("elias"));

/* ----------------------------------- */
let index = 0;
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let img = document.getElementById("img-llama");
let imagenes = ["img/1.jfif", "img/2.jfif", "img/3.jfif"];

next.addEventListener("click", () => {
  img.src = `${imagenes[index]}`;
  if (index < 2) {
    index++;
  } else {
    index = 0;
  }
});
prev.addEventListener("click", () => {
  img.src = `${imagenes[index]}`;
  if (index < 2) {
    index--;
  } else {
    index = 0;
  }
});

/* ---------------------------------------------- */
let texto = document.getElementById("txt-nombre");
let crecer = document.getElementById("btn-crecer");
crecer.addEventListener("click", () => {
  texto.classList.remove("restaurar");
  texto.classList.add("agrandar");
});

let restaurar = document.getElementById("btn-rest");

restaurar.addEventListener("click", () => {
  texto.classList.remove("agrandar");
  texto.classList.add("restaurar");
});

/* ---------------- */

let btn = document.getElementById("btn-vm");
let ocultar = document.getElementById("ocultar");

btn.addEventListener("click", () => {
  ocultar.classList.add("aparecer");
});
