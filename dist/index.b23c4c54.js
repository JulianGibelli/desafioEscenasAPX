function renderizarHeader(dondeRenderizo) {
    const nuevoContainer = document.createElement("div");
    nuevoContainer.innerHTML = `
    <nav class="navBar-container">
        <i class="fa-solid fa-gamepad icono"/>
        <input type="text"/>
        <button class="boton">Buscar</button>
    </nav>
    `;
    dondeRenderizo.appendChild(nuevoContainer);
}

//# sourceMappingURL=index.b23c4c54.js.map
