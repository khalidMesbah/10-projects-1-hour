const imgContainer = document.getElementById(`imgs-container`);
const images = document.querySelectorAll(`img`);

images.forEach((img, index) => img.style.left = `${index * 100}%`);

let counter = 0;
setInterval(() => {
    if (counter === images.length) counter = 0;
    imgContainer.style.transform = `translateX(-${counter++ * 100}%)`;
}, 1000);
