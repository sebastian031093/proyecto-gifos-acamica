//Caja de sugerencias.

import { busquedas, sugerenciasDeBusqueda } from "../classes/card.class.js";
import { eventoLike } from "./button-like.js";
import {idLike, pintarSugerencias, pintarTituloandButton} from "./layoust.js";
import { setLocalSorage, getLocalStorage } from "./localStorage.js";

//elementos a seleccionar.

//TODO: PENDIENTE LA SELECCION DEL TAG Y PONERLA EN EL INPUT

let cont = 12;

const offset = () => cont += 12;


const eventos = () => {
  const home = document.querySelector(".home");
  const input = document.querySelector(".searchbox__input");
  const searchbox = document.querySelector(".home__searchbox");
  const searchbox__items = document.querySelector(".searchbox__items");
  const btnsearch = document.querySelector(".btnsearch");

  let userData = "";

  input.addEventListener("keyup", async (evento) => {
    if (input.value.length > 0) {
      userData = evento.target.value;
      //console.log(userData);
      let arrSuggets = await sugerenciasDeBusqueda(userData);
      // console.log(arrSuggets);
      arrSuggets = arrSuggets.map((data) => {
        return (data = ` <li class="searchbox__item">${data.sugget}</li>`);
      });
      pintarSugerencias(arrSuggets);
      searchbox.classList.add("active");
    } else {
      searchbox.classList.remove("active");
    }
  });

  searchbox__items.addEventListener("click", (evento) => {
    //console.log(evento)
    const nombreElamento = evento.target.firstChild.textContent;
    // console.log(nombreElamento);
    userData = input.value = nombreElamento;
  });

  let arrbusqueda;
  btnsearch.addEventListener("click", async (evento) => {
    console.log(evento);
    if (userData.length > 1) {
      const layoutBusquedas = document.querySelector(".layout");
      layoutBusquedas.innerHTML = "";
      await pintarTituloandButton(userData);
      arrbusqueda = await busquedas(userData);
      
      setLocalSorage(arrbusqueda);
    } else {
      console.log("sorry not");
    }
  });

  //targert en home logica de muchas cosas.
  home.addEventListener("click", async (event) => {
    //console.log(event.target);

    //Matching strategy
    //Boton ver mas....
    if (event.target.classList.contains("btn-showMeMore")) {
      console.log("Le diste click al boton fantasma");
      let paso = offset(); // retorna el ofset.
      const btnShowMore = document.querySelector(".btn-showMeMore");

      paso >= 84
        ? (btnShowMore.style.display = "none")
        : await busquedas(userData, paso);
    }

    //Button like style and select gif.
    
    
    const gifSelect = event.target.closest(".layout__card--icons-like");
    const useTag = gifSelect.firstElementChild;
    //const svg = document.querySelector(".layout__card--icons-like");
    //console.log(gifSelect)
    //let svgID = document.querySelector(`[data-link="${svg.dataset.idlike}"]`);
    //console.log(gifSelect);
    //console.log(svID);
    
    if (!gifSelect) return;
    console.log(gifSelect.dataset.target)
    console.log(gifSelect.firstElementChild);
    const idTarget = gifSelect.dataset.target;
    const tabs = document.querySelectorAll("[data-target]");

    const idTabUse = gifSelect.firstElementChild.dataset.id; 
    console.log(idTabUse)
    const tabsUse = document.querySelectorAll("[data-id]")
    console.log(tabs);


    tabs.forEach(tab => {
      console.log(tab.dataset.target);
      idTarget === tab.dataset.target ? gifSelect.classList.toggle("btn__likeActive") :null;
    });

    tabsUse.forEach(tab => {
      idTabUse === tab.dataset.id ? useTag.setAttribute("href", "assets/img/sprite.svg#icon-heart") : null;
    });

    // console.log(gifSelect.dataset.idtemplate);
    // let id = gifSelect.dataset.idtemplate;
    // console.log(gifSelect.dataset.contains(id));
    // if(){
    //   console.log('hola le diste like a ');
    //   // gifSelect.classList.toggle("btn__likeActive");
    //   // gifSelect.firstElementChild.attributes[1].nodeValue = "assets/img/sprite.svg#icon-heart";
    // }
    // let link = document.querySelector("[data-idtemplate=tEcIyVc6ukQV2eb86t]");
    // console.log(link);
    // link.classList.toggle("btn__likeActive");
    // link.firstElementChild.attributes[1].nodeValue = "assets/img/sprite.svg#icon-heart";
  })
};


export const init = () => {
  eventos();
};
