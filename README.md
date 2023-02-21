
# Web APIs Challenge: Code Quiz
![License Badge](https://img.shields.io/badge/License-MIT-green)

## Table of Contents
* [Description](#description)
* [Examples](#examples)
* [Technologies](#technologies)
* [License](#license)


## Description
The purpose of this challenge was to create a timed quiz using JavaScript fundamentals

## Examples
Created a function that shows the next question by displays th enext question in the index and hides other elements of the page for display purposes.
```JavaScript

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
```

Created a function that saves the current games score to localstorage to be displayed during the next game.
```JavaScript

function saveScore() {
  var thisGame = score + " by " + initialsElement.value;
  localStorage.setItem('previousScore', thisGame);
}

```
## Technologies
* ![HTML Badge](https://img.shields.io/badge/Language-HTML-blue)
* ![CSS Badge](https://img.shields.io/badge/Language-CSS-yellow)
* ![JS Badge](https://img.shields.io/badge/Language-JavaScript-yellow)

## License
Copyright 2023 Matt Fleming

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.