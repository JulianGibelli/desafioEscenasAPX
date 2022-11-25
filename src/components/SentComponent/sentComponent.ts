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
            <ul>
              <li><a href="/inbox/prueba4">prueba 4</a></li>
              <li><a href="/inbox/prueba5">prueba 5</a></li>
              <li><a href="/inbox/prueba6">prueba 6</a></li>
            </ul>
        `;

    dondeRenderizo.appendChild(nuevoContainerSent);
  }
}
