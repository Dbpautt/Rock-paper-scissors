# Rock-paper-scissors

## Description

This will be a Rock paper scissors game, dreaming to become a Rock Paper Scissors Lizard Spock game. 

## MVP (DOM - CANVAS)
Technology => DOM - HTML// CSS

**_Definition:_**

Player plays against computer, has three seconds to pick *'Rock':moyai: 'Paper':page_facing_up: or 'Scissors':scissors:*, the game displays result.

**MVP**
- Create players choices
- Create PC choices
- Display PC result
- Compare results
- Display outcome
- Create three rounds
- set a timer for lose conditions
- Have the three stages (Splash - Game - Game Over)


###### Win conditions:

Player beats PC 3/3 or 2/3

> scissors cut paper = :scissors::muscle:

> paper wraps rock = :page_facing_up::muscle:

> rock  crushes scissors = :moyai::muscle:

###### Lose conditions:

Lose turn if there's no choice after 3 seconds
PC beats player PC 3/3 or 2/3 

## Backlog

Make it  Rock Paper Scissors _Lizard🦎 Spock 🖖_
Create a page to select new player after game over wihtout the need to refresh
Effects
Music


## States y States Transitions

[States and Transitions Diagram](https://drive.google.com/file/d/1d5UhL2zXnw0JjnEuwb_YjMpOinpZJK6-/view?usp=sharing)

- splashScreen
  - howToScreen
- startScreen
  - countDown screen
  - gameScreen
  - revealResult
- gameoverScreen
  - winScreen
  - loseScreen
  
## Data structure
Classes and methods definition.

```javascript
Main.js
  buildDom() {};
  main;
    buildSplash;
    addEventListenerHowTo;
    buildHowTo;
    addEventListenerSplash;
    destroyHowTo;
    destroySplash;
    
    buildGameOver(win)
     if (win){ // html congrats
     else (){};// html loser
    addEventListenerRestart
 
 __________________________________
 Game.js
  Game;
    countdownGame
    
    mainGame() 
    triggerNewGame
    buildNewGame();
    chooseRPS
    revealCPUChoice
    compare
    
    
```

## Task
- buildDom Function.

- splashScreen :
  - HTML strcuture and classes.
  - JS build mainSplash.
  - add event listener start.
  - startGame.
  - add event listener howto.
  - howtoScreen.
  
- howToScreen:
  - HTML strcuture and classes.
  - add event listener to go back to main splash screen.
  - go to mainSplash

- startGame:
  - **countDownScreen:**
    - HTML strcuture and classes.
    - trigger startGame
    
  - **mainGame:**
    - HTML strcuture and classes.
    - create array of objects.
    - create score.
    - timer.
    - add event listener for player pick.
    - randomize pc pick object.
    - compare.
  
  - **revealResult screen:**
    - HTML strcuture and classes.
    - update score
  
- gameoverScreen:  
    - build win/lose condition.
  - **winScreen:**
    - HTML strcuture and classes.
    - recall score.
    - recall name.
  
  - **loseScreen:**
    - HTML strcuture and classes.

## Links

[Trello Link](https://trello.com/b/bPLqhmvj/m1-game)


URls for the project repo and deploy
[GitHub Link to the Repo](https://github.com/Dbpautt/Rock-paper-scissors)
[Link Deploy - TBD](http://github.com)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)
