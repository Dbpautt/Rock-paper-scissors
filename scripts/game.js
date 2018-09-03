'use strict';

function Game() {
  var self = this;
  // self.username = idName;
  self.score = 0;
  self.cards = [1,2,5,7,8,13,6,12,3,11,4,10,9];
  self.round = null;
}

Game.prototype.start = function () {
  var self = this;

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
      timeLeft--;
    } else {
      clearInterval(counertId);
    }
    countDown.innerText = timeLeft;
  }, 900);

  timer.appendChild(countDown);

  self.mainGame();
}
