


//Caja de sugerencias.

import {busquedas,sugerenciasDeBusqueda } from "../classes/card.class.js";
import { pintarSugerencias,pintarTituloBusqueda } from "./layoust.js";

//elementos a seleccionar.

//TODO: PENDIENTE LA SELECCION DEL TAG Y PONERLA EN EL INPUT
//TODO:DAR ESTILO A LA CAJA DE LAS SUGERENACIAS.



const eventos = () => {

    const input = document.querySelector(".searchbox__input");
    const searchbox = document.querySelector(".home__searchbox");
    const searchbox__items = document.querySelector(".searchbox__items");
    const btnsearch = document.querySelector(".btnsearch");



    let userData = '';

    input.addEventListener("keyup", async (evento) => {

        if (input.value.length > 0) {
            userData = evento.target.value;
            console.log(userData);
            let arrSuggets = await sugerenciasDeBusqueda(userData);
            // console.log(arrSuggets);
            arrSuggets = arrSuggets.map((data) => {
              return (data = ` <li class="searchbox__item">${data.sugget}</li>`);
            });
            pintarSugerencias(arrSuggets);
            searchbox.classList.add("active");
        }else{
        
            searchbox.classList.remove("active")
        }  
    });

    searchbox__items.addEventListener('click', (evento)=>{

        // console.log(evento)
        const nombreElamento = evento.target.firstChild.textContent;
        // console.log(nombreElamento);
        userData = input.value = nombreElamento;
        
    })

    btnsearch.addEventListener('click', async (evento) =>{
        console.log(evento);
    
        if(userData.length > 1){
            pintarTituloBusqueda(userData, await busquedas(userData));
        }else{
            console.log('sorry not')
        }
    })
}







export const init = () =>{
    eventos();
}


