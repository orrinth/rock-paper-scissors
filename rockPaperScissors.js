//Welcome Screen
const welcomeScreen = document.querySelector(".welcome");
const welcomebtn = document.querySelector(".welcome button");

//Computer Buttons
const compRockButton = document.querySelector(".computer-choices #comp-rock-button");
const compPaperButton = document.querySelector(".computer-choices #comp-paper-button");
const compScissorsButton = document.querySelector(".computer-choices #comp-scissors-button");

//Player Buttons
const rockButton = document.querySelector(".player-choices #rock-button");
const paperButton = document.querySelector(".player-choices #paper-button");
const scissorsButton = document.querySelector(".player-choices #scissors-button");

//Computer Choices
const compRockChoice = document.querySelector(".comp-choice-rock");
const compPaperChoice = document.querySelector(".comp-choice-paper");
const compScissorsChoice = document.querySelector(".comp-choice-scissors");

//Player Choices
const rockChoice = document.querySelector(".choice-rock");
const paperChoice = document.querySelector(".choice-paper");
const scissorsChoice = document.querySelector(".choice-scissors");

//Final Overlays
const compWins = document.querySelector(".computer-overlay");
const playerWins = document.querySelector(".player-overlay");
const tieGame = document.querySelector(".both-overlay");

//Final Overlays Button Play Again
const compPlayAgain = document.querySelector(".computer-overlay button:nth-of-type(1)");
const playerPlayAgain = document.querySelector(".player-overlay button:nth-of-type(1)");
const tiePlayAgain = document.querySelector(".both-overlay button:nth-of-type(1)");

//Final Overlays Button Return Home
const compReturnHome = document.querySelector(".computer-overlay button:nth-of-type(2)");
const playerReturnHome = document.querySelector(".player-overlay button:nth-of-type(2)");
const tieReturnHome = document.querySelector(".both-overlay button:nth-of-type(2)");

function game() {
    const computerChoices = ["rock", "paper", "scissors"];
    let computerChoice;
    let playerChoices = [];
    let playerChoice;

    function restOfGame() {
        compWins.classList.remove("opaque-anim-back");
        playerWins.classList.remove("opaque-anim-back");
        tieGame.classList.remove("opaque-anim-back");

        compRockChoice.classList.remove("opaque-anim");
        compRockChoice.classList.add("no-show");
        compPaperChoice.classList.remove("opaque-anim");
        compPaperChoice.classList.add("no-show");
        compScissorsChoice.classList.remove("opaque-anim");
        compScissorsChoice.classList.add("no-show");
        

        computerChoice = computerChoices[Math.floor(Math.random() * Math.floor(3))];
        playerChoice = playerChoices[0];

        if (computerChoice == "rock") {
            compRockChoice.classList.add("opaque-anim");
            compRockChoice.classList.remove("no-show");
            switch (playerChoice) {
                case "rock":
                    tieGame.classList.remove("no-show");
                    compWins.classList.add("no-show");
                    playerWins.classList.add("no-show");
                    break;
                case "paper":
                    playerWins.classList.remove("no-show");
                    compWins.classList.add("no-show");
                    tieGame.classList.add("no-show");
                    break;
                case "scissors":
                    compWins.classList.remove("no-show");
                    playerWins.classList.add("no-show");
                    tieGame.classList.add("no-show");
                    break;
                default:
                    break;
            }

        } else if (computerChoice == "paper") {
            compPaperChoice.classList.add("opaque-anim");
            compPaperChoice.classList.remove("no-show");
            switch (playerChoice) {
                case "rock":
                    compWins.classList.remove("no-show");
                    playerWins.classList.add("no-show");
                    tieGame.classList.add("no-show");
                    break;
                case "paper":
                    tieGame.classList.remove("no-show");
                    compWins.classList.add("no-show");
                    playerWins.classList.add("no-show");
                    break;
                case "scissors":
                    playerWins.classList.remove("no-show");
                    compWins.classList.add("no-show");
                    tieGame.classList.add("no-show");
                    break;
                default:
                    break;
            }
            
        } else if (computerChoice == "scissors") {
            compScissorsChoice.classList.add("opaque-anim");
            compScissorsChoice.classList.remove("no-show");
            switch (playerChoice) {
                case "rock":
                    playerWins.classList.remove("no-show");
                    compWins.classList.add("no-show");
                    tieGame.classList.add("no-show");
                    break;
                case "paper":
                    compWins.classList.remove("no-show");
                    playerWins.classList.add("no-show");
                    tieGame.classList.add("no-show");
                    break;
                case "scissors":
                    tieGame.classList.remove("no-show");
                    compWins.classList.add("no-show");
                    playerWins.classList.add("no-show");
                    break;
                default:
                    break;
            }
        }
    }

    function rockClicked() {
        playerChoices.push("rock");
        rockChoice.classList.add("opaque-anim");
        rockChoice.classList.remove("no-show");
        restOfGame();
    }

    function paperClicked() {
        playerChoices.push("paper");
        paperChoice.classList.add("opaque-anim");
        paperChoice.classList.remove("no-show");
        restOfGame();
    }

    function scissorsClicked() {
        playerChoices.push("scissors");
        scissorsChoice.classList.add("opaque-anim");
        scissorsChoice.classList.remove("no-show");
        restOfGame();
    }
    
    rockButton.addEventListener("click", rockClicked);
    paperButton.addEventListener("click", paperClicked);
    scissorsButton.addEventListener("click", scissorsClicked);
}


function start() {
    welcomeScreen.classList.add("opaque-anim-back");
    game();
}

function restart() {
    rockChoice.classList.remove("opaque-anim");
    rockChoice.classList.add("no-show");
    paperChoice.classList.remove("opaque-anim");
    paperChoice.classList.add("no-show");
    scissorsChoice.classList.remove("opaque-anim");
    scissorsChoice.classList.add("no-show");

    compWins.classList.add("opaque-anim-back");
    playerWins.classList.add("opaque-anim-back");
    tieGame.classList.add("opaque-anim-back");
    
    compRockChoice.classList.remove("opaque-anim");
    compRockChoice.classList.add("no-show");
    compPaperChoice.classList.remove("opaque-anim");
    compPaperChoice.classList.add("no-show");
    compScissorsChoice.classList.remove("opaque-anim");
    compScissorsChoice.classList.add("no-show");
    
    game();
}

function home() {
    restart();
    welcomeScreen.classList.remove("opaque-anim-back");
    welcomeScreen.classList.add("opaque-anim");
}

welcomebtn.addEventListener("click", start);

compPlayAgain.addEventListener("click", restart);
playerPlayAgain.addEventListener("click", restart);
tiePlayAgain.addEventListener("click", restart);

compReturnHome.addEventListener("click", home);
playerReturnHome.addEventListener("click", home);
tieReturnHome.addEventListener("click", home);


