// "use strict";

const inputNumber = document.querySelector(".input-data");
const guessBtn = document.querySelector(".guess");
const playAgainBtn = document.querySelector(".play-again");
const message = document.querySelector(".message");
const noOfChances = document.querySelector(".chance-value");
let chances = Number(noOfChances.textContent);
let randomValue = Math.floor(Math.random() * 20 + 1);

// function updateChances(n) {
//   noOfChances.textContent = n;
// }

function checkChances(chances) {
  if (chances === 0) {
    message.textContent = "Game Over 🔴❌";
  }
  noOfChances.textContent = chances;
}

function checkNumber(inputNumber) {
  if (chances === 0) return;
  console.log(randomValue);
  if (inputNumber > randomValue && chances > 0) {
    message.textContent = "Too High 📈";
    chances--;
    checkChances(chances);
    // updateChances(chances);
  } else if (inputNumber < randomValue && chances > 0) {
    message.textContent = "Too low 📉";
    message.style.color = "#8080ff";
    chances--;
    checkChances(chances);
    // updateChances(chances);
  } else {
    console.log("Hurray!! You guessed it..");
    message.textContent = "Hurray!! You guessed it.. 🥳🎉🎊";
    message.style.color = "#00b300";
  }
}

guessBtn.addEventListener("click", () => {
  if (inputNumber.value === "") alert("Enter a value");
  else if (Number(inputNumber.value > 20)) alert("Enter Number less than 20");
  else {
    checkNumber(Number(inputNumber.value));
  }
});

playAgainBtn.addEventListener("click", () => {
  message.textContent = "";
  inputNumber.value = "";
  noOfChances.textContent = "5";
  randomValue = null;
  chances = 5;
});
