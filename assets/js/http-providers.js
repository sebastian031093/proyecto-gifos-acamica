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
 * @param {'string'} typesearch tipo de endpoint que se va a consultar
 * @param {'string'} busqueda valor de la busqueda a realizar
 * @param {number} limit numero de busquedas a hacer
 * @param {number} offset paso de la busqueda
 * @param {string} autocompletado ???
 */
export const fecthData = async (typesearch,busqueda,limit,offset,autocompletado) =>{

    try {
        const resp = await fetch(`${URL}${typesearch}?api_key=${key}&${search}${busqueda}&${limite}${limit}&${paso}${offset}&${rating}&${language}`);

        if(!resp.ok && resp.status != 200){
            throw "No se pudo realizar la peticion";
            //TODO:AQUI PUEDES PONER EL MANEJO DEL ERROR (OSEA EL TEMPALTE DEL ERROR)
        }

        const {data} = await resp.json();

        return data


    } catch (error) {
        throw(error)
    }
}