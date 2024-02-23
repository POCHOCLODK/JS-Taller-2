function circulo(){
    let figura = document.getElementById("figura");
    let titulo = document.getElementById("titulo");

    figura.classList.toggle("circulo");
    titulo.innerHTML = "Circulo";
}
function rectangulo(){
    let figura = document.querySelector("#figura");
    let titulo = document.getElementById("titulo");

    figura.classList.toggle("rectangulo");
    titulo.innerHTML = "Rectangulo";
}
function degradado(){
    let  figura = document.getElementById("figura");
    let titulo = document.getElementById("titulo");

    figura.classList.toggle("degradado");
    titulo.innerHTML = "Degradado";
}
function gif(){
    let figura = document.querySelector("#figura");
    let titulo = document.getElementById("titulo");

    figura.classList.toggle("gif");
    titulo.innerHTML = "Gif";
}
function luna(){
    let fifura = document.getElementById("figura");
    let titulo = document.getElementById("titulo");

    fifura.classList.toggle("luna");
    titulo.innerHTML = "Luna";
}
function estrella(){
    let figura = document.querySelector("#figura");
    let titulo = document.getElementById("titulo");

    figura.classList.toggle("estrella");
    titulo.innerHTML = "Estrella";
}
function triangulo(){
    let figura = document.getElementById("figura");
    let titulo = document.getElementById("titulo");

    figura.classList.toggle("triangulo");
    titulo.innerHTML = "Triangulo";
}
function moveTop(){
    let figura = document.getElementById("figura");
    let titulo = document.getElementById("titulo");

    figura.classList.toggle("top")
    titulo.innerHTML = "Move Top";
    alert(" La figura se movera hacia arriba");
}
function moveBotton(){
    let figura=document.querySelector("#figura");
    let titulo = document.getElementById("titulo");

    figura.classList.toggle("botton");
    titulo.innerHTML = "Move Botton";
    alert("La Figura se movera hacia abajo");
}
function moveLeft(){
    let figura = document.getElementById("figura");
    let titulo = document.getElementById("titulo");

    figura.classList.toggle("left")
    titulo.innerHTML = "Move Left";
    alert(" La figura se esta moviendo a la izquierda ");
}
function moveRight(){
    let figura = document.getElementById("figura");
    let titulo = document.getElementById("titulo");

    figura.classList.toggle("right")
    titulo.innerHTML = "Move Right";

    alert(" La figura se esta moviendo a la derecha ");
}
function Diagonal(){
    let figura = document.querySelector("#figura");
    let titulo = document.getElementById("titulo");

    figura.classList.toggle("diagonal");
    titulo.innerHTML = "Diagonal";
    
    alert("La Figura se encuentra en diagonal");
}
function cambiarFondo() {
    let cont = document.querySelector("#cont");
    let titulo = document.getElementById("titulo");

    cont.classList.toggle("active");
    titulo.innerHTML = "Cambiar Fondo";
}

function cambiarFondobg() {
    let figura = document.querySelector("#figura");
    let titulo = document.getElementById("titulo");

    figura.classList.toggle("bg");
    titulo.innerHTML = "Cambiar Fondo";
}

function botton(){
const toggleButton = document.getElementById('toggleButton');
const panel = document.querySelector('.panel');

toggleButton.addEventListener('click', function() {
  panel.classList.toggle('panel-open');
});}

function panelLateral(){
    let panel= document.getElementById("panel-lateral");

    panel.classList.toggle("active");
}

function panelSuperior(){
    let panel= document.getElementById("panel-superior");

    panel.classList.toggle("active");
}