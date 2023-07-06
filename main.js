
const options = ['Rock', 'Paper', 'Scissors',];
let humanScore = 0;
let comScore = 0;
let comChoice = getComputerChoice();
// let humanChoice = prompt( "What is your move?" )
let humanChoice = getComputerChoice();
let result;

function getComputerChoice() {
    let random = options[Math.floor(Math.random()*options.length)];
    return random;
}
// console.log(comChoice)
// console.log(humanChoice)

function play(comChoice, humanChoice) {
    if (comChoice === 'Rock' && humanChoice === 'Paper' 
    || comChoice === 'Paper' && humanChoice === 'Scissors' 
    || comChoice === 'Scissors' && humanChoice === 'Rock') {
        return "win";
    }
    else if (comChoice === humanChoice){
        return "tie";
    }
    else {
        return "lose";
        }
    }

    function game() {
        play(comChoice, humanChoice);

        if (play(comChoice, humanChoice) == "win"){
            humanScore++;
            console.log("your score " + humanScore)
        }
        else if (play(comChoice, humanChoice) == "lose"){
            comScore++;
            console.log("com score " + comScore)
        }
        else {
            console.log("tie!")
        }
    }

    game();
    game();
    game();
    game();
    game();

    console.log(play(comChoice,humanChoice));

    console.log(humanScore);
    console.log(comScore);