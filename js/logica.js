var pantalla = document.getElementById("disp")
pantalla.textContent = 0
function aniadir(contenido) {
    if(pantalla.textContent==0) {
    pantalla.textContent = contenido
} else {
    pantalla.textContent+=contenido
}
}

function borrar() {if(pantalla.textContent.length == 1) {
    resetear()
} else {
    pantalla.textContent = pantalla.textContent.substring(0,pantalla.textContent.length - 1)}
}
   



function resultado() {
    pantalla.textContent = eval(pantalla.textContent)
}
function resetear() {
    pantalla.textContent = 0
    
}
