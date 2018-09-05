'use strict';


function Game() {
  var self = this;

  var roundScreen;
  var destroyRoundScreen;
  var countDownScreen;
  var destroyCountDownScreen;
  var computerPick;
  var currentRound = 1;


  // self.username = idName;
  self.userScore = 0;
  self.computerScore = 0;
  self.totalScore = 3;
  self.cards = ['rock','paper','scissors'];
  self.currentRound = 1;
  self.totalRound = 3;
  self.gameIntro;
  self.gamePlay;

}

Game.prototype.roundScreen = function () { 
  var self = this;
  

  self.initialScreen = buildDom(`
    <main class="game container">
      <span class="round">Round`+ self.currentRound +`/`+ self.totalRound +`</span>
    </main>
  `);
  document.body.appendChild(self.initialScreen);

  var timeLeft = 3;

  var counertId = setInterval(function() {
    if (timeLeft) {
      if (timeLeft <= 1){
        self.countDownScreen();
      }
      timeLeft--;
    } else {
      clearInterval(counertId);
    }
  }, 300);

}

Game.prototype.destroyRoundScreen = function () {
  var self= this;

  self.initialScreen.remove();
}

Game.prototype.countDownScreen = function () { 
  var self = this;
  self.destroyRoundScreen();

  self.gameIntro = buildDom(`
    <main class="game container">
      <span class="count-down"></span>
    </main>
  `);

  document.body.appendChild(self.gameIntro);
  

  var timeLeft = 3;
  var timer = document.querySelector('span.count-down');
  var countDown = document.createElement('h1');
  countDown.innerText = timeLeft;

  var counertId = setInterval(function() {
    if (timeLeft) {
      if (timeLeft <= 1){
        self.mainGame();
      }
      timeLeft--;
    } else {
      clearInterval(counertId);
    }
    countDown.innerText = timeLeft;
  }, 300);

  timer.appendChild(countDown);
}

Game.prototype.destroyCountDownScreen = function () {
  var self= this;
  self.gameIntro.remove();
}

Game.prototype.mainGame = function (){
  var self = this; 
  self.destroyCountDownScreen();

  self.gamePlay = buildDom(`
    <main class = "game container">
      <div class="header-game">
        <span><p>score:</p>`+ self.userScore +`/`+ self.totalScore +`</span>
        <span><p>round:</p>`+ self.currentRound +`/`+ self.totalRound +`</span>
      </div>

      <div>
        <h2>Computer</h2>
      </div>
      <div class="computer-board">
        <img src="./RPS icons/pc.png" alt="" class="computer-choice" width="25%" height="25%">
        
      </div>
      <div class="player-board">
        <span class="timer">timer</span>
        <div class="cards">
          <img src="./RPS icons/rock.png" alt="" class ="rock" card="rock" width="25%" height="25%">
          <img src="./RPS icons/paper.png" alt="" class ="paper" card="paper" width="25%" height="25%">
          <img src="./RPS icons/scissors.png" alt="" class ="scissors" card="scissors" width="25%" height="25%">
        </div>
      </div>
      <div>
        <h2>Username</h2>
      </div>
    </main>
  `);

  document.body.appendChild(self.gamePlay);

  var timeLeft = 3;
  var timer = document.querySelector('span.timer');
  var countDown = document.createElement('p');
  countDown.innerText = timeLeft;

  var counertId = setInterval(function() {
    if (timeLeft) {
      if (timeLeft <= 1){
        self.compareChoice();
      }
      timeLeft--;
    } else {
      clearInterval(counertId);
    }
    countDown.innerText = timeLeft;
  }, 1000);

  timer.appendChild(countDown);

  self.userPick();
  self.computerPick();
}

Game.prototype.computerPick = function (){
  var self = this;

  self.computerChoice = self.cards[Math.floor(Math.random() * self.cards.length)]

  var displayComputerChoice = document.querySelector('.computer-choice');
  if (self.computerChoice == 'scissors'){
    displayComputerChoice.textContent = ('.pc-scissors')
  }

  // self.computersChoice.classList.toggle('');
  // self.computersChoice.appendChild(displayComputerChoice)

  
  console.log(self.computerChoice)
  


}

Game.prototype.userPick = function (){
  var self = this;

  self.cardToPick = document.querySelector('.cards');
  self.cardToPick.addEventListener('click', function(event){
    self.userChoice = event.target.getAttribute('card');
  });
}





Game.prototype.compareChoice = function (){
  var self = this;

  if (self.userChoice == 'scissors' && self.computerChoice == 'scissors'){
    self.updateTotalRound();
    console.log('it\'s a tie!');
  } else if (self.userChoice == 'scissors' && self.computerChoice == 'paper'){
    self.updateUserScore();
    console.log('scissors wins');
  } else if (self.userChoice == 'scissors' && self.computerChoice == 'rock'){
    self.updateComputerScore();
    console.log('rock wins');
  } else if (self.userChoice == 'rock' && self.computerChoice == 'rock'){
    self.updateTotalRound();
    console.log('it\'s a tie!');
  } else if (self.userChoice == 'rock' && self.computerChoice == 'paper'){
    self.updateComputerScore();
    console.log('paper wins');
  } else if (self.userChoice == 'rock' && self.computerChoice == 'scissors'){
    self.updateUserScore();
    console.log('rock wins');
  } else if (self.userChoice == 'paper' && self.computerChoice == 'paper'){
    self.updateTotalRound();
    console.log('it\'s a tie!');
  } else if (self.userChoice == 'paper' && self.computerChoice == 'rock'){
    self.updateUserScore();
    console.log('paper wins');
  } else if (self.userChoice == 'paper' && self.computerChoice == 'scissors'){
    self.updateComputerScore();
    console.log('scissors wins');
  } else {
    self.updateComputerScore();
    console.log('too slow you didnt pick ');
  }

  self.displayResult();

  setTimeout(function(){
    self.gamePlay.remove();
    if (self.userScore === 2 || self.computerScore === 2){
      self.gameOver(self.userScore,self.computerScore);
    } else {
      self.nextRound();
    } 
  }, 3000)
  
}

Game.prototype.displayResult = function () {
  var self = this;

  var computerChoiceImage = document.querySelector('img.computer-choice');
  computerChoiceImage.src = './RPS icons/' + self.computerChoice + '2.png'
  

  if (self.userChoice){
  var userChoiceImage = document.querySelector('img.' + self.userChoice);
  userChoiceImage.src = './RPS icons/' + self.userChoice + '2.png'
  }
}

Game.prototype.nextRound = function () {
  var self = this;

  self.userChoice = null;
  self.updateRound();
  self.roundScreen();
}

Game.prototype.updateRound = function (){
  var self = this;

  self.currentRound = self.currentRound+1;
}

Game.prototype.updateUserScore = function (){
  var self = this;

  self.userScore = self.userScore+1;
}

Game.prototype.updateTotalRound = function (){
  var self = this;

  self.totalRound = self.totalRound+1;
}

Game.prototype.updateComputerScore = function (){
  var self = this;
  self.computerScore = self.computerScore+1;
}

Game.prototype.gameOver = function (userScore,computerScore){
  var self = this;

  self.destroyCountDownScreen();

  if (userScore === 2){
    self.winScreen(); 
  } else if (computerScore === 2 ){
    self.loseScreen();
  } else {
    console.log('whaaaaat?')
  }
}

Game.prototype.winScreen = function (){
  var self = this;

  self.winGame = buildDom(`
    <main class="game container">
      <span class="count-down"> you win</span>
    </main>
  `);

  document.body.appendChild(self.winGame);

}

Game.prototype.loseScreen = function (){

  self.loseGame = buildDom(`
    <main class="game container">
      <span class="count-down"> you lose</span>
    </main>
  `);

  document.body.appendChild(self.loseGame);
}


// self.userChoice.removeAttribute('disabled'); enable disable more choices to include at timeoutwhen comparing


