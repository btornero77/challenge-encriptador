
document.addEventListener('DOMContentLoaded', function() {
    /*navegacionFija()
    crearGaleria()
    resaltarEnlace()*/
})

const divPrinImagen = document.querySelector('.principal-imagen');
const divTextarea = document.querySelector('.textarea');
const divImagen = document.querySelector('.imagen');
const divTexto = document.querySelector('.texto');
const divBotonCopy = document.querySelector('.botonCopiar');

/* Encriptar */
const E = "enter"
const I = "imes"
const A = "ai"
const O = "ober"
const U = "ufat"

function encriptar() {

    /*
    let imagen = bloqueDiv.querySelector('img');
    imagen.querySelector('img').style.visibility = "hidden"
    */
    //divTextarea.querySelector('textarea').style.display = "none";
    //divTextarea.querySelector('textarea').style.visibility = "hidden";

    //divImagen.querySelector('img').style.visibility = "hidden";
    //divTexto.querySelector('p').style.visibility = "hidden";

    /*divTexto.style.visibility = "hidden";
    divImagen.style.visibility = "hidden";*/

    /* Quitamos la imagen y los dos textos  */
    divImagen.style.display  = "none";
    divTexto.style.display = "none";
    /*  Mostramos el textarea y el boton decopu  */
    divTextarea.style.display = "block";
    divBotonCopy.style.display = "block";
    /* Cambiamos la justificacion del contenido  */
    divPrinImagen.style.justifyContent = "space-between";

    let texto = document.querySelector('.inputTxt').value;

    //alert(texto.length);
    newCad = "";

    for (j=0; j < texto.length; j++) {

        switch (texto.charAt(j)) {
            case "a":
                newCad = newCad + A;
                break;
            case "e":
                newCad = newCad + E;
              break;
            case "i":
                newCad = newCad + I;
              break;
            case "o":
                newCad = newCad + O;
                break;
            case "u":
                newCad = newCad + U;
                break;
            default:
                newCad = newCad + texto.charAt(j);
        }

/*       
        if (texto.charAt(j) == "a")
            newCad = newCad + A;
        if (texto.charAt(j) == "e")
            newCad = newCad + E;
        if (texto.charAt(j) == "i")
            newCad = newCad + I;
        if (texto.charAt(j) == "o")
            newCad = newCad + O;
        if (texto.charAt(j) == "u")
            newCad = newCad + U;
        else
            newCad = newCad + texto.charAt(j); */
    }
   // alert(newCad);

    return newCad;

}

function realizarEncriptador() {
    let TextA = document.querySelector('.text2');
    TextA.innerHTML = encriptar();
}

function copiarTexto() {
    let TextA = document.querySelector('.text2');

    TextA.focus();
    document.execCommand('selectAll');
    document.execCommand('copy');
}

function desencriptar() {

    //divTextarea.querySelector('textarea').style.display = "block";
    //divTextarea.style.display  = "block";
    let texto = document.querySelector('.inputTxt').value;
    let TextA = document.querySelector('.text2');
    let valor = "";

    valor = texto.replaceAll(A,'a');
    //alert(valor);
    valor = valor.replaceAll(E,'e');
    //alert(valor);
    valor = valor.replaceAll(I,'i');
    //alert(valor);
    valor = valor.replaceAll(O,'o');
    //alert(valor);
    valor = valor.replaceAll(U,'u');

    //alert(valor);
   
    TextA.innerHTML = valor;

    return;
}