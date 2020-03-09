var buttonColors = ['red', 'blue', 'green', 'yellow'];
var gamePattern = [];
var userClickedPattern = [];
var blueSound = new Audio('sounds/blue.mp3');
var greenSound = new Audio('sounds/green.mp3');
var redSound = new Audio('sounds/red.mp3');
var yellowSound = new Audio('sounds/yellow.mp3');
var wrongSound = new Audio('sounds/wrong.mp3');
var level = 0;
var started = false;

function nextSequence() {
  level++;

  $('#level-title').text('Level ' + level);

  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);

  $('#' + randomChosenColor).fadeOut(100).fadeIn(100);

  playSound(randomChosenColor);
}

function onBtnClick(event) {
  
  var userChosenColor = this.id;

  userClickedPattern.push(userChosenColor);

  checkAnswer(userClickedPattern.length - 1);

  playSound(userChosenColor);

  animatePress(userChosenColor);
}

function playSound(audioName) {
  
  switch (audioName) {
    case 'red': redSound.play(); break;
    case 'blue': blueSound.play(); break;
    case 'green': greenSound.play(); break;
    case 'yellow': yellowSound.play(); break;
    case 'wrong': wrongSound.play(); break;
    default: ;
  }
}

function animatePress(currentColor) {
  $('#' + currentColor).addClass('pressed');

  setTimeout(function() {
    $('#' + currentColor).removeClass('pressed');
  }, 100);
}

function checkAnswer(currentLevel) {

  if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
    
    if (gamePattern.length === currentLevel + 1) {
      setTimeout(nextSequence, 1000);
      userClickedPattern = [];
    }
    
  } else {
    wrongSound.play();
    startOver();
    $('#level-title').text('Game Over, Press Any Key to Restart');
    $('body').addClass('game-over');
    setTimeout(function() {
      $('body').removeClass('game-over');
    }, 200);
  }

}

function startOver() {
  level = 0;
  started = false;
  gamePattern = [];
  userClickedPattern = [];
}

$(document).on('click', '.btn', onBtnClick);

$(document).keydown(function(event) {

  if (!started) {
    started = true;
    nextSequence();
  }
});