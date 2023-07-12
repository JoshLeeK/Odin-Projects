// Audio
const songBtn = document.getElementById('songbtn');
const songBtnNo = document.getElementById('songbtnno');
const audio = document.getElementById("song");
  
songBtn.addEventListener('click', () => {
    audio.play();
    });

songBtnNo.addEventListener('click', () => {
    audio.pause();
    currentTime = 0;
    });


// Game 

// Setup
const options = ['giant', 'wizard', 'elf',];
let humanScore = 0;
let comScore = 0;
let roundresulttext = document.getElementById('resulttext');
let comscoredisplay = document.getElementById('comscore');
let humanscoredisplay = document.getElementById('humanscore');

// Buttons

const wizardbtn = document.getElementById('wizard');
const giantbtn = document.getElementById('giant');
const elfbtn = document.getElementById('elf');

const buttons = document.querySelectorAll('button');

const resetbtn = document.getElementById('resetbtn');

// Function for random computer choice
function getComputerChoice() {
    let random = options[Math.floor(Math.random()*options.length)];
    return random;
}

// Game Logic
function play(comChoice, humanChoice) {

    comChoice = getComputerChoice();
    humanChoice = playerChoice;
    
    if (comChoice === 'giant' && humanChoice === 'wizard' 
    || comChoice === 'wizard' && humanChoice === 'elf' 
    || comChoice === 'elf' && humanChoice === 'giant') {
        humanScore++;
        humanscoredisplay.textContent = ("Your Victories: " + humanScore);
        roundresulttext.textContent = "Your allies pushed the enemy back! Keep going!"
        return "win";
    }
    else if (comChoice === humanChoice){
        roundresulttext.textContent = "You hired the same ally your enemy did. That's awkward..."
        return "tie";
    } else if (comChoice === 'giant' && humanChoice === 'elf' 
    || comChoice === 'wizard' && humanChoice === 'giant' 
    || comChoice === 'elf' && humanChoice === 'wizard') {
        comScore++;
        comscoredisplay.textContent = ("Enemy Victories: " + comScore);
        roundresulttext.textContent = "Your allies were deafeated by the enemy! Don't give up!"
        return "lose";
        }
        else {
            return;
        }
    }


// Function to reset score

function reset() {
     humanScore = 0;
     comScore = 0;
     humanscoredisplay.textContent = ("Your Victories: " + humanScore);
     comscoredisplay.textContent = ("Enemy Victories: " + comScore);
}

// Remove transition function - Button Effects
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

// Event Listeners

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (comScore < 5 && humanScore < 5){
            button.classList.add('playing');
            playerChoice = button.id;
            comChoice = getComputerChoice();
            play(comChoice, playerChoice);

            if (comScore >= 5)  {
                roundresulttext.textContent = "You have been defeated... The king of Barador has destroyed you."
                return;
            } else if (humanScore >= 5) {
                roundresulttext.textContent = "You have conquered! The king of Barador is forever defeated!"
                return;
            } else {
                return;
            }

        } else if (comScore >= 5) {
            alert("The game is over. Please use the reset button.");
            return;
        } else if (humanScore >= 5) {
            alert("The game is over. Please use the reset button.");
            return;
        } else {
            return;
        }
    });; 


})

resetbtn.addEventListener('click', reset);
buttons.forEach(button => button.addEventListener('transitionend', removeTransition));