// DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  if (!toggle || !menu) return;

  // toggle handler: support click i touchstart
  function toggleMenu(ev) {
    // per touchstart evitar doble event
    if (ev && ev.type === 'touchstart') ev.preventDefault();
    const isOpen = menu.classList.toggle('open');
    // atributs d'accessibilitat
    menu.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

  toggle.addEventListener('click', toggleMenu, {passive: true});
  toggle.addEventListener('touchstart', toggleMenu, {passive: false});

  // tancar si fem click fora del menú (només quan està obert i en pantalles petites)
  document.addEventListener('click', (e) => {
    if (!menu.classList.contains('open')) return;
    const target = e.target;
    if (target === toggle || menu.contains(target)) return;
    // si som més amples que 768 no cal (en desktop menú és sempre visible)
    if (window.innerWidth >= 768) return;
    menu.classList.remove('open');
    menu.setAttribute('aria-hidden', 'true');
    toggle.setAttribute('aria-expanded', 'false');
  });

  // tancar amb Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      menu.classList.remove('open');
      menu.setAttribute('aria-hidden', 'true');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  // quan canviem de mida, assegurem-estat correcte
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      // en wide, assegurem que no tenim l'estat "open" forçat (la CSS mostrarà el menú)
      menu.classList.remove('open');
      menu.setAttribute('aria-hidden', 'false');
      toggle.setAttribute('aria-expanded', 'false');
    } else {
      // en narrow, menu hidden per defecte
      menu.setAttribute('aria-hidden', 'true');
    }
  });
});
