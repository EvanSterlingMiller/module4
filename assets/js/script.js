


var startButton = document.getElementById("start-button");




startButton.addEventListener("click", startQuiz);



function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 60;
    showQuestion();
    // add a timer and show the next question
  }


  function showQuestion() {
    document.getElementById("startView").classList.add("hidden");
    // classlist: cool property found on stackflow
    questionView.classList.remove("hidden");
    console.log("hi")
    document.getElementById("gameoverView").classList.add("hidden");
  }