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
            <ul>
              <li><a href="/inbox/prueba1">prueba 1</a></li>
              <li><a href="/inbox/prueba2">prueba 2</a></li>
              <li><a href="/inbox/prueba3">prueba 3</a></li>
            </ul>
        `;

    dondeRenderizo.appendChild(nuevoContainerInbox);
  }
}
