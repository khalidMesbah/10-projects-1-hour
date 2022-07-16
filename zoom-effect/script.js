const img = document.getElementById(`img`);
const imgContainer = document.getElementById(`img-container`);
img.addEventListener(`mousemove`, (e) => {
    img.style.transformOrigin = `${e.offsetX}px ${e.offsetY}px`;
    img.src = `https://images.unsplash.com/photo-1582769923195-c6e60dc1d8dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80`;
    img.classList.add(`active`);
});
img.addEventListener(`mouseleave`, () => {
    img.classList.remove(`active`);
});