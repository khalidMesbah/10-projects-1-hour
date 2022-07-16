const popUpContainer = document.getElementById("container");
const btns = document.querySelectorAll(`.toggleModal`);

btns.forEach(btn => btn.onclick = () => popUpContainer.classList.toggle("active"));