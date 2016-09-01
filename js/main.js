// GLOBAL VARIABLES
var counter = 0;
var score = 0;
var timer = 30;

// TIMER FUNCTION

var stopGame;
var timerCountdown;

function startTimer(){
  $('#timer').html('Timer: ' + timer);
  stopGame = setTimeout(function(){
    stop();
  }, 31000);
  timerCountdown = setInterval(function(){
    $('#timer').html('Timer: ' + timer--);
  }, 1000);
}

// SCREEN DISPLAY

function showScreen(id){
  $(id).show();
}

function hideScreen(id){
  $(id).on('click', function(evt){
    $(this).hide();
  });
}

function changeScoreDisplay(){
  $('#score').html('Score: ' + score);
}

// STOP GAME
function stop(){
  clearTimeout(stopGame);
  clearInterval(timerCountdown);
  clearInterval(regenerateID);
  if (score < 13) {
    window.alert('Time is up!');
    $('#game').hide();
    $('#lose').show();
  } else {
    window.alert('Time is up!');
    $('#game').hide();
    $('#win').show();
  }
}

// DIV NAVIGATION

function init() {
  $('#splash').show();
  $('#start').on('click', function(evt){
    hideScreen('#splash');
    showScreen('#story');
  });
  $('#arrow-1').on('click', function(evt){
    hideScreen('#story');
    showScreen('#story-2');
  });
  $('#arrow-2').on('click', function(evt){
    hideScreen('#story-2');
    showScreen('#instructions');
  });
  $('#ready-to-play').on('click', function(evt){
    hideScreen('#instructions');
    showScreen('#game');
    startTimer();
    replaceSpiders();
  });
  $('.replay-yes').on('click', function(evt){
    hideScreen('#win');
    hideScreen('#lose');
    showScreen('#game');
    startTimer();
    score = 0;
    changeScoreDisplay();
    replaceSpiders();
    timer = 30;
  });
}


// up score when correct spider is hit
function correctHit(){
  score++;
}

// down score when wrong spider is hit
function wrongHit(){
  if (score > 0){
    score--;
  } else {
    return;
  }
}

// get random numbers
function getRandom(){
  return Math.round(Math.random());
}

function getRandom3(){
  return Math.floor(Math.random() * 3);
}

// ID for setInterval so I can clear it
var regenerateID;

//
function replaceSpiders(){
  regenerateID = setInterval(function(){
    $('.spider-column').each(function(ind, column){
      $(this).html('');
      var result = getRandom();
      var resultID = getRandom3();
      if (result == 1){
        $(this).append('<img class="true spider p' + resultID + '" src="images/animated-widow.gif">');
      } else {
        $(this).append('<img class="false spider p' + resultID + '" src="images/animated-jumping.gif">');
      }
    });
  }, 4000);
}

// variable to grab gameboard
var $gameboard = $('#gameboard');

// when you remove wrong spiders
$('document').ready(function(){
  $gameboard.on('click', '.false', function() {
    $(this).remove();
    wrongHit();
    changeScoreDisplay();
  });
});

// to remove spiders who were hit
$('document').ready(function(){
  $gameboard.on('click', '.true', function() {
    $(this).remove();
    // $(this).closest('td').removeClass('spider-column').addClass('empty');
    correctHit();
    changeScoreDisplay();
  });
});
