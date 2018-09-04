'use strict';


function Game() {
  var self = this;

  var roundScreen;
  var destroyRoundScreen;
  var countDownScreen;
  var destroyCountDownScreen


  // self.username = idName;
  self.score = 0;
  self.cards = ['rock','paper','scissors'];
  self.round = null;
  self.gameIntro = null;

}

Game.prototype.roundScreen = function () { 
  var self = this;

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
  }, 600);

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
  }, 900);

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
    <main>
      <div class="header-game">
        <p>score:</p>
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
          <article class = "Rock"></article>
          <article class = "Paper"></article>
          <article class = "Scissors"></article>
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
        self.computerPicks();
      }
      timeLeft--;
    } else {
      clearInterval(counertId);
    }
    countDown.innerText = timeLeft;
  }, 900);

  timer.appendChild(countDown);

}

Game.prototype.computerPick = function (){
  var self = this;

  self.round.innerText = self.cards.length;


}