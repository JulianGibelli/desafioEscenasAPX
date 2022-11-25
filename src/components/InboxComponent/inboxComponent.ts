import "./inbox.css"
//import "../NavBar/navbar.css" 

const removeChilds = (parent) => {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
};

export function renderizarInboxComponent(dondeRenderizo) {
  
  removeChilds(dondeRenderizo)
  if (!dondeRenderizo.hasChildNodes()) {
    const nuevoContainerInbox = document.createElement("div");
    nuevoContainerInbox.innerHTML = `
            <h1 class="prueba2">HOLA soy inbox</h1>
        `;

    dondeRenderizo.appendChild(nuevoContainerInbox);
  }
}
