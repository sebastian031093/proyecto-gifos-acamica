import { fecthData } from "../js/http-providers.js"
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



export { cardstreandigs };