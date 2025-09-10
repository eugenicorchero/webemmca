const menuToggle = document.getElementById("menu-toggle");
const dropdownMenu = document.getElementById("dropdown-menu");
const menuItems = document.querySelectorAll(".menu-item");
const content = document.querySelector(".content");

// Obrir/tancar menú desplegable
menuToggle.addEventListener("click", () => {
    dropdownMenu.style.display = 
        dropdownMenu.style.display === "block" ? "none" : "block";
});

// Quan es clica un element del menú
menuItems.forEach(item => {
    item.addEventListener("click", () => {
        const section = item.dataset.section;

        content.innerHTML = `
            <h2>${section.charAt(0).toUpperCase() + section.slice(1)}</h2>
            <p>Contingut de la secció ${section} aquí.</p>
        `;

        // Amaguem el menú després de seleccionar
        dropdownMenu.style.display = "none";
    });
});
