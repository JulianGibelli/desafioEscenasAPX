import "./navbar.css" 

export function renderizarHeader(dondeRenderizo){
    const nuevoContainer = document.createElement("div")
    nuevoContainer.innerHTML= `
    <nav class="navBar-container">
        <i class="fa-solid fa-gamepad icono"></i>
        <input class="navBar-input" type="text"/>
        <button class="boton">Buscar</button>
    </nav>
    `
    dondeRenderizo.appendChild(nuevoContainer)
}