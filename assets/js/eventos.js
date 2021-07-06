//Caja de sugerencias.

import { busquedas, sugerenciasDeBusqueda } from "../classes/card.class.js";
import { pintarSugerencias, pintarTituloandButton} from "./layoust.js";
import { setLocalSorage,} from "./localStorage.js";

//elementos a seleccionar.

//TODO: PENDIENTE LA SELECCION DEL TAG Y PONERLA EN EL INPUT

let cont = 12;

const offset = () => cont += 12;


const eventos = () => {
  //Variables
  const home = document.querySelector(".home");
  const sectionMisFavoritos = document.querySelector(".favoritos");
  const sectionMisGifos = document.querySelector(".misGifos");
  const nav= document.querySelector('.menu');
  const input = document.querySelector(".searchbox__input");
  const searchbox = document.querySelector(".home__searchbox");
  const searchbox__items = document.querySelector(".searchbox__items");
  const btnsearch = document.querySelector(".btnsearch");
  const ulderListItemsMenu = document.querySelector(".menu__items");

  // informacion que ingresa el usuario.
  let userData = "";
  //Evento de captura de informacion del buscador
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
  //Evento de busqueda en l barra de busqueda
  searchbox__items.addEventListener("click", (evento) => {
    //console.log(evento)
    const nombreElamento = evento.target.firstChild.textContent;
    // console.log(nombreElamento);
    userData = input.value = nombreElamento;
  });
  //Array donde se guardaran las busquedas
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
    event.preventDefault();
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

    //Button like style and select gif
    const gifSelect = event.target.closest(".layout__card--icons-like");

    if (!gifSelect) return;
    //console.log(gifSelect.dataset.target)
    
    const idTarget = gifSelect.dataset.target;
    const tabs = document.querySelectorAll("[data-target]");
    //console.log(tabs);

    const useTag = gifSelect.firstElementChild;
    //console.log(useTag);
    const idTabUse = gifSelect.firstElementChild.dataset.id;
    //console.log(idTabUse)
    const tabsUse = document.querySelectorAll("[data-id]")
    //console.log(tabsUse)


    tabs.forEach(tab => {
      // console.log(tab.dataset.target);
      idTarget === tab.dataset.target ? gifSelect.classList.toggle("btn__likeActive") :null;
    });

    tabsUse.forEach(tab => {
      //console.log(tab.dataset.id);
      idTabUse === tab.dataset.id ? useTag.setAttribute("href", "assets/img/sprite.svg#icon-heart") : null;
    });
  })

  nav.addEventListener('click', (evento) =>{
    if (evento.target.classList.contains("logo-img")) {
      //console.log('click en favoritos');
      home.classList.remove("disable");
      sectionMisFavoritos.classList.add("disable");
      sectionMisGifos.classList.add('disable')
    }
  })

  ulderListItemsMenu.addEventListener('click', (evento) => {
    evento.preventDefault();
    if(evento.target.classList.contains('favoritosList')){
      //console.log('click en favoritos');
      sectionMisFavoritos.classList.remove('disable');
      home.classList.add('disable');
      sectionMisGifos.classList.add("disable");
    }
    
    if (evento.target.classList.contains("misgifosList")) {
      sectionMisGifos.classList.remove("disable");
      home.classList.add("disable");
      sectionMisFavoritos.classList.add("disable");
    }


  })

  












};


export const init = () => {
  eventos();
};
