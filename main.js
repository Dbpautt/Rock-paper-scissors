'use strict';


function buildDom(html) {
  var div = document.createElement('div');
  div.innerHTML = html;
  return div.children[0];
}

function main() {


  var splashMain;
  var splashHowTo = null;
  var gameOverMain = null ;
  var game = null;

  //-- Game Splash --//
  function buildSplash() {

    splashMain = buildDom(`
      <main id="site-main">
        <div class="container">
          <h1>Rock, Paper, Scissors!</h1>
          <label for="name"></label>
          <input type="text" placeholder="What's your name?">
          <button>Start</button>
        </div>
        <div class="footer">
          <button>i</button>
        </div>
      </main>
    `);
    
    document.body.appendChild(splashMain);

    var button = splashMain.querySelector('button');
    button.addEventListener('click', startGame);
  }

  // function destoySplash() {
  //   splashMain.remove();
  // }



  //-- Splash - How to Play --//



  //-- Game--//




  //-- Game Over --//






  buildSplash();

}

window.addEventListener('load', main);
