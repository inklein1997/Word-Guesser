guesserEl = document.getElementById('guesser');
winsEl = document.getElementById('wins');
lossesEl = document.getElementById('losses');
startEl = document.getElementById('start');
timerEl = document.getElementById('timer');

const words = ["api", "dom", "function", "javascript", "object"];

var randomWord  //ex. "javascript"
var randomWordArray //ex. ["j","a","v","a","s","c","r","i","p","t"]
var blankArray  //ex. ["_","_","_"..."_"]
var blankString //ex. "_ _ _ _ _ _ _ _ _"

var guessedCorrect
var guessedIncorrect

startEl.addEventListener("click", start)

function start() {
    console.log("Game has started!");
    pickRandomWord();
    generateRandomWordArray(randomWord);
//     generateBlanks(randomWordArray);
//     console.log(blankString);
//     console.log(blankArray);
    startTimer();
}

function pickRandomWord() {
    randomWord = words[Math.floor(Math.random()*words.length)];
    console.log(randomWord);
}

function generateRandomWordArray(randomWord) {
    randomWordArray = randomWord.split('');
    console.log(randomWordArray);
}

// function generateBlanks(randomWordArray) {
//     blankString = randomWordArray.map(letter => (guessedCorrect.indexOf(letter) >= 0 ? letter : "_")).join(' ');
//     blankArray = blankString.split('');
// }

function startTimer() {
    var timeLeft = 10
    var timeInterval = setInterval(function() {
        timeLeft--
        timerEl.textContent = "TIME REMAINING: " + timeLeft;
        if (timeLeft == 0) {
            clearInterval(timeInterval);
            timerEl.textContent = "YOU RAN OUT OF TIME"
        }
    }, 1000)
}
