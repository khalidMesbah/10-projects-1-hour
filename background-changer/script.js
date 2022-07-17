const btn = document.getElementById("btn");
const hypnosisBtn = document.getElementById(`hypnosis-btn`);
let interval;
let toggle = 1;
btn.addEventListener("click", () => {
    clearInterval(interval);
    toggle = 1;
    changeBackgroundColor();
});

hypnosisBtn.addEventListener("click", () => {
    if (toggle) {
        interval = setInterval(changeBackgroundColor, 50);
        toggle = 0;
    } else {
        const interval_id = window.setInterval(function () { }, Number.MAX_SAFE_INTEGER);
        for (let i = 1; i < interval_id; i++) {
            window.clearInterval(i);
        }
        toggle = 1;
    }
});

const changeBackgroundColor = () => {
    document.body.style.background = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
};