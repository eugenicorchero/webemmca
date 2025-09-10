document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  btn.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
});
