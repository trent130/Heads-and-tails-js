
const buttons = document.querySelectorAll('button');

let heads = 1;
let tails = 0;
let userScore = 0;
let computerScore = 0;


function displaySelections(user, computer){
    const playerSelection = document.querySelector('#player-selection');
    const computerSelection = document.querySelector('#computer-selection');
    if (user === 'heads'){
        playerSelection.style.color = 'green';
    }
    if (user === 'tails'){
        playerSelection.style.color = 'blue';
    }
    if (computer === 'heads'){
        computerSelection.style.color = 'green';
    }
    if (computer === 'tails'){
        computerSelection.style.color = 'blue';
    }
    playerSelection.innerHTML = `${user}`;
    computerSelection.innerHTML = `${computer}`
}

function displayRandom(random){
    const displayResult = document.querySelector('#image');
    console.log(random);
    
        if (random === 1){
            displayResult.style.backgroundImage =  "url('./images/heads.png')";
            
        } else {
            displayResult.style.backgroundImage =  "url('./images/tails.png')";
        }    
}

function tallyScore(random, userPick, computerPick){
    const playerDisplay = document.querySelector('#player-score');
    const computerDisplay = document.querySelector('#computer-score');
    const winner = document.querySelector('#winner');

    if (userPick === random){
        userScore++;
    }
    if (computerPick === random){
        computerScore++;
    }
    playerDisplay.textContent = `${userScore}`;
    computerDisplay.textContent = `${computerScore}`;
    
    if (userScore === 5 && computerScore === 5){
        winner.innerHTML = `<h1>It's a Tie</h1>`;
    } else if (userScore === 5){
        winner.innerHTML = `<h1>You Win!!!</h1>`;
    } else if (computerScore === 5){
        winner.innerHTML = `<h1>Computer Wins!!!</h1>`;
    }
}

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
       
        const random = Math.round(Math.random());
       
        const computerPick = Math.round(Math.random());
        
        let computerSelection;
        if (computerPick === 1){
            computerSelection = 'heads';
        } else {
            computerSelection = 'tails';
        }
        
    
        const spin = document.querySelector('#image');
        spin.classList.add('animate');

        
        const userSelection = e.target.id;
        let userPick;

        if (userSelection === 'heads'){
            userPick = 1;
        } else if (userSelection === 'tails'){
            userPick = 0;
        }
        displaySelections(userSelection, computerSelection);
        displayRandom(random);

       
        
        setTimeout(function(){
            tallyScore(random, userPick, computerPick);
            document.querySelector('#image').classList.remove('animate');
        }, 2000);

    })
})

