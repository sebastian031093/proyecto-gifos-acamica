import { cardstreandigs } from "./assets/classes/card.class.js";
import { eventoDark } from "./assets/js/darkmode.js";
import { init } from "./assets/js/eventos.js";
import { getLocalStorage } from "./assets/js/localStorage.js";


(()=>{

    cardstreandigs().then((info) => {});
    getLocalStorage("gifisInfo");
    init();
    eventoDark();

    let cositas = ["manzanas", "peras", "mas cosas"]

    const imprimeCosas = function (array) {
        console.log(array);
    }

    imprimeCosas(cositas);

})();







console.log(`"hola mundo"`);
console.log("hola mundo");
