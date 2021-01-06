var question1 = "In which HTML tag does JavaScript reside?";
var question2 = "Where does JavaScript go within the HTML file?";
var question3 = "How would someone make an alert box in JS that reads 'Click me'";
var question4 = "What is the correct syntax for a typical for loop?";
var question5 = "Which of these IF statements is correct?";
var question6 = "How many times will this for loop execute?";
var question7 = "Which of these is an array?";
var question8 = "";
var question9 = "";
var question10 = "";
var secondsLeft = 5;
var timeEl = document.querySelector(".time");


function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;  
    timeEl.textContent = secondsLeft + " seconds left.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
      timeEl.textContent = " ";
    }

  }, 1000);
}

function sendMessage() {
    alert("You are out of time!")
}

setTime();