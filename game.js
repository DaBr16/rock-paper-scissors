
function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    var rnd_index = Math.floor(Math.random() * 3);
    return options[rnd_index];
}

// bug: returning always the value of the first button clicked!
function playRound() {
    let result = "";
    const compChoice = getComputerChoice();
    let playerChoice = document.getElementById("btn");
    let test = playerChoice.value;
    // playerChoice = playerChoice.toLowerCase();
    console.log(test);
    // if(playerChoice==="rock" && compChoice==="scissors") {
    //     result = "You Win! Rock beats scissors.";
    // }else if(playerChoice==="scissors" && compChoice==="paper") {
    //     result = "You Win! Scissors beats paper.";
    // }else if(playerChoice==="paper" && compChoice==="rock") {
    //     result = "You Win! Paper beats rock.";
    // }else if(compChoice==="rock" && playerChoice==="scissors") {
    //     result = "You lost! Rock beats scissors.";
    // }else if(compChoice==="scissors" && playerChoice==="paper") {
    //     result = "You lost! Scissors beats paper.";
    // }else if(compChoice==="paper" && playerChoice==="rock") {
    //     result = "You lost! Paper beats rock.";
    // }else {
    //     result = "Draw!"
    // }
    // return result;
    return;
}