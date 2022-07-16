const hearts = [`💜`, `💚`, `💙`, `💛`, `💝`];

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";

    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 200);
