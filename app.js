const ComputerChoiceDisplay = document.getElementById("computer-choice");
const UserChoiceDisplay = document.getElementById("user-choice");
const ResultDisplay = document.getElementById("result");
const PossibleChoices = document.querySelectorAll("button");

let computerchoice;
let userchoice;
let result;

PossibleChoices.forEach((PossibleChoice) =>
  PossibleChoice.addEventListener("click", (e) => {
    userchoice = e.target.id;
    UserChoiceDisplay.innerHTML = userchoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerchoice = "rock";
  }
  if (randomNumber === 2) {
    computerchoice = "scissor";
  }
  if (randomNumber === 3) {
    computerchoice = "paper";
  }

  ComputerChoiceDisplay.innerHTML = computerchoice;
}

function getResult() {
  if (computerchoice === userchoice) {
    result = "its a draw";
  } else if (computerchoice === "rock" && userchoice === "paper") {
    result = "you won";
  } else if (computerchoice === "paper" && userchoice === "scissor") {
    result = "you won";
  } else if (computerchoice === "scissor" && userchoice === "rock") {
    result = "you won";
  } else if (computerchoice === "rock" && userchoice === "scissor") {
    result = "you lost";
  } else if (computerchoice === "scissor" && userchoice === "paper") {
    result = "you lost";
  } else if (computerchoice === "paper" && userchoice === "rock") {
    result = "you lost";
  }

  ResultDisplay.innerHTML = result;
}
