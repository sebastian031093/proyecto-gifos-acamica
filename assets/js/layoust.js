//tempaltes de elemento html desde javascript.



const pintarCards = (arrcards) => {
    // console.log(arrcards);

    // arrcards.forEach((element) => {
    //     console.log(element.id);
    // });

    const divwrapper = document.querySelector('.trendings__scrolling--wrapper'); 
    
    arrcards.forEach((element) => {

        const tempaltecard = document.querySelector("#template-card").content;
        const clone = tempaltecard.cloneNode(true); //es todo el template clonado
        const fragment = document.createDocumentFragment();
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
        clone.querySelector(".popup__content--imgcontainer-img").setAttribute('src', element.imagen);
        clone.querySelector(".popup").setAttribute("id",`${element.id}`);
        clone.querySelector(".popup__element--titulos-titulo").textContent = `${element.nombreusuario}`;
        clone.querySelector(".popup__element--titulos-subtitulo").textContent = `${element.titulo}`;
        fragment.appendChild(clone)
        main.appendChild(fragment);

    });

}













export{
    pintarCards,
    pintarpopups
}
















