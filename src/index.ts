import {renderizarHeader} from "./components/NavBar/navbar"
import {renderizarSentComponent} from "./components/SentComponent/sentComponent"
import {renderizarInboxComponent} from "./components/InboxComponent/inboxComponent"


function handleRoute(path){
    //aca me va a llegar /inbox /sent / etc
    const mainSectionContainer = document.querySelector(".section-mainContent")
    
    const rutasPosibles = [{
        path: /\/inbox/,
        handler:()=> {
            //si descomento esta llamada se rompe todo
            renderizarInboxComponent(mainSectionContainer)
        }
    },
    {
        path: /\/sent/,
        handler: ()=> renderizarSentComponent(mainSectionContainer)
    }]

    for (const rutaP of rutasPosibles) {
        
        if(rutaP.path.test(path)){
            rutaP.handler()
        }
    }
}

//5) toma la url simbolica y al objeto history le updatea el pushstate, luego le pasa a handleroute la nueva ruta simbolica
function goTo(ruta){
    console.log(ruta)
    history.pushState({},"",ruta)
    handleRoute(ruta)
}

/* Inicio de aplicacion */
function main(){
    //1) Renderizo el componente de header 
    const headerContainerEl = document.querySelector(".header")
    renderizarHeader(headerContainerEl)

    //2) Tomo mis elementos botones inbox y sent y les aplico un listener
    const inboxButtonEl = document.querySelector(".inbox") as HTMLElement
    const sentButtonEl = document.querySelector(".sent") as HTMLElement

    //3) ejecuto los listener de cada boton enviando la url simbolica a goTo
    inboxButtonEl.addEventListener("click",()=>{
        goTo("/inbox")
    })

    sentButtonEl.addEventListener("click",()=>{
        goTo("/sent")
    })

    //4) cuando se carga window, le paso el pathname de location al handleRoute
    window.addEventListener("load",()=>{
        //pasarle al handleRoute el location.pathname
        handleRoute(location.pathname)
    })
}

main()