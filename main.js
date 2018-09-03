'use strict';


function buildDom(html) {
  var div = document.createElement('div');
  div.innerHTML = html;
  return div.children[0];
}

function main() {


  var splashMain;
  var howToScreen;
  var gameOverMain = null ;
  var game = null;

  //-- Game Main Splash --//
  function buildSplash() {

    splashMain = buildDom(`
      <main>
        <div class="container splash">
          <h1>Rock, Paper, Scissors!</h1>
          <label for="name">What's your name?</label>
          <input type="text" placeholder="Austin Powers">
          <button class="button">Start</button>
          <div class="how-to">
            <button class="button">How to play</button>
          </div>
        </div>
      </main>
    `);
    
    document.body.appendChild(splashMain);

    var button = splashMain.querySelector('button');
    button.addEventListener('click', startGame);

    var buttonHowTo = splashMain.querySelector('div.how-to button');
    buttonHowTo.addEventListener('click', splashHowTo);
    
  }

  function destroySplash() {
    splashMain.remove();
  }

  function startGame() {
    destroySplash();
    // destoyGameOver();

    // game = new Game();
    // game.start();
    // game.onOver(function () {
    //   gameOver(game.score);
    // });
  }
  
  function buildHowTo() {
    howToScreen = buildDom(`
      <main>
        <div>
          <h1>How to play</h1>
          <p>Player plays against computer, has three seconds to pick 'Rock'🗿 'Paper'📄 or 'Scissors'✂️.
            to win you have to wint the computer at least two times.
            scissors cut paper = ✂️💪
            paper wraps rock = 📄💪
            rock crushes scissors = 🗿💪
          </p>
          <div class="how-to">
            <button class="button">Go back</button>
          </div>
        </div>
      </main>
  
    `);
    document.body.appendChild(howToScreen);
  }

  function splashHowTo() {
    destroySplash();
    buildHowTo();
  }

  function destoyHowTo() {
    splashHowTo.remove();
  }
  


  //-- Splash - How to Play --//



  //-- Game--//




  //-- Game Over --//






  buildSplash();

  
}

window.addEventListener('load', main);
