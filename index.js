let buttonColours = ['red', 'blue', 'green', 'yellow'];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;

$(document).keypress(function () { 
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }

});

$('.box').click(function () {
  // let userChosenColour = e.target.id;
  let userChosenColour = $(this).attr('id');
  userClickedPattern.push(userChosenColour);

  // $('#' + userChosenColour).fadeOut('fast').fadeIn('fast');

  playSound(userChosenColour);

  animatePress(userChosenColour);
});

function nextSequence() {
  level++;
  $("#level-title").text("Level " + level);
  
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColours[randomNumber];
  gamePattern.push(randomChosenColor);

  $('#' + randomChosenColor).fadeOut('fast').fadeIn('fast');

  playSound(randomChosenColor);

}

function playSound(name) {
  let audio = new Audio('sounds/' + name + '.mp3');
  audio.play();
}

function animatePress(currentColour) {
  $('#' + currentColour).addClass('pressed');

  setInterval(() => {
    $('#' + currentColour).removeClass('pressed');
  }, 100);
}