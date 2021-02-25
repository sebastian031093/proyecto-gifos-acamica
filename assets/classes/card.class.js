import { fecthData,fecthDataSubggest } from "../js/http-providers.js"
import { pintarCards,pintarpopups } from "../js/layoust.js";



const cardstreandigs = async () =>{
    let arrcards = [];

    let arrcardsfecht = await fecthData("trending", "", 5, 0, "");

    arrcardsfecht.forEach((element) => {
        let card = {
          id: element.id,
          titulo: element.title,
          nombreusuario: element.username,
          imagen: element.images.original.url,
        };

        arrcards.push(card)
    });

    // return arrcards;
    pintarCards(arrcards);
    pintarpopups(arrcards);
      
}

const sugerenciasDeBusqueda = async (value) =>{

  let arrSugerencias=[]

  let data = await fecthDataSubggest("related/",`${value}`,5);
  
  data.forEach(element => {
    let subggets = {
      sugget:element.name
    }
    arrSugerencias.push(subggets)
  });
  return arrSugerencias;
}

const busquedas = async (value) => {
  let arrcards = [];

  let arrcardsfecht = await fecthData("search",`${value}`, 12, 0, "");

  arrcardsfecht.forEach((element) => {
    let card = {
      id: element.id,
      titulo: element.title,
      nombreusuario: element.username,
      imagen: element.images.original.url,
    };

    arrcards.push(card);
  });

  return arrcards
};





export { 
  
  cardstreandigs,
  sugerenciasDeBusqueda,
  busquedas

};