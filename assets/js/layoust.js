//tempaltes de elemento html desde javascript.

let id = 0;

const idLike = () => {
  id++
  return id + ''
}

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
        clone.querySelector(".trendings__scrolling--wrapper-img").setAttribute("src", element.imagen);
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
    clone.querySelector(".layout__card--icons-like").setAttribute("data-target", `${element.id}`);
    clone.querySelector(".bnt-like").setAttribute("data-id", idLike())
    clone.querySelector(".layoutsub1").textContent = `${element.nombreusuario}`;
    clone.querySelector(".layoutsub2").textContent = `${element.titulo}`;
    fragment.appendChild(clone);
    layoutBusquedas.appendChild(fragment);

  });

};




const divpadre = document.querySelector(".home__cajaDeBusqeudas");

const pintarTituloandButton = async (valueinput) => {
  const containerText = document.querySelector(".containerText");
  const containerButton = document.querySelector(".containerButton");

  const htmltitulogift = `
    <h2 class="home__cajaDeBusqeudas--texto2">
        ${valueinput}
    </h2>
    `;

  const htmlbuttonShowMore = `
    <button class="btn-showMeMore">Ver más</button>
  `;

  containerText.innerHTML= htmltitulogift;
  containerButton.innerHTML= htmlbuttonShowMore;

};






export{
    pintarCards,
    pintarpopups,
    pintarSugerencias,
    pintarTituloandButton,
    pintarCardsBusqueda,
    idLike,
}
















