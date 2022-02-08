const toggler = document.querySelector(".toggler");
const menu = document.querySelector(".menu");

toggler.addEventListener("click", () => {
    toggler.classList.toggle("toggler--active");
    menu.classList.toggle("menu--active");
})