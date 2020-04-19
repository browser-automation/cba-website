const {message} = require("./_module");

console.log(message);

// Mobile Menu
const mobMenu = document.querySelector("#mobile-nav");
mobMenu.addEventListener("change", e =>
{
  const data = document.querySelector(".data");
  data.textContent = `Data to be added here.`;
});
