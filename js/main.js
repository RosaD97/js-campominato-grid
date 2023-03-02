'use strict';

//<div class="cella">1</div>

// FUNZIONI
function creaCella(elemento, classe){
    const elementoCreato = document.createElement('elemento');
    elementoCreato.classList.add(classe);
    console.log(elemento)
    return elementoCreato;
}

function appendiCella(container, element){
    console.log(container)
    container.append(element);

}

// MAIN

const container = document.querySelector(".ms_container");
const cella = creaCella('div', '.cella')
appendiCella(container, cella);
