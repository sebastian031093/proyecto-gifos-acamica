//aqui estaran los enpoinst a utilizar


//search
//https://api.giphy.com/v1/gifs/search?api_key=xMB8GGSNCJYtHDpFSjiPNSFt6SneTN2V&q=&limit=25&offset=0&rating=g&lang=en

//treadings
//https://api.giphy.com/v1/gifs/trending?api_key=xMB8GGSNCJYtHDpFSjiPNSFt6SneTN2V&limit=25&rating=g

//Autocomplete API
//api.giphy.com/v1/gifs/search/tags?api_key=xMB8GGSNCJYtHDpFSjiPNSFt6SneTN2V&q=&limit=25&offset=0

//Search Suggestions
//api.giphy.com/v1/tags/related?api_key=xMB8GGSNCJYtHDpFSjiPNSFt6SneTN2V&{term}

//parametros de la funcion 
//tipo de endpoint: search,treadings,autocomlete,suggets
//limite
//offset


const URL = "https://api.giphy.com/v1/gifs/";
const key = "xMB8GGSNCJYtHDpFSjiPNSFt6SneTN2V";
const search = "q="
const limite = "limit=";
const paso = "offset=";
const rating = "rating=g";
const language = "lang=en";

/**
 * esta funcion trae las informacion de la api giphy
 * @param {'search'} typesearch string
 * @param {'homero'} busqueda string
 * @param {25} limit number
 * @param {0} offset number
 * @param {?} autocompletado string
 */
export const fecthData = async (typesearch,busqueda,limit,offset,autocompletado) =>{

    const resp = await fetch(`${URL}${typesearch}?api_key=${key}&${search}${busqueda}&${limite}${limit}&${paso}${offset}&${rating}&${language}`);
    const data = await resp.json()

    console.log(data);
}