'use strict';


function Game(idName, callback) {
  var self = this;

  var roundScreen;
  var destroyRoundScreen;
  var countDownScreen;
  var destroyCountDownScreen;
  var computerPick;
  var currentRound = 1;


  self.username = idName.value || 'Edward Scissorhands';
  self.userScore = 0;
  self.computerScore = 0;
  self.totalScore = 3;
  self.cards = ['rock','paper','scissors'];
  self.currentRound = 1;
  self.totalRound = 3;
  self.gameIntro;
  self.gamePlay;
  self.onOver = callback,
  self.gameIsOver = false;

}

Game.prototype.roundScreen = function () { 
  var self = this;
  
  self.initialScreen = buildDom(`
    <main class="container">
      <span class="round">Round  `+ self.currentRound +`/`+ self.totalRound +`</span>
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
  }, 900); //time round screen remains on hold

}

Game.prototype.destroyRoundScreen = function () {
  var self= this;

  self.initialScreen.remove();
}

Game.prototype.countDownScreen = function () { 
  var self = this;
  self.destroyRoundScreen();

  self.gameIntro = buildDom(`
    <main class="container">
    <span class="round"></span>
    </main>
  `);

  document.body.appendChild(self.gameIntro);
  

  var timeLeft = 3;
  var timer = document.querySelector('span.round');
  var countDown = document.createElement('span.round');
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
  }, 500); // timer 1,2,3 rock paper scissors!!

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
      <div class="game">
        <div class="header-game">
          <span>Score: `+ self.userScore +`/`+ self.totalScore +`</span>
          <span>Round: `+ self.currentRound +`/`+ self.totalRound +`</span>
        </div>

        <div>
          <h2>Computer</h2>
          <h3>PC Score: `+ self.computerScore +`/`+ self.totalScore +`</h3>
        </div>
        <div class="computer-board">
          <img src="./RPS icons/pc.png" alt="" class="computer-choice" width="25%" height="25%">
        </div>
        <div class="player-board">
            <h1 class="winner"></h1>
            <span class="timer">Time lefft  </span>
            <div class="cards">
              <img src="./RPS icons/rock.png" alt="" class ="rock disable" card="rock" width="25%" height="25%">
              <img src="./RPS icons/paper.png" alt="" class ="paper disable" card="paper" width="25%" height="25%">
              <img src="./RPS icons/scissors.png" alt="" class ="scissors disable" card="scissors" width="25%" height="25%">
            </div>
        </div>
        <div>
          <h2>`+self.username+`</h2>
        </div>
      </div>
    </main>
  `);

  document.body.appendChild(self.gamePlay);

  var timeLeft = 3;
  var timer = document.querySelector('span.timer');
  var countDown = document.createElement('span');
  countDown.innerText = timeLeft;

  var counertId = setInterval(function() {
    if (timeLeft) {
      if (timeLeft <= 1){
        self.displayResult();
      }
      timeLeft--;
    } else {
      clearInterval(counertId);
    }
    countDown.innerText = timeLeft;
  }, 900); // time user has for choosing before comparing results

  timer.appendChild(countDown);

  self.userPick(counertId);
  self.computerPick();
  
}

Game.prototype.computerPick = function (){
  var self = this;

  self.computerChoice = self.cards[Math.floor(Math.random() * self.cards.length)]
}

Game.prototype.userPick = function (counertId){
  var self = this;

  self.cardToPick = document.querySelector('.cards');
  self.cardToPick.addEventListener('click', function(event){
    self.userChoice = event.target.classList.toggle('disable');
    self.userChoice = event.target.getAttribute('card');
    clearInterval(counertId);
    self.displayResult();
  });

}



Game.prototype.compareChoice = function (){
  var self = this;

  if (self.userChoice == 'scissors' && self.computerChoice == 'scissors'){
    self.updateTotalRound();
    self.gameTie();
  } else if (self.userChoice == 'scissors' && self.computerChoice == 'paper'){
    self.updateUserScore();
    self.playerWins();
  } else if (self.userChoice == 'scissors' && self.computerChoice == 'rock'){
    self.updateComputerScore();
    self.pcWins();
  } else if (self.userChoice == 'rock' && self.computerChoice == 'rock'){
    self.updateTotalRound();
    self.gameTie();
  } else if (self.userChoice == 'rock' && self.computerChoice == 'paper'){
    self.updateComputerScore();
    self.pcWins();
  } else if (self.userChoice == 'rock' && self.computerChoice == 'scissors'){
    self.updateUserScore();
    self.playerWins();
  } else if (self.userChoice == 'paper' && self.computerChoice == 'paper'){
    self.updateTotalRound();
    self.gameTie();
  } else if (self.userChoice == 'paper' && self.computerChoice == 'rock'){
    self.updateUserScore();
    self.playerWins();
  } else if (self.userChoice == 'paper' && self.computerChoice == 'scissors'){
    self.updateComputerScore();
    self.pcWins();
  } else {
    self.updateComputerScore();
    self.noChoice();
  }

  document.querySelector('span.timer').remove();
  
  setTimeout(function(){
    self.gamePlay.remove();
    if (self.userScore === 2 || self.computerScore === 2){
      self.onOver(self);
    } else {
      self.nextRound();
    } 
  }, 2000) // freeze time antes de hacer roundScreen
  
}

Game.prototype.displayResult = function () {
  var self = this;

  self.compareChoice()

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

Game.prototype.playerWins = function (){
  var self = this;

  var playerWinsMessage =document.querySelector('.winner');
  playerWinsMessage.innerText = '   You scored!  ';
}

Game.prototype.pcWins = function (){
  var self = this;

  var pcWinsMessage =document.querySelector('.winner');
  pcWinsMessage.classList.replace("winner","loser");
  pcWinsMessage.innerText = '  Computer scored !  ';
}

Game.prototype.gameTie = function (){
  var self = this;

  var gameTieMessage =document.querySelector('.winner');
  gameTieMessage.innerText = 'Say whaaaat?! You\'ve bot selected ' +self.userChoice+' !';
}

Game.prototype.noChoice = function (){
  var self = this;

  var noChoiceMessage =document.querySelector('.winner');
  noChoiceMessage.classList.replace("winner","loser");
  noChoiceMessage.innerText = '  Too slow you lose   ';
}



