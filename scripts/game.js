'use strict';


function Game() {
  var self = this;

  var roundScreen;
  var destroyRoundScreen;
  var countDownScreen;
  var destroyCountDownScreen;
  var computerPick


  // self.username = idName;
  self.score = 0;
  self.cards = ['rock','paper','scissors'];
  self.round = 1;
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
  }, 100);

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
        <span><p>score:</p>`+ self.score +`</span>
        <span><p>round:</p>`+ self.round +`</span>
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
        self.computerPick();
      }
      timeLeft--;
    } else {
      clearInterval(counertId);
    }
    countDown.innerText = timeLeft;
  }, 300);

  timer.appendChild(countDown);

  self.userPick();


}

Game.prototype.computerPick = function (){
  var self = this;

  self.randomCard = self.cards[Math.floor(Math.random() * self.cards.length)]

  self.computersChoice = document.querySelector('.computer-choice');
  self.computersChoice.innerText = self.randomCard;
  console.log(self.randomCard)
  // if (self.randomCard === self.cards[0]) { //--------> backlog
  //   self.computersChoice.classList.toggle('article.rock')
  // }

}

Game.prototype.userPick = function (){
  var self = this;

  self.userChoice = document.querySelector('.cards');
  self.userChoice.addEventListener('click', function(event){
    self.compareChoice(event.target.getAttribute('card'));
  });

}


Game.prototype.compareChoice = function (userChoice){
  var self = this;

  if (self.userChoice == 'scissors' && self.randomCard == 'scissors'){
    console.log('it\'s a tie!')
  } else if (self.userChoice == 'rock' && self.randomCard == 'rock'){
    console.log('it\'s a tie!')
  } else if (self.userChoice == 'paper' && self.randomCard == 'paper'){
    console.log('it\'s a tie!')
  } else if (self.userChoice == 'scissors' && self.randomCard == 'paper'){
    console.log('scissors wins')
  } else if (self.userChoice == 'scissors' && self.userChoice == 'rock'){
    console.log('rock wins')
  } else if (self.userChoice == 'paper' && self.userChoice == 'rock'){
    console.log('rock wins')
  } else {
    console.log('wtf')
  }

}
  // self.userChoice.removeAttribute('disabled'); enable disable more choices to include at timeoutwhen comparing

