var tenQuestions = [
  "In which HTML tag does JavaScript reside?",

  "Where does JavaScript go within the HTML file?",

  "How would someone make an alert box in JS that reads 'Click me'",

  "What is the correct syntax of a typical for loop?",

  "Which of these IF statements is correct?",

  "How many times will this for loop execute: 'for (i = 0; i < 97; i++)",

  "Which of these is an array?",

  'What will .split("") do to this array? [1234]',

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

  'alert("Click me")',
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

  "Empty the array",
  "Turn the numbers into string",
  "Seperate the numbers into individual indexes in an array",
  "Create four arrays with [1234]",

  "Concatenate",
  "Log",
  "Percentage",
  "Modulus",

  "12",
  "4",
  "8",
  "48",
];

var score = 0;
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

$("#your-score").text(score);

$("#start-btn").on("click", function questionnaire() {
  var i = Math.floor(Math.random() * tenQuestions.length);
  questions.textContent = tenQuestions[i];
  if (questions.textContent === tenQuestions[0]) {
    answer1.textContent = answers[0];
    answer2.textContent = answers[1];
    answer3.textContent = answers[2];
    answer4.textContent = answers[3];
    tenQuestions.splice(i, 1);
    $(answer1).on("click", function () {
      score++;
      $("#your-score").text(score);
      questionnaire()
    });
    $(answer2).on("click", function () {
      for (j = 0; j < 5; j++) {
        secondsLeft--;
      }
      questionnaire()
    });
    $(answer3).on("click", function () {
      for (j = 0; j < 5; j++) {
        secondsLeft--;
      }
      questionnaire()
    });
    $(answer4).on("click", function () {
      for (j = 0; j < 5; j++) {
        secondsLeft--;
      }
      questionnaire()
    });
  }
  if (questions.textContent === tenQuestions[1]) {
    answer1.textContent = answers[4];
    answer2.textContent = answers[5];
    answer3.textContent = answers[6];
    answer4.textContent = answers[7];
    tenQuestions.splice(i, 1);
    $(answer1).on("click", function () {
      score++;
      $("#your-score").text(score);
      questionnaire()
    });
    $(answer2).on("click", function () {
      for (j = 0; j < 5; j++) {
        secondsLeft--;
      }
      questionnaire()
    });
    $(answer3).on("click", function () {
      for (j = 0; j < 5; j++) {
        secondsLeft--;
        questionnaire()
      }
    });
    $(answer4).on("click", function () {
      for (j = 0; j < 5; j++) {
        secondsLeft--;
        questionnaire()
      }
    });
  }
  if (questions.textContent === tenQuestions[2]) {
    answer1.textContent = answers[8];
    answer2.textContent = answers[9];
    answer3.textContent = answers[10];
    answer4.textContent = answers[11];
    tenQuestions.splice(i, 1);
    $(answer1).on("click", function () {
      score++;
      $("#your-score").text(score);
      questionnaire()
    });
    $(answer2).on("click", function () {
      for (j = 0; j < 5; j++) {
        secondsLeft--;
      }
      questionnaire()
    });
    $(answer3).on("click", function () {
      for (j = 0; j < 5; j++) {
        secondsLeft--;
      }
      questionnaire()
    });
    $(answer4).on("click", function () {
      for (j = 0; j < 5; j++) {
        secondsLeft--;
      }
      questionnaire()
    });
  }
  if (questions.textContent === tenQuestions[3]) {
    answer1.textContent = answers[12];
    answer2.textContent = answers[13];
    answer3.textContent = answers[14];
    answer4.textContent = answers[15];
    tenQuestions.splice(i, 1);
    $(answer3).on("click", function () {
      score++;
      $("#your-score").text(score);
      questionnaire()
    });
    $(answer2).on("click", function () {
      for (j = 0; j < 5; j++) {
        secondsLeft--;
      }
      questionnaire()
    });
    $(answer1).on("click", function () {
      for (j = 0; j < 5; j++) {
        secondsLeft--;
      }
      questionnaire()
    });
    $(answer4).on("click", function () {
      for (j = 0; j < 5; j++) {
        secondsLeft--;
      }
      questionnaire()
    });
  }
  if (questions.textContent === tenQuestions[4]) {
    answer1.textContent = answers[16];
    answer2.textContent = answers[17];
    answer3.textContent = answers[18];
    answer4.textContent = answers[19];
    tenQuestions.splice(i, 1);
    $(answer1).on("click", function () {
      score++;
      $("#your-score").text(score);
      questionnaire()
    });
    $(answer2).on("click", function () {
      for (j = 0; j < 5; j++) {
        secondsLeft--;
      }
      questionnaire()
    });
    $(answer3).on("click", function () {
      for (j = 0; j < 5; j++) {
        secondsLeft--;
      }
      questionnaire()
    });
    $(answer4).on("click", function () {
      for (j = 0; j < 5; j++) {
        secondsLeft--;
      }
      questionnaire()
    });
  }
  if (questions.textContent === tenQuestions[5]) {
    answer1.textContent = answers[20];
    answer2.textContent = answers[21];
    answer3.textContent = answers[22];
    answer4.textContent = answers[23];
    tenQuestions.splice(i, 1);
    $(answer3).on("click", function () {
      score++;
      $("#your-score").text(score);
      questionnaire()
    });
    $(answer2).on("click", function () {
      for (j = 0; j < 5; j++) {
        secondsLeft--;
      }
      questionnaire()
    });
    $(answer1).on("click", function () {
      for (j = 0; j < 5; j++) {
        secondsLeft--;
      }
      questionnaire()
    });
    $(answer4).on("click", function () {
      for (j = 0; j < 5; j++) {
        secondsLeft--;
      }
      questionnaire()
    });
  }
  if (questions.textContent === tenQuestions[6]) {
    answer1.textContent = answers[24];
    answer2.textContent = answers[25];
    answer3.textContent = answers[26];
    answer4.textContent = answers[27];
    tenQuestions.splice(i, 1);
    $(answer2).on("click", function () {
      score++;
      $("#your-score").text(score);
      questionnaire()
    });
    $(answer3).on("click", function () {
      for (j = 0; j < 5; j++) {
        secondsLeft--;
      }
      questionnaire()
    });
    $(answer1).on("click", function () {
      for (j = 0; j < 5; j++) {
        secondsLeft--;
      }
      questionnaire()
    });
    $(answer4).on("click", function () {
      for (j = 0; j < 5; j++) {
        secondsLeft--;
      }
      questionnaire()
    });
  }
  if (questions.textContent === tenQuestions[7]) {
    answer1.textContent = answers[28];
    answer2.textContent = answers[29];
    answer3.textContent = answers[30];
    answer4.textContent = answers[31];
    tenQuestions.splice(i, 1);
    $(answer3).on("click", function () {
      score++;
      $("#your-score").text(score);
      questionnaire()
    });
    $(answer1).on("click", function () {
      for (j = 0; j < 5; j++) {
        secondsLeft--;
      }
      questionnaire()
    });
    $(answer2).on("click", function () {
      for (j = 0; j < 5; j++) {
        secondsLeft--;
      }
      questionnaire()
    });
    $(answer4).on("click", function () {
      for (j = 0; j < 5; j++) {
        secondsLeft--;
      }
      questionnaire()
    });
  }
  if (questions.textContent === tenQuestions[8]) {
    answer1.textContent = answers[32];
    answer2.textContent = answers[33];
    answer3.textContent = answers[34];
    answer4.textContent = answers[35];
    tenQuestions.splice(i, 1);
    $(answer4).on("click", function () {
      score++;
      $("#your-score").text(score);
      questionnaire()
    });
    $(answer2).on("click", function () {
      for (j = 0; j < 5; j++) {
        secondsLeft--;
      }
      questionnaire()
    });
    $(answer3).on("click", function () {
      for (j = 0; j < 5; j++) {
        secondsLeft--;
      }
      questionnaire()
    });
    $(answer1).on("click", function () {
      for (j = 0; j < 5; j++) {
        secondsLeft--;
      }
      questionnaire()
    });
  }
  if (questions.textContent === tenQuestions[9]) {
    answer1.textContent = answers[36];
    answer2.textContent = answers[37];
    answer3.textContent = answers[38];
    answer4.textContent = answers[39];
    tenQuestions.splice(i, 1);
    $(answer3).on("click", function () {
      score++;
      $("#your-score").text(score);
      questionnaire()
    });
    $(answer2).on("click", function () {
      for (j = 0; j < 5; j++) {
        secondsLeft--;
      }
      questionnaire()
    });
    $(answer1).on("click", function () {
      for (j = 0; j < 5; j++) {
        secondsLeft--;
      }
      questionnaire()
    });
    $(answer4).on("click", function () {
      for (j = 0; j < 5; j++) {
        secondsLeft--;
      }
      questionnaire()
    });
  }
});

//$("#restart-btn").on("click", function(){})

function sendMessage() {
  alert("You are out of time!");
  alert("Your score is " + score);
  timeEl.textContent = " ";
  answer1.textContent = "A";
  answer2.textContent = "B";
  answer3.textContent = "C";
  answer4.textContent = "D";
  questions.textContent = "...";
  secondsLeft = 60;
  score = 0;
  location.reload()
}
