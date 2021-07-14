//Caja de sugerencias.

import { busquedas, sugerenciasDeBusqueda } from "../classes/card.class.js";
import {pintarSugerencias, pintarTituloandButton} from "./layoust.js";
import { setLocalSorage,} from "./localStorage.js";

//elementos a seleccionar.

//TODO: PENDIENTE LA SELECCION DEL TAG Y PONERLA EN EL INPUT

let cont = 12;

const offset = () => cont += 12;
export let arrayTotal = [];
let arrayLikes = [];
let index;

const eventos = () => {
  //Variables
  const main = document.querySelector(".main");
  const home = document.querySelector('.home');
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
      //setLocalSorage(arrbusqueda);
      arrayTotal.push(arrbusqueda);
    } else {
      console.log("sorry not");
    }
  });

  //targert en home logica de muchas cosas.
  main.addEventListener("click", async (event) => {
    
    console.log(event.target);

    //Matching strategy
    //Boton ver mas....
    if (event.target.classList.contains("btn-showMeMore")) {
      console.log("Le diste click al boton fantasma");
      let paso = offset(); // retorna el ofset.
      const btnShowMore = document.querySelector(".btn-showMeMore");
      paso >= 84
        ? (btnShowMore.style.display = "none")
        : arrayTotal.push(await busquedas(userData, paso));

      //arrayTotal.push(await busquedas(userData, paso));
    }

    //Button like style and select gif
    const gifSelect = event.target.closest(".layout__card--icons-like");

    if (!gifSelect) return;
    //console.log(gifSelect.dataset.target)
    
    const idTarget = gifSelect.dataset.target;
    console.log(idTarget);
    const tabs = document.querySelectorAll("[data-target]");
    console.log(tabs);

    const useTag = gifSelect.firstElementChild;
    //console.log(useTag);
    const idTabUse = gifSelect.firstElementChild.dataset.id;
    //console.log(idTabUse)
    const tabsUse = document.querySelectorAll("[data-id]")
    //console.log(tabsUse)

    console.log(arrayTotal);
    console.log(arrayTotal.flat());

    const giphy = arrayTotal
      .flat()
      .find((gifo) => gifo.id === gifSelect.dataset.target);
    console.log(giphy);


    tabs.forEach(tab => {
      idTarget === tab.dataset.target ? gifSelect.classList.toggle("btn__likeActive") :null;
    });

    tabsUse.forEach(tab => {
      //console.log(tab.dataset.id);
      //TODO:Cambia el icono para el dislike
      idTabUse === tab.dataset.id ? useTag.setAttribute("href", "assets/img/sprite.svg#icon-heart") : null;
       
    });

    gifSelect.classList.contains('btn__likeActive') ? arrayLikes.push(giphy) : arrayLikes.splice(index, 1);
    index = arrayLikes.findIndex( current => current.id === idTarget);
    console.log(arrayLikes);
  
  });


  nav.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("logo-img")) {
      //console.log('click en favoritos');
      home.classList.remove("disable");
      sectionMisFavoritos.classList.add("disable");
      sectionMisGifos.classList.add("disable");
    }
  });

  const favoritosContainer = document.querySelector(".favoritos");
  ulderListItemsMenu.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("favoritosList")) {
      //console.log('click en favoritos');
      sectionMisFavoritos.classList.remove("disable");
      home.classList.add("disable");
      sectionMisGifos.classList.add("disable");

       if (arrayLikes.length < 1) {
        const html = `
            <div class="favoritos__sinContenido">
                <svg class="favoritos__icon">
                    <use xlink:href="assets/img/sprite.svg#icon-heart"></use>
                </svg>
                <h2 class="favoritos__titulo">Favoritos</h2>
                <div class="favoritos__img">
                    <img src="assets/img/icon-fav-sin-contenido.svg" alt="favoritos sin contenido"  class="favoritos__img">
                </div>
                <h3 class="favoritos__texto">"¡Guarda tu primer GIFO en Favoritos</h3>
                <h3 class="favoritos__texto">para que se muestre aquí!"</h3>
            </div>
          `;
        sectionMisFavoritos.innerHTML = '';
        favoritosContainer.insertAdjacentHTML('afterbegin', html);
       } else {
         const html = `
          <div class="contenidoFavoritos">
            ${arrayLikes.map( gifo => {
              return `
              <div class="layout__card">
                <img src="${gifo.imagen}" alt="${gifo.titulo}" class="layout__img">
                <div class="layout__card--icons">
                    <button class="layout__card--btn">
                        <svg class="layout__card--icons-like btn__likeActive" data-target="${gifo.imagen}">
                            <use class="bnt-like" data-id="${gifo.idlike}" href="assets/img/sprite.svg#icon-heart"></use>
                        </svg>
                    </button>
                    <button class="layout__card--btn">
                        <svg class="layout__card--icons-download">
                            <use class="bnt-download" xlink:href="assets/img/sprite.svg#icon-cloud-download"></use>
                        </svg>
                    </button>
                    <a href="#${gifo.id}" class="ancla2"><img src="assets/img/icon-max-normal.svg" alt="icon-max"></a>
                </div>
                <div class="layout__card--titulos">
                    <h2 class="layoutsub1">
                        ${gifo.titulo}
                    </h2>
                    <h3 class="layoutsub2">
                        ${gifo.nombreusuario}
                    </h3>
                </div>
              </div>
              `;
            }).join('')}
          </div>
        `;
         sectionMisFavoritos.innerHTML = '';
         favoritosContainer.insertAdjacentHTML('afterbegin', html)
       }
    }

    if (evento.target.classList.contains("misgifosList")) {
      sectionMisGifos.classList.remove("disable");
      home.classList.add("disable");
      sectionMisFavoritos.classList.add("disable");
    }
  });
};


export  const init = () => eventos();
