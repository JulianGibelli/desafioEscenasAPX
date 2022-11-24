import "./sent.css"

export function renderizarSentComponent(dondeRenderizo){
    const nuevoContainerSent = document.createElement("div")
    nuevoContainerSent.innerHTML= `
        <h1>HOLA</h1>
    `
    dondeRenderizo.appendChild(nuevoContainerSent)
}