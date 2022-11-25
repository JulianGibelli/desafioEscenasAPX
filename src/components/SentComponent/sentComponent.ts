//import  "./sent.css" 
import "./sent.css" 

const removeChilds = (parent) => {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
};

export function renderizarSentComponent(dondeRenderizo) {
  
  removeChilds(dondeRenderizo)
  if (!dondeRenderizo.hasChildNodes()) {
    const nuevoContainerSent = document.createElement("div");
    nuevoContainerSent.innerHTML = `
            <h1 class="prueba">HOLA soy sent</h1>
        `;

    dondeRenderizo.appendChild(nuevoContainerSent);
  }
}
