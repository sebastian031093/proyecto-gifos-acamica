const menu = document.querySelector(".menu__items");
const inputDarck = document.querySelector(".btn-darkmode");
const body = document.querySelector('.body')

const eventoDark = () =>{

    menu.addEventListener('click', (event) =>{
        console.log(event.target);

        if(event.target.classList.contains("darkMode") || event.target.classList.contains("listdark")){
            
            !inputDarck.checked ? (inputDarck.checked = true) : (inputDarck.checked = false)

        }
    })
}



export {
    eventoDark,
}


