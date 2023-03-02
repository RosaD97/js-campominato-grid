'use strict';

// FUNZIONI
function creaCella(elemento, classe, valore){
    const elementoCreato = document.createElement(elemento);
    elementoCreato.classList.add(classe);
    elementoCreato.innerText = valore;

    elementoCreato.addEventListener('click', function(){
        elementoCreato.classList.add('colors');
        alert(valore);
    })
    return elementoCreato;
}

function appendiCella(container, element){
    container.append(element);
}

// MAIN

const container = document.querySelector(".ms_container");
const button = document.querySelector(".ms_btn");
console.log(button)

// Aggiungi Cella
for(let i = 1; i <= 100; i++){
    const cella = creaCella('div', 'cella', i);
    appendiCella(container, cella);
}

// Pulsante Play
button.addEventListener('click', function(){
    container.classList.add('display');
    container.classList.remove('d-none');
})
