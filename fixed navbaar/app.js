// ********** set date ************
document.getElementById(`date`).textContent = new Date().getFullYear();
// ********** close links ************
const navToggleBtn = document.querySelector(`.nav-toggle`);
const linksContainer = document.querySelector(`.links-container`);
const links = document.querySelector(`.links`);
navToggleBtn.addEventListener(`click`, () => {
    linksContainer.getBoundingClientRect().height ?
        linksContainer.style.height = `${0}px` :
        linksContainer.style.height = `${links.getBoundingClientRect().height}px`;
});
// ********** fixed navbar ************
const topLink = document.querySelector(`.top-link`);
const navbar = document.getElementById(`nav`);
window.addEventListener(`scroll`, () => {
    const navbarHeight = navbar.getBoundingClientRect().height;
    window.scrollY > navbarHeight ?
        (navbar.classList.add(`fixed-nav`), topLink.classList.add(`show-link`)) :
        (navbar.classList.remove(`fixed-nav`), topLink.classList.remove(`show-link`));
});
// ********** smooth scroll ************
const scrollLinksElements = document.querySelectorAll(`.scroll-link`);
scrollLinksElements.forEach(link => {
    link.addEventListener(`click`, e => {
        e.preventDefault();
        const element = document.getElementById(link.getAttribute(`href`).slice(1));
        const fixedNav = navbar.classList.contains(`fixed-nav`);
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const navbarHeight = navbar.getBoundingClientRect().height;
        linksContainer.style.height = `${0}px`;
        let position = element.offsetTop - navbarHeight;
        if (!fixedNav) position -= navbarHeight;
        if (navbarHeight > 82) position += containerHeight;
        window.scrollTo({
            left: 0,
            top: position,
            behavior: "smooth"
        });
    });
});
