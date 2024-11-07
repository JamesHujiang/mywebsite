const resultDisplay = document.getElementById("resultDisplay");
const scoreNumber = document.getElementById("scoreNumber");
const handsNumber = document.getElementById("handsNumber")
const computerChoices = ["rock", "paper", "scissors"]
let playerScore = 0, totalHands = 0;

function game(choice){
    resultDisplay.classList.remove("win", "lose");
    let computerChoice = computerChoices[Math.floor(Math.random() * 3)];
    let result = "";
    if(computerChoice == choice){
        result = "Tie!";
    }
    else{
        switch(choice){
            case "rock": 
                result = (computerChoice == "paper") ? "You lose!" : "You win!";
                break;
            case "paper": 
                result = (computerChoice == "scissors") ? "You lose!" : "You win!";
                break;
            case "scissors": 
                result = (computerChoice == "rock") ? "You lose!" : "You win!";
                break;
            }

    }
    
    switch(result){
        case "You win!" :
            resultDisplay.classList.add("win");
            playerScore ++;
            break;
        case "You lose!" :
            resultDisplay.classList.add("lose");
            playerScore --;
            break;
    }

    switch(Math.sign(playerScore)){
        case 0 :
            scoreNumber.classList.remove("win", "lose");
            break;
        case 1 :
            scoreNumber.classList.add("win");
            break;
        case -1 :
            scoreNumber.classList.add("lose");
            break;
    }

    totalHands++;

    resultDisplay.textContent = result;
    scoreNumber.textContent = playerScore;
    handsNumber.textContent = totalHands;
    }





// 

/*



                */