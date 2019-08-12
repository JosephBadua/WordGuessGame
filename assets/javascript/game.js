var clues = ["revolver","briefcase","poison",
            "photo","shovel","stopwatch",
            "footprint",
            "knife", "rope", "candlestick", "pipe",
            "bat"];
var listLetters = ["a","b","c","d","e","f","g",
                    "h","i","j","k","l","m","n",
                    "o","p","q","r","s","t","u",
                    "v","w","x","y","z"];

var guessesDone = [];
var underscore = [];
var currentclue = "";
var cluesFound = 0;
var cluesLost = 0;
var guessesLeft = 10;

var directionstext = document.getElementById("introtext");
var winsText = document.getElementById("wins");
var lossText = document.getElementById("clueslost");
var guessesMade = document.getElementById("lettersguessedalready");
var guessCount = document.getElementById("numberofguessesleft");
var wordGuess = document.getElementById("wordtoGuess");
var hint = document.getElementById("imgtext");
var img = document.getElementById("clueimg");


document.onkeyup = function(event) {
    var userGuess = event.key;
    
    if(listLetters.indexOf(userGuess) == -1) {
        return;
    }
    if(currentclue.includes(userGuess)) {
        for (i = 0; i < currentclue.length; i++) {
            if (currentclue.charAt(i) == userGuess) {
                underscore[i] = userGuess;
                currentclue.textContent = underscore.join(" ");
                console.log(currentclue);
            }
        }
    } else if (guessesDone.includes(userGuess)) {
        guessesMade.textContent = guessesLeft;
    } else {
        guessesDone.push(userGuess);
        guessesLeft--;
    }
    if(currentclue.includes("_") === true) {
        cluesFound++;
        alert("You've found a clue! On to the next one!");
        reset();
    }
    if (guessesLeft === 0 ) {
        cluesLost++;
        alert("You couldn't figure it out. No worries!");
        reset()
    }
    function reset(){
        guessesLeft = 10;
        newchoice();
        guessesDone = [];
    };
};

function newchoice() {
    var systemchoice = clues[Math.floor(Math.random() * clues.length)];
        currentclue = systemchoice;
        console.log(currentclue);
        for (i = 0; i < currentclue.length; i++) {
            if (currentclue[i] === (" ")) {
                underscore.push("_");
            }
        }
    
};
