


//Caja de sugerencias.

import { sugerenciasDeBusqueda } from "../classes/card.class.js";
import { pintarSugerencias } from "./layoust.js";

//elementos a seleccionar.

//TODO: PENDIENTE LA SELECCION DEL TAG Y PONERLA EN EL INPUT
//TODO:DAR ESTILO A LA CAJA DE LAS SUGERENACIAS.
const eventos = () => {

    const input = document.querySelector(".searchbox__input");
    const searchbox = document.querySelector(".home__searchbox");

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


}




export const init = () =>{
    eventos();
}


