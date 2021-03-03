//tempaltes de elemento html desde javascript.

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
        // console.log(divwrapper.appendChild(fragment));
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


const divpadre = document.querySelector(".home__cajaDeBusqeudas");

const gifosSeccion = (arr) =>{
    let elementos = [];
    // debugger
    arr.forEach(element => {
        let elemento = `
            <div class="layout__card">
                <div class="layout__card--containerimg">
                    <img src=${element.imagen} alt="img trendings" class="layout__img">
                </div>
                <div class="layout__card--icons">
                    <img src="/assets/img/icon-fav.svg" alt="" class="icon-fav">
                    <img src="/assets/img/icon-download.svg" alt="icon-download">
                    <a href=#${element.id} class="ancla"><img src="/assets/img/icon-max-normal.svg" alt="icon-max"></a>
                </div>
                <div class="layout__card--titulos">
                    <h2 class="layoutsub1">
                        ${element.nombreusuario}
                    </h2>
                    <h3 class="layoutsub2">
                        ${element.titulo}
                    </h3>
                </div>
            </div>
        `;
        elementos.push(elemento)
    });

    let templateimg = '';
    for (let index = 0; index < elementos.length; index++) {
        templateimg += elementos[index];
    }

    return templateimg;
}

const pintarTituloBusqueda = (valueinput, arrbusqueda) => {

    const htmlLayout = `
        <h2 class="home__cajaDeBusqeudas--texto2">
            ${valueinput}
        </h2
        <div class="layout">
            ${gifosSeccion(arrbusqueda)}
        </div>
        <div class="layout__btn" class="home__cajaDeBusqeudas--button" >
            <a class="btn btn-purple" href="#">Ver mas....</a>
        </div>
    `;
    
    const divCardsBusquedas = document.createElement("div");
    divCardsBusquedas.classList.add('contenedorBusquedas');
    divCardsBusquedas.innerHTML = htmlLayout;
    divpadre.append(divCardsBusquedas);
}



export{
    pintarCards,
    pintarpopups,
    pintarSugerencias,
    pintarTituloBusqueda
}
















