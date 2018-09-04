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
  self.score = 0;
  self.totalScore = 3;
  self.cards = ['rock','paper','scissors'];
  self.totalRound = 3;
  self.gameIntro;
  self.gamePlay;

}

Game.prototype.roundScreen = function () { 
  var self = this;
  self.currentRound = 1;

  self.initialScreen = buildDom(`
    <main class="game container">
      <span class="round">Round 1/3 </span>
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
  }, 100);

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
        <span><p>score:</p>`+ self.score +`/`+ self.totalScore +`</span>
        <span><p>round:</p>`+ self.currentRound +`/`+ self.totalRound +`</span>
      </div>

      <div>
        <h2>Computer</h2>
      </div>
      <div class="computer-board">
        <article class="computer-choice"></article>
      </div>
      <div class="player-board">
        <span class="timer">timer</span>
        <div class="cards">
          <article class ="rock" card="rock" ></article>
          <article class ="paper" card="paper"></article>
          <article class ="scissors" card="scissors"></article>
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

  self.computersChoice = document.querySelector('.computer-choice');
  self.computersChoice.innerText = self.computerChoice;
  console.log(self.computerChoice)
  // if (self.computerChoice === self.cards[0]) { //--------> backlog
  //   self.computersChoice.classList.toggle('article.rock')
  // }

}

Game.prototype.userPick = function (){
  var self = this;

  self.cardToPicked = document.querySelector('.cards');
  self.cardToPicked.addEventListener('click', function(event){
    self.userChoice = event.target.getAttribute('card');
  });
}




Game.prototype.compareChoice = function (){
  var self = this;

  if (self.userChoice == 'scissors' && self.computerChoice == 'scissors'){
    self.updateRound();
    self.totalRound+1;
    console.log('it\'s a tie!')
  } else if (self.userChoice == 'scissors' && self.computerChoice == 'paper'){
    self.updateRound();
    self.currentScore+1;
    console.log('scissors wins')
  } else if (self.userChoice == 'scissors' && self.computerChoice == 'rock'){
    self.updateRound();
    console.log('rock wins')
  } else if (self.userChoice == 'rock' && self.computerChoice == 'rock'){
    self.updateRound();
    self.totalRound+1;
    console.log('it\'s a tie!')
  } else if (self.userChoice == 'rock' && self.computerChoice == 'paper'){
    self.updateRound();
    console.log('paper wins')
  } else if (self.userChoice == 'rock' && self.computerChoice == 'scissors'){
    self.updateRound();
    self.currentScore+1;
    console.log('rock wins')
  } else if (self.userChoice == 'paper' && self.computerChoice == 'paper'){
    self.updateRound();
    self.totalRound+1;
    console.log('it\'s a tie!')
  } else if (self.userChoice == 'paper' && self.computerChoice == 'rock'){
    self.updateRound();
    self.currentScore+1;
    console.log('paper wins')
  } else if (self.userChoice == 'paper' && self.computerChoice == 'scissors'){
    self.updateRound();
    console.log('scissors wins')
  } else {
    console.log('wtf')
  }

  self.gamePlay.remove();
  self.roundScreen();

}

Game.prototype.updateRound = function (){
  var self = this;

  self.currentRound+1;
}


// self.userChoice.removeAttribute('disabled'); enable disable more choices to include at timeoutwhen comparing

