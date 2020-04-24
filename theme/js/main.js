// Mobile Menu
const mobMenu = document.querySelector("#mobile-nav");
mobMenu.addEventListener("change", e =>
{
  window.location.pathname = e.target.selectedOptions[0].value;
});
