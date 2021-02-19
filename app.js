import { fecthData } from "./assets/js/http-providers.js";



fecthData("search","homero",25,0).then( (busqueda) =>{
    console.log(busqueda);
});

console.log(`"hola mundo"`);
console.log('hola mundo');