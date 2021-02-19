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
const limite = "limit=";
const offset = "offset=";
const rating = "rating=g";
const language = "lang=en";

/**
 * Esta funcion es llamada para traer la info de giphy
 * @param {endpoint} typesearch string
 * @param {limite} limit number
 * @param {paso} offset number
 */
const fecthData = (typesearch,limit,offset) =>{

}