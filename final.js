var  scores, roundScore, activePlayer, gamePlaying, winnerScore;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying){
    //  1. Random Number
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
        
    //  2. Display the result
    var diceDOM = document.getElementById('dice1');
    diceDOM.style.display = 'block';
    diceDOM.src = 'src/img/dice/dice-' + dice1 + '.png';
        
    document.getElementById('dice2').style.display = 'block';
    document.getElementById('dice2').src = 'src/img/dice/dice-' + dice2 + '.png';
        
    //  3. Update the round score IF the rolled number was NOT a 1.
    if(dice1 !== 1 && dice2 !== 1) {
        //Add Score
        roundScore += dice1 + dice2;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

    } else {
                nextPlayer();
    }
    }
}); 


document.querySelector('.btn-hold').addEventListener('click', function(){
    if (gamePlaying) {
    // Add current score to the player global score
    scores[activePlayer] += roundScore;
        
    //Upate UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    finalScore();

    // Check if player won the game
    if (scores[activePlayer] >= winnerScore){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    } else {
        // Next player
        nextPlayer();
    }
    }
});


document.querySelector('.btn-new').addEventListener('click', init);



function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;    
   
    finalScore()
    document.getElementById('dice1').style.display = 'none';
    document.getElementById('dice2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
};


function nextPlayer() {
    //Next Player
    //scores[activePlayer] = roundScore;
    //document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    activePlayer === 0 ? activePlayer =1 : activePlayer =0;
    roundScore =0;
    
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.getElementById('dice1').style.display = 'none';
    document.getElementById('dice2').style.display = 'none';
    
};

function finalScore() {
    var inputScore;
    inputScore = document.querySelector('.final-score').value;
    if (inputScore) {
        winnerScore = inputScore;
    } else {
        winnerScore = 100;
    }
};
















