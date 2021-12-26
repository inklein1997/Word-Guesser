guesserEl = document.getElementById('guesser');
winsEl = document.getElementById('wins');
lossesEl = document.getElementById('losses');
startEl = document.getElementById('start');
timerEl = document.getElementById('timer');

const words = ["api", "dom", "function", "javascript", "object"];

var randomWord

startEl.addEventListener("click", start)

function start() {
    console.log("Game has started!");
    randomWord = pickRandomWord();
}