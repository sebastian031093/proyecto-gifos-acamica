


//Caja de sugerencias.

import {busquedas,sugerenciasDeBusqueda } from "../classes/card.class.js";
import { pintarSugerencias } from "./layoust.js";

//elementos a seleccionar.

//TODO: PENDIENTE LA SELECCION DEL TAG Y PONERLA EN EL INPUT
//TODO:DAR ESTILO A LA CAJA DE LAS SUGERENACIAS.

let inputvalue;

const eventos = () => {

    const input = document.querySelector(".searchbox__input");
    const searchbox = document.querySelector(".home__searchbox");
    const searchbox__items = document.querySelector(".searchbox__items");
    const btnsearch = document.querySelector(".btnsearch");





    input.addEventListener("keyup", async (evento) => {

        if (input.value.length >0) {
            let userData = evento.target.value;
            let arrSuggets = await sugerenciasDeBusqueda(userData);
            // console.log(arrSuggets);
            arrSuggets = arrSuggets.map((data) => {
              return (data = ` <li class="searchbox__item">${data.sugget}</li>`);
            });
            pintarSugerencias(arrSuggets);
            searchbox.classList.add("active");
        }else{
            pintarSugerencias(arrSuggets);
        }  
    });

    searchbox__items.addEventListener('click', (evento)=>{

        // console.log(evento)
        const nombreElamento = evento.target.firstChild.textContent;
        // console.log(nombreElamento);
        inputvalue = input.value = nombreElamento;
        
    })

    btnsearch.addEventListener('click', async (evento) =>{
        console.log(evento);
        let info = await busquedas(inputvalue);
        console.log(info);
    })
}







export const init = () =>{
    eventos();
}


