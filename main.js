'use strict';


function buildDom(html) {
  var div = document.createElement('div');
  div.innerHTML = html;
  return div.children[0];
}

function main() {

  var splashMain;
  var gameOverMain;

  var game; // instance of Game

  // -- splash

  var input = splashMain.querySelector('input');

  var username = splashMain.querySelector('input');
  input.addEventListener('keyup', username);
  
  function username(){
    var typeName = input.value;
    console.log(typeName);
    return typeName;
  }

  function buildSplash() {

    splashMain = buildDom(`
      <main>
        <h1>Up or Down</h1>
        <button>Start</button>
        <label for="username">Username</label>
        <input type="username">
      </main>
    `);
    
    
    var button = splashMain.querySelector('button');
    button.addEventListener('click', startGame);
    
    };
    
    
    document.body.appendChild(splashMain);
  }



  function destoySplash() {
    splashMain.remove();
  }

  
  // -- game

  function startGame() {
    destoySplash();
    destoyGameOver();

    game = new Game();
    game.start();
    game.onOver(function () {
      gameOver(game.score);
    });

  }

  function destroyGame() {
    game.destroy();
  }

  // -- game over 


  function gameOver(score) {
    destroyGame();
    buildGameOver(score);
  }

  function buildGameOver(score) {

    gameOverMain = buildDom(`
      <main>
        <h1>game over</h1>
        <p>Your score: <span></span></p>
        <button>restart</button>
      </main>
    `);

    var button = gameOverMain.querySelector('button');
    button.addEventListener('click', startGame);    
    
    var span = gameOverMain.querySelector('span');
    span.innerText = score;

    document.body.appendChild(gameOverMain);
  }

  function destoyGameOver() {
    if (gameOverMain) {
      gameOverMain.remove();
    }
  }

  // -- initialize

  buildSplash();
}

window.addEventListener('load', main);