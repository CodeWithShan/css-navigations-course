const dock = document.querySelector("#dock");
const navbarAction = document.querySelector("#navbar-action");
const anchors = document.querySelectorAll("a[href^='#']");

const toggleClasses = () => {
    dock.classList.toggle('dock-active');
    navbarAction.classList.toggle('navbar-action--active');
    navbarAction.classList.toggle('navbar-action--hover');
    document.body.classList.toggle('oy-hidden');
}


navbarAction.addEventListener('click', () => {
    toggleClasses();
})




if (anchors.length >= 1) {
    anchors.forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            toggleClasses();

            let destination = document.querySelector(anchor.hash);
            destination.scrollIntoView({
                behavior: "smooth",
                alignToTop: true
            })
        })
    })
}
