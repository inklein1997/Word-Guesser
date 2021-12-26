guesserEl = document.getElementById('guesser');
winsEl = document.getElementById('wins');
lossesEl = document.getElementById('losses');
startEl = document.getElementById('start');
timerEl = document.getElementById('timer');

const words = ["api", "window", "function", "javascript", "object", "document"];
var losses = [];
var wins = [];

var randomWord  //ex. "javascript"
var randomWordArray //ex. ["j","a","v","a","s","c","r","i","p","t"]
var blankArray  //ex. ["_","_","_"..."_"]
var blankString //ex. "_ _ _ _ _ _ _ _ _"

var guessedCorrect
var guessedIncorrect

//TASKS STILL NEED TO BE DONE
    //1. Remove event listener after timer ends
    //2. clearInterval and push loss score if start button is pressed mid count.
    //3. guess is not case sensitive

startEl.addEventListener("click", start)

function start() {
    console.log("Game has started!");
    pickRandomWord();
    generateRandomWordArray(randomWord);
    generateBlanks(randomWordArray);
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

function generateBlanks(randomWordArray) {
    blankString = "";
    for (var i = 0; i < randomWordArray.length; i++) {
        blankString = blankString.concat("_");
        if(i != randomWordArray.length-1) {
            blankString = blankString.concat(" ");
        }
    }
    guesserEl.textContent = blankString;
    blankArray = blankString.split(" ");
}

function startTimer() {
    var timeLeft = 10
    var timeInterval = setInterval(function() {
        timeLeft--
        timerEl.textContent = "TIME REMAINING: " + timeLeft;
        document.addEventListener("keypress", keypress);
        if (blankArray.includes("_") == false) {
            clearInterval(timeInterval);
            wins.push(1);
            winsEl.textContent = wins.length
        } else if(timeLeft == 0) {
            clearInterval(timeInterval);
            timerEl.textContent = "YOU LOST!";
            removeEventListener("keypress", keypress);
            losses.push(1);
            lossesEl.textContent = losses.length;
        }
    }, 1000)
}

function keypress(event) {
    key = event.key;
    var position;
    if (randomWordArray.includes(key)) {
        position = randomWordArray.indexOf(key);
        lastPosition = randomWordArray.lastIndexOf(key);
        blankArray.splice(position, 1, key);
        blankArray.splice(lastPosition, 1, key);
        var updatedBlanks = blankArray.join(" ");
        guesserEl.textContent = updatedBlanks
    }
}