
// this is an array that assigs an object that contains the question and answer to a variable
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

// assigning html elements to specific variables
var startButton = document.getElementById("start-button");
var questionScreen = document.getElementById("question-screen");
var questionElement = document.getElementById("question");
var optionsElement = document.getElementById("options");
var scoreElement = document.getElementById("score");
var initialsElement = document.getElementById("initials");
var saveButton = document.getElementById("save-button");
var timer = document.getElementById("timer");
var answerStatus = document.getElementById("answerStatus")
var lastScoreElement = document.getElementById("lastScore");

var currentQuestionIndex;
var score;
var timeLeft;
var timerInterval = 0;

// this function is called by an event listner to start the game
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  timeLeft = 60;
  startTimer();
  showQuestionScreen();
  showNextQuestion();
  var savedData = localStorage.getItem('previousScore');

  if (savedData != null) {
  lastScoreElement.innerText = "Previous Score : " + savedData
  };

}

function startTimer() {
  var timerInterval = setInterval(function() {
    timeLeft--;
    timer.innerText = "Time Remaining: " + timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}

// this function changes to the html to hide what the other views and display a quesion
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

// this function saves the score and usersname to local storage to be displayed in the next game
function saveScore() {
  var thisGame = score + " by " + initialsElement.value;
  localStorage.setItem('previousScore', thisGame);
}

startButton.addEventListener("click", startQuiz);
saveButton.addEventListener("click", saveScore);



