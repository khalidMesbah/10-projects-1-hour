const textEl = document.getElementById(`text`);
const phrases = [
    `Hello, my name is Khalid Mesbah`,
    `I love coding,`,
    "Software Engineer Specialized in Web Development",
    "Front-End Web Developer",
    "Web Developer",
    `I Code For Fun & Food - Learning/Coding Machine`
];
let phraseChars = [];
let i = 0, j = 0;
let is_popping = false;
let is_last_char = false;
function loop() {
    is_last_char = false;
    textEl.textContent = phraseChars.join(``);
    if (i < phrases.length) {
        if (!is_popping && j <= phrases[i].length) {
            phraseChars.push(phrases[i][j++]);
            if (j === phrases[i].length) {
                is_last_char = true;
                textEl.textContent = phraseChars.join(``);
            }
        } else if (j === 0) {
            i++;
            j = 0;
            phraseChars = [];
            is_popping = false;
        } else {
            is_last_char = false;
            is_popping = true;
            phraseChars.pop();
            j--;
        }
    } else {
        i = 0;
    }
    const speedUp = Math.random() * (80 - 50) + 50;
    const normalSpeed = Math.random() * (200 - 100) + 100;
    const time = is_last_char ? 1000 : is_popping ? speedUp : normalSpeed;
    setTimeout(loop, time);
}
loop();
