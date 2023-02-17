var questions = [
  {
    question: "In an if/else statement, what is the condition enclosed in?",
    options: ["quotes", "culry brackets", "parantheses", "square brackets"],
    answer: "parantheses"
 
  },
  {
    question: "Commonly used data types do not include?",
    options: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    question: "Arrays in JavaScript can be used to store?",
    options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"
  },
  {
    question: "When being assigned to a variable, string values must be enclosed within?",
    options: ["quotes", "curly brackets", "commas", "parantheses"],
    answer: "quotes"
  },
  {
    question: "A useful tool during development and debugging for printing content is:?",
    options: ["JavaScript", "console log", "terminal", "toothbush"],
    answer: "console log"
  }
];

var startButton = document.getElementById("start-button");
var questionScreen = document.getElementById("question-screen");
var questionElement = document.getElementById("question");
var optionsElement = document.getElementById("options");
var scoreElement = document.getElementById("score");
var initialsElement = document.getElementById("initials");
var saveButton = document.getElementById("save-button");
var timer = document.getElementById("timer");
var answerStatus = document.getElementById("answerStatus")

var currentQuestionIndex;
var score;
var timeLeft;
var timerInterval = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  timeLeft = 60;
  startTimer();
  showQuestionScreen();
  showNextQuestion();
}

function startTimer() {
  var timerInterval = setInterval(function() {
    timeLeft--;
    timer.innerText = "Time Remaining: " + timeLeft;
    //need to display timer, if right or wrong and initials with score
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}

function showQuestionScreen() {
  document.getElementById("start-screen").classList.add("hidden");
  questionScreen.classList.remove("hidden");
  document.getElementById("game-over-screen").classList.add("hidden");
}

function showNextQuestion() {
  if (currentQuestionIndex < questions.length) {
    var currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
    for (var i = 0; i < currentQuestion.options.length; i++) {
      var option = document.createElement("button");
      option.classList.add("option");
      option.textContent = currentQuestion.options[i];
      option.addEventListener("click", handleOptionClick);
      optionsElement.appendChild(option);
    }
  } else {
    endQuiz();
  }
}

function handleOptionClick(event) {
  var selectedOption = event.target.textContent;
  var currentQuestion = questions[currentQuestionIndex];
  if (selectedOption === currentQuestion.answer) {
    score += 10;
    answerStatus.innerText = "Last question: ✅ Correct";
  } else {
    timeLeft -= 10;
    answerStatus.innerText = "Last question: ❌ Incorrect";
  }
  currentQuestionIndex++;
  showNextQuestion();
}

function endQuiz() {
  clearInterval(timerInterval);
  questionScreen.classList.add("hidden");
  document.getElementById("game-over-screen").classList.remove("hidden");
  scoreElement.textContent = score;
  answerStatus.innerText = "";
}

startButton.addEventListener("click", startQuiz);
saveButton.addEventListener("click", saveScore);

function saveScore() {
  var initials = initialsElement.value;
  var scoreData = { initials, score };
  var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  highScores.push(scoreData);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(5);
  localStorage.setItem("highScores", JSON.stringify(highScores));
  // window.location.href = "highscores.html";
}

startButton.addEventListener("click", startQuiz);
saveButton.addEventListener("click", saveScore);



