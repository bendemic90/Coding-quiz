var tenQuestions = [
  "In which HTML tag does JavaScript reside?",

  "Where does JavaScript go within the HTML file?",

  "How would someone make an alert box in JS that reads 'Click me'",

  "What is the correct syntax of a typical for loop?",

  "Which of these IF statements is correct?",

  "How many times will this for loop execute: 'for (i = 0; i < 97; i++)",

  "Which of these is an array?",

  "What will split(\"\") do to this array? - [1234]",

  "What is the % operator called?",

  "What will this return? Math.ceil(4, 8)",

];
var answers = [
  "<body>",
  "<html>",
  "<footer>",
  "<header>",

  "Within the <script> tag",
  "Inside !DOCTYPE",
  "Within the <footer> tag",
  "It can go wherever it wants",

  "alert(\"Click me\")",
  "alert.clickMe",
  "alert(function {'click me'})",
  "alert = click me",

  "for (var i = 0; i+=)",
  "for (i = 0, i >= arr.length, i--)",
  "for (i = 0; i < arr.length; i++)",
  "for (i = 0; function(), i+-)",

  "if (i > 0) {}",
  "if i = 0",
  "if [i === 0] then (x, y)",
  "if {x, y} => (n)",

  "92",
  "95",
  "97",
  "99",

  "var fruit = {orange, mandarin}",
  "var drinks = [coke, pepsi, iced-coffee]",
  "var num = (1, 2, 3, 4, 5)",
  "const op = (){+, -, /, %, ^}",

  "",
  "",
  "",
  "",

  "",
  "",
  "",
  "",

  "",
  "",
  "",
  "",
]
var secondsLeft = 60;
var timeEl = document.querySelector(".time");
var startBtn = document.getElementById("#start-btn");
var questions = document.querySelector("#questions-here");
var answer1 = document.querySelector("#a1");
var answer2 = document.querySelector("#a2");
var answer3 = document.querySelector("#a3");
var answer4 = document.querySelector("#a4");

$("#start-btn").on("click", function () {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
      timeEl.textContent = " ";
    }
  }, 1000);
});

$("#start-btn").on("click", function () {
  i = (Math.floor(Math.random() * tenQuestions.length));
  console.log(i.length);
  questions.textContent = tenQuestions[i];
    if (questions.textContent === tenQuestions[0]) {
      answer1.textContent = answers[0]
      answer2.textContent = answers[1]
      answer3.textContent = answers[2]
      answer4.textContent = answers[3]
      tenQuestions.splice(i, 1);
      console.log(tenQuestions);
    }
    if (questions.textContent === tenQuestions[1]) {
      answer1.textContent = answers[0]
      answer2.textContent = answers[1]
      answer3.textContent = answers[2]
      answer4.textContent = answers[3]
    }
    if (questions.textContent === tenQuestions[2]) {
      answer1.textContent = answers[0]
      answer2.textContent = answers[1]
      answer3.textContent = answers[2]
      answer4.textContent = answers[3]
    }
    if (questions.textContent === tenQuestions[3]) {
      answer1.textContent = answers[0]
      answer2.textContent = answers[1]
      answer3.textContent = answers[2]
      answer4.textContent = answers[3]
    }
    if (questions.textContent === tenQuestions[4]) {
      answer1.textContent = answers[0]
      answer2.textContent = answers[1]
      answer3.textContent = answers[2]
      answer4.textContent = answers[3]
    }
    if (questions.textContent === tenQuestions[5]) {
      answer1.textContent = answers[0]
      answer2.textContent = answers[1]
      answer3.textContent = answers[2]
      answer4.textContent = answers[3]
    }
    if (questions.textContent === tenQuestions[6]) {
      answer1.textContent = answers[0]
      answer2.textContent = answers[1]
      answer3.textContent = answers[2]
      answer4.textContent = answers[3]
    }
    if (questions.textContent === tenQuestions[7]) {
      answer1.textContent = answers[0]
      answer2.textContent = answers[1]
      answer3.textContent = answers[2]
      answer4.textContent = answers[3]
    }
    if (questions.textContent === tenQuestions[8]) {
      answer1.textContent = answers[0]
      answer2.textContent = answers[1]
      answer3.textContent = answers[2]
      answer4.textContent = answers[3]
    }
    if (questions.textContent === tenQuestions[9]) {
      answer1.textContent = answers[0]
      answer2.textContent = answers[1]
      answer3.textContent = answers[2]
      answer4.textContent = answers[3]
    }
  });

//$("#restart-btn").on("click", function(){})

function sendMessage() {
  alert("You are out of time!");
  timeEl.textContent = " ";
  secondsLeft = 60;
}
