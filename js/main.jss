// Seleccionem tots els elements del menú
const menuItems = document.querySelectorAll('.menu-item');
const content = document.querySelector('.content');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Eliminem l'estat actiu de l'antic element seleccionat
        document.querySelector('.menu-item.active')?.classList.remove('active');
        item.classList.add('active');

        // Agafem la secció seleccionada
        const section = item.dataset.section;

        // Actualitzem el contingut principal amb HTML bàsic
        content.innerHTML = `
            <h1>${section.charAt(0).toUpperCase() + section.slice(1)}</h1>
            <p>Contingut de la secció ${section} aquí.</p>
        `;
    });
});
