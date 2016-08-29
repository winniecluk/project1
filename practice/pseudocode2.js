// screen 1 will be an intro screen.
// elements: button, image
// functionality: you will have to click the button to move onto the next screen.

// screen 2 will be a story screen.
// elements: images, text
// functionality: you will have to click the arrow to continue to the next screen.

// screen 3 will be an instructions screen.
// elements: images, text
// functionality: you will have to click the button to start the game.
//  TIMER STARTS WHEN YOU CLICK START

// screen 4 will be the main game screen.
// elements: 6 divs, spider images, timer, score counter
// you will have 1 minute to hit 8 spiders correctly to move onto the win screen.
// hitting 8 spiders sets off a window alert and then moves you onto the win screen once you click OK.
// hitting a correct spider gives you one point, hitting an incorrect spider takes away one point.
// if 1 minute has passed and you have not hit 8 correct spiders, it sets off
// a window alert that time is up, and you move onto the lose screen.

// screen 5 is the win screen.
// elements: button
// functionality: you can hit the button to replay.

// screen 6 is the lose screen.
// elements: button
// functionality: you can hit the button to replay.

// variables I'll need
// score counter
var score = 0;
// win = true or false
var win = 0;

// functions I'll need, and
// initialize the game

function init() {

}

// to move from screen to screen
var showScreenArray = ['#splash', '#story', '#instructions', '#game', '#win', '#lose'];

function moveScreen() {
  showScreenArray.forEach(function(screen){
    var buttonName = screen + '-button';
    var hideScreenArray = showScreenArray.slice(1, showScreenArray.length);
    $(buttonName).on('click', hideScreen);
    $(buttonName).on('click', showScreen);
  });
}

  // to hide a screen
function hideScreen(id){
  $(id).hide();
}
  // to show a screen
function showScreen(id){
  $(id).show();
}

// to start the timer

function startTimer(){
  setTimeout(stopGame, 3000);
}

// to stop the game once 1 minute is up
function stopGame(){
  if (score >= 8){
    window.alert('You won!');
    hideScreen('#game');
    showScreen('#win');
  } else {
    window.alert('You lost!');
    hideScreen('#game');
    showScreen('#lose');
  }
}

// to up the score every time a correct spider is hit

function correctHit(){
  score++;
}


  // to down the score every time an incorrect spider is hit

function wrongHit(){
  if (score > 0){
    score--;
  } else {
    return;
  }
}

// to check whether or not the spider is correct

$('.true').on('click', correctHit);
$('.false').on('click', wrongHit);


// to test win condition
