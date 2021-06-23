//tempaltes de elemento html desde javascript.

import { busquedas } from "../classes/card.class.js";

const pintarCards = (arrcards) => {
    // console.log(arrcards);

    // arrcards.forEach((element) => {
    //     console.log(element.id);
    // });

    const divwrapper = document.querySelector('.trendings__scrolling--wrapper'); //DONDE VA IR NUESTRO TEMPLATE
    
    arrcards.forEach((element) => {

        const tempaltecard = document.querySelector("#template-card").content; //CAPTURAMOS NUESTRO TEMPLATE
        const clone = tempaltecard.cloneNode(true); //es todo el template clonado, EN LOS LOOPS NO MANIPULAMOS DIRECTAMENTE ESTE TEMPLATE, SINO QUE LO CLONAMOS
        const fragment = document.createDocumentFragment(); //sumamente efectivo para crear loops, evita el reflow(RENDERISADOS INECESARIOS)
        clone.querySelector(".containerimg__img").setAttribute('src', element.imagen);
        clone.querySelector(".ancla").setAttribute("href",`#${element.id}`);
        clone.querySelector(".sub1").textContent = `${element.nombreusuario}`;
        clone.querySelector(".sub2").textContent = `${element.titulo}`;
        fragment.appendChild(clone);
        console.log(divwrapper.appendChild(fragment));
        divwrapper.appendChild(fragment);
    });
}

const pintarpopups = (arrcards) =>{

    const main = document.querySelector(".main");

    arrcards.forEach(element => {
        const templatepopup = document.querySelector("#template-popup").content;
        const clone = templatepopup.cloneNode(true);
        const fragment = document.createDocumentFragment();
        //las partes del clone del fragment que vamos a modificar.
        clone.querySelector(".popup__content--imgcontainer-img").setAttribute('src', element.imagen);
        clone.querySelector(".popup").setAttribute("id",`${element.id}`);
        clone.querySelector(".popup__element--titulos-titulo").textContent = `${element.nombreusuario}`;
        clone.querySelector(".popup__element--titulos-subtitulo").textContent = `${element.titulo}`;
        fragment.appendChild(clone)
        main.appendChild(fragment);

    });

}


const searchbox = document.querySelector(".searchbox__items");
const pintarSugerencias = (arrSuggest) => {
    let listaData;

    if (arrSuggest.length > 0 ) {
        listaData = arrSuggest.join('');
    }else{
        listaData = '';
    }

    searchbox.innerHTML = listaData;
}


//pintar busquedas de la basrra de busquedas.

const pintarCardsBusqueda = (arrcards) => {
  const layoutBusquedas = document.querySelector(".layout");

  arrcards.forEach((element) => {
    const tempaltecard = document.querySelector("#templateBusquedas").content;
    const clone = tempaltecard.cloneNode(true);
    const fragment = document.createDocumentFragment();

    clone.querySelector(".layout__img").setAttribute("src", element.imagen);
    clone.querySelector(".ancla2").setAttribute("href", `#${element.id}`);
    clone.querySelector(".layoutsub1").textContent = `${element.nombreusuario}`;
    clone.querySelector(".layoutsub2").textContent = `${element.titulo}`;
    fragment.appendChild(clone);
    layoutBusquedas.appendChild(fragment);
  });

};


const pintargifosbusquedas = async (value) =>{
    pintarCardsBusqueda(await busquedas(value));
}

const divpadre = document.querySelector(".home__cajaDeBusqeudas");


const pintarTemplateBusqueda = (valueinput) => {

    const htmlLayout = `
        <h2 class="home__cajaDeBusqeudas--texto2">
            ${valueinput}
        </h2>
        <div class="layout">
            ${pintargifosbusquedas(valueinput)}
        </div>
        <div class="layout__btn" class="home__cajaDeBusqeudas--button" >
            <a class="btn btn-purple" href="#">Ver mas....</a>
        </div>
    `;
    
    divpadre.innerHTML = htmlLayout;
    //TODO: TERMINA EL BOTON DE VER MAS...

    // setTimeout(() => {
        const btnvermas = divpadre.querySelector(".layout__btn");
        const layoutbusqueda = document.querySelector(".layout");
        let incremento = 2;
        
        btnvermas.addEventListener("click", async (evento) => {
            console.log(evento.isTrusted); 
            evento.preventDefault(); //Prevenir el evento por default.
            incremento += 2
            console.log(incremento);
            
            console.log(await busquedas(valueinput, incremento));
            
             
        });
    // }, 1);
}






export{
    pintarCards,
    pintarpopups,
    pintarSugerencias,
    pintarTemplateBusqueda,
}
















