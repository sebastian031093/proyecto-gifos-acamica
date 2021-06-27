import { pintarCardsBusqueda, pintarpopups } from "./layoust.js";



function setLocalSorage(arry) {
    localStorage.setItem('gifisInfo',JSON.stringify(arry))
}

function getLocalStorage(key) {
    const data = JSON.parse(localStorage.getItem(key));
    console.log(data);

    if(!data) return;

    pintarCardsBusqueda(data);
    pintarpopups(data);
}


export{
    setLocalSorage,
    getLocalStorage
}