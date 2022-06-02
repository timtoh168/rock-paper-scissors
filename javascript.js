

const options = ['Rock','Paper','Scissors'];
let playerScore = 0;
let computerScore = 0;


function computerPlay() {
    return options[Math.floor(Math.random()*options.length)];
}

/*
function game() {
    
    for (let i = 0; i < 5; i++) {
        let playerSelection = capitalize(prompt('Choose Rock, Paper, or Scissors'));
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
      }

}
*/

function playRound(playerSelection,computerSelection) {
    /*
    if (playerSelection!='Rock'&&playerSelection!='Paper'&&playerSelection!='Scissors') {
        return 'Must enter either Rock, Paper, or Scissors';
    }
    */
    switch(true) {
        case (playerSelection=='Rock'&&computerSelection=='Scissors'):
        case (playerSelection=='Paper'&&computerSelection=='Rock'):
        case (playerSelection=='Scissors'&&computerSelection=='Paper'):           
            playerScore++;
            break;
        case (playerSelection=='Rock'&&computerSelection=='Paper'):
        case (playerSelection=='Paper'&&computerSelection=='Scissors'):
        case (playerSelection=='Scissors'&&computerSelection=='Rock'):
            computerScore++;
            break;
        default:
    }
}


function capitalize(str) {
    let first = str.slice(0,1);
    let rest = str.slice(1);

    first = first.toUpperCase();
    rest = rest.toLowerCase();
    return first.concat('',rest);
}

function checkWinner(playerScore,computerScore) {
    if (playerScore >= 5) {
        return 'Congratulations, Player! You Win!';
    } else if (computerScore >= 5) {
        return 'Too Bad! Computer Wins!';
    }
    return 'None';
}

const body = document.querySelector('body');

const score = document.createElement('div');
score.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`

const content = document.createElement('div');
content.setAttribute('style', 'background:black;color:white;')
content.classList.add('content');
content.textContent = '';


const rckBtn = document.querySelector('#rock-btn');
rckBtn.addEventListener('click', () => {
    playRound('Rock',computerPlay());
    score.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`
    if(checkWinner(playerScore,computerScore)!='None') {
        content.textContent = checkWinner(playerScore,computerScore);
        playerScore = 0;
        computerScore = 0;
    }
});
const pprBtn = document.querySelector('#paper-btn');
pprBtn.addEventListener('click', () => {
    playRound('Paper',computerPlay());
    score.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`
    if(checkWinner(playerScore,computerScore)!='None') {
        content.textContent = checkWinner(playerScore,computerScore);
        playerScore = 0;
        computerScore = 0;
    }
});
const sciBtn = document.querySelector('#scissors-btn');
sciBtn.addEventListener('click', () => {
    playRound('Scissors',computerPlay());
    score.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`
    if(checkWinner(playerScore,computerScore)!='None') {
        content.textContent = checkWinner(playerScore,computerScore);
        playerScore = 0;
        computerScore = 0;
    }
});

body.appendChild(score);
body.appendChild(content);