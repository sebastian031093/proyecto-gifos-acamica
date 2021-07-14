
import { fecthData,fecthDataSubggest } from "../js/http-providers.js"
import { pintarCards,pintarCardsBusqueda,pintarpopups } from "../js/layoust.js";

let id = 0;

const idLike = () => {
  id++;
  return id + "";
};


const cardstreandigs = async () =>{
    let arrcards = [];

    let arrcardsfecht = await fecthData("trending", "", 5, 0, "");


  //TODO: Crea una clase pata el gif, donde puedas poner sus propiedades y metodos.
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
    return arrcards;
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



const busquedas = async (value,paso) => {
  
  let arrcards = [];
  let arrcardsfecht = await fecthData("search",`${value}`, 12, paso);
  arrcardsfecht.forEach((element) => {
    let card = {
      id: element.id,
      titulo: element.title,
      nombreusuario: element.username,
      imagen: element.images.original.url,
      idlike: idLike(),
    };
    
    arrcards.push(card);
  });
  
  //console.log(arrcards);
  pintarCardsBusqueda(arrcards);
  pintarpopups(arrcards);
  return arrcards;
};





export { 
  cardstreandigs,
  sugerenciasDeBusqueda,
  busquedas
};