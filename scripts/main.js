'use strict';


function buildDom(html) {
  var div = document.createElement('div');
  div.innerHTML = html;
  return div.children[0];
}

function main() {


  var splashMain;
  var howToScreen;
  var gameIntro;
  var gameOverMain = null ;
  var game = null;

  //-- Game Main Splash --//
  function buildSplash() {

    splashMain = buildDom(`
      <main class="game container">
        <div class="splash">
          <h1>Rock, Paper, Scissors!</h1>
          <label for="name">What's your name?</label>
          <input type="text" placeholder="Edward Scissorhands">
          <button>Start</button>
          <img class ="gif" src="./RPS icons/rock-paper-scissors.gif">
          </div>
          <div class="how-to">
            <button class="how-to-button">How to play</button>
          </div>
      </main>
    `);
    
    document.body.appendChild(splashMain);

    var button = splashMain.querySelector('button');
    button.addEventListener('click', mainGame);

    var buttonHowTo = splashMain.querySelector('div.how-to button');
    buttonHowTo.addEventListener('click', splashHowTo);
  
  }

  function destroySplash() {
    splashMain.remove();
  }

  //-- Splash - How to Play --//

  function buildHowTo() {
    howToScreen = buildDom(`
      <main class="game container">
        <div class = "splash">
          <h1>How to play</h1>
          <img src="https://media3.giphy.com/media/Xmbnu0oH3bMEo/giphy.gif" >
          <p>You play against the computer, and have 2 seconds to pick:</p>
            <div class="icon">
              <img src="./RPS icons/rock2.png" class="icon" width="25%" height="25%">
              <img src="./RPS icons/paper2.png" class="icon" width="25%" height="25%">
              <img src="./RPS icons/scissors2.png" class="icon" width="25%" height="25%">
          </div>
          <p>To win you have to <strong>beat the computer</strong> at least two times.<br>
          scissors cuts paper = ✂️<br>
          paper wraps rock = 📄<br>
          rock crushes scissors = 🗿
          </p>
          <div class="how-to">
            <button class="button">Go back</button>
          </div>
        </div>
      </main>
  
    `);
    document.body.appendChild(howToScreen);

    var goBack = howToScreen.querySelector('div.how-to button');
    goBack.addEventListener('click', returnMain);
  }

  function splashHowTo() {
    destroySplash();
    buildHowTo();
  }

  function destroyHowTo() {
    howToScreen.remove();
  }
  
  function returnMain() {
    destroyHowTo();
    buildSplash();
  }

  //-- Game--//

  function mainGame() {
    destroySplash();
    // destroyGameOver();

    game = new Game();
    game.roundScreen();
    // game.onOver(function () {
    //   gameOver(game.score);
    // });
  }

  buildSplash();

  
}

window.addEventListener('load', main);
