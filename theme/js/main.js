// Mobile Menu
const mobMenu = document.querySelector("#mobile-nav");
mobMenu.addEventListener("change", e =>
{
    const optionTitle = e.target.selectedOptions[0].label.split(' ').join('');
    const optgroupLabel = e.target.selectedOptions[0].parentElement.label;
    window.location.pathname = `${optgroupLabel}/${optionTitle}`;
});
