
const options = ['Rock', 'Paper', 'Scissors',];
let humanScore = 0;
let comScore = 0;
let comChoice = getComputerChoice();
// let humanChoice = prompt( "What is your move?" )
let humanChoice = getComputerChoice();

function getComputerChoice() {
    let random = options[Math.floor(Math.random()*options.length)];
    return random;
}
// console.log(comChoice)
// console.log(humanChoice)

function play() {

    let comChoice = getComputerChoice();
    // let humanChoice = prompt( "What is your move?" )
    let humanChoice = getComputerChoice();
    
    if (comChoice === 'Rock' && humanChoice === 'Paper' 
    || comChoice === 'Paper' && humanChoice === 'Scissors' 
    || comChoice === 'Scissors' && humanChoice === 'Rock') {
        humanScore++;
        return "win";
    }
    else if (comChoice === humanChoice){
        return "tie";
    }  else {
        comScore++;
        return "lose";
        }
    }

function game() {
    play();

    if (comScore >= 5)  {
        return "Game Over, you lose!";
    } else if (humanScore >= 5) {
        return "Game Over, you win!"
    } else {
        return "Keep Playing";
    }

}

console.log(game());
console.log(comScore);
console.log(humanScore);