// ========= Utility functions =========
import {wordList} from "./words.js";

function random(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

// ========= Selected elements =========
const inputGuess = document.querySelector("#inputGuess");
const form = document.querySelector("form");
const tableGuesses = document.querySelector("#guesses");
const divTheWord = document.querySelector("details > div");
const spanError = document.querySelector("#error");
const btnGuess = document.querySelector("form > button");
const divEndOfGame = document.querySelector("#end-of-game");
const btnRestart = document.querySelector("#restart");

// ========= Solution =========

let randomWord = wordList[random(0, wordList.length)]
divTheWord.innerHTML = randomWord

divEndOfGame.onclick = function(event) {
    window.location.reload();
}

form.onsubmit = function (event) {
    event.preventDefault();
    inputGuess.select()
    spanError.innerHTML = ""

    check5()

    let row = document.createElement('tr')

    let guessTD = document.createElement('td')
    guessTD.innerHTML = inputGuess.value

    let matchTD = document.createElement('td')
    matchTD.innerText = checkOKcharacters() // itt logol

    row.appendChild(guessTD)
    row.appendChild(matchTD)

    if(inputGuess.value === randomWord) {
        row.className = 'correct'
        divEndOfGame.removeAttribute("hidden")
    }

    tableGuesses.appendChild(row)
}

function check5() {
    if (inputGuess.value.length !== 5) {
        spanError.innerHTML = "The length of the word is not 5!"
    } else if (!wordList.includes(inputGuess.value)) {
        spanError.innerHTML = "The word is not considered acceptable!"
    }
}

function checkOKcharacters() {
    let matches = 0

    for (let i = 0; i < inputGuess.value.length; i++) {
        if (randomWord[i] === inputGuess.value[i]) {
            matches++
        }
    }

    console.log(matches)
    return matches
}
