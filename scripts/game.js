'use strict';

function Game() {
  var self = this;
  // self.username = idName;
  self.score = 0;
  self.cards = ['rock','paper','scissors'];
  self.round = null;
  self.gameIntro = null;
}

Game.prototype.start = function () { /@todo build the initial transitions/
  var self = this;

//   self.gameIntro = buildDom(`
//     <main class="game container">
//       <span class="count-down"></span>
//     </main>
//   `);

//   document.body.appendChild(self.gameIntro);
  

//   var timeLeft = 3;
//   var timer = document.querySelector('span.count-down');
//   var countDown = document.createElement('h1');
//   countDown.innerText = timeLeft;

//   var counertId = setInterval(function() {
//     if (timeLeft) {
//       timeLeft--;
//     } else {
//       clearInterval(counertId);
//     }
//     countDown.innerText = timeLeft;
//   }, 900);

//   timer.appendChild(countDown);

  
//   self.mainGame();
}


Game.prototype.mainGame = function (){
  var self = this;
  

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
        <span>timer</span>
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

}