guesserEl = document.getElementById('guesser');
winsEl = document.getElementById('wins');
lossesEl = document.getElementById('losses');
startEl = document.getElementById('start');
timerEl = document.getElementById('timer');

const words = ["api", "window", "function", "javascript", "object", "document", "dom"];
var losses = [];
var wins = [];

var randomWord  //ex. "javascript"
var randomWordArray //ex. ["j","a","v","a","s","c","r","i","p","t"]
var blankArray  //ex. ["_","_","_"..."_"]
var blankString //ex. "_ _ _ _ _ _ _ _ _"

var click

//TASKS STILL NEED TO BE DONE
    //2. clearInterval and push loss score if start button is pressed mid count.
    //3. guess is not case sensitive
    //4. Keyboard accessible for mobile device.

startEl.addEventListener("click", start)

function start() {
    click = true
    console.log(click)
    pickRandomWord();
    generateRandomWordArray(randomWord);
    generateBlanks(randomWordArray);
    startTimer();
}

function pickRandomWord() {
    randomWord = words[Math.floor(Math.random()*words.length)];
}

function generateRandomWordArray(randomWord) {
    randomWordArray = randomWord.split('');
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
    for (var i= 0;i <randomWordArray.length; i++) {
    if (randomWordArray.includes(" ")) {
        var spacePosition = randomWordArray.indexOf(" ");
        randomWordArray.splice(spacePosition, 1, "_")
        blankArray.splice(spacePosition, 1, " ")
        }
    }
    console.log(blankArray)
}

function startTimer() {
    var timeLeft = 10.0
    click = false
    console.log(click)
    var timeInterval = setInterval(function() {
        timeLeft-=0.1
        timerEl.textContent = "TIME REMAINING: " + timeLeft.toFixed(1);
        document.addEventListener("keypress", keypress);
        if (blankArray.includes("_") == false) {
            clearInterval(timeInterval);
            wins.push(1);
            winsEl.textContent = wins.length;
            document.removeEventListener("keypress",keypress)
        } else if(timeLeft <= 0) {
            clearInterval(timeInterval);
            timerEl.textContent = "YOU LOST!";
            losses.push(1);
            lossesEl.textContent = losses.length;
            document.removeEventListener("keypress",keypress)
        } else if (click == true) {                             //this is supposed to reset game...
            console.log("button was clicked midgame")
            clearInterval(timeInterval);
            losses.push(1);
            lossesEl.textContent = losses.length;
            document.removeEventListener("keypress",keypress);
            // start();
        }
    }, 100)
}

function keypress(event) {
    key = event.key;

        for (var i = 0; i < randomWordArray.length; i++) {
            if (randomWordArray.includes(key)) {
        var position = randomWordArray.indexOf(key);
        randomWordArray.splice(position, 1, "_");
        blankArray.splice(position, 1, key);
        }    
        var updatedBlanks = blankArray.join(" "); 
        } guesserEl.textContent = updatedBlanks
}
