const body = document.body;
const audios = [...document.getElementsByTagName(`audio`)];

audios.forEach(audio => {
    const button = document.createElement(`button`);
    button.textContent = audio.id;
    button.addEventListener(`click`, () => {
        audios.forEach(audio => audio.pause(), audio.currentTime = 0),audio.play();
    });
    body.appendChild(button);
});
