// Project # 3

const dropdown = document.querySelector(".dropdown");
const dropdownLink = document.querySelector(".dropdown__link");

dropdown.addEventListener("click", (e) => {
    e.preventDefault();
    dropdown.classList.toggle("dropdown--active") ? dropdownLink.innerHTML = "Close" : dropdownLink.innerHTML = "Open";
})