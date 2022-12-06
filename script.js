//needed vars for functions to be ran
var buttonEl = document.querySelector("#button");
var timeEl = document.querySelector("#time"); //lesson 9
var startEl = document.querySelector("#start-div");
var questionEl = document.querySelector("#questions-div");
var endEl = document.querySelector("#end-div");
var submitEl = document.querySelector("#submit");
var resultsEl = document.querySelector("results");
var questionIndex = 0;
var choicesEl = document.getElementById("choices");
var intervalId;
var time = 60;

//increment and decrement functions?

//vars for questions and answers

var questions = [
  //array of objects
  {
    question: "What is JavaScript?", //objects
    choices: [
      "Building dynamic pages",
      "Sipping coffee while writing code",
      "An object oriented program language",
      "A backend library used to store tables",
    ],
    answer: "An object oriented program language",
  },
  {
    question: "What is CSS in programing?",
    choices: {
      quesA: "Building Case Studies in programing",
      quesB: "Cascading Sigma Styles",
      quesC: "A backend language used to style the frontend layout",
      quesD: "Styles the layout of an HTML page",
    },
    answer: "quesA",
  },
  {
    question: "A web API can do the following:",
    choices: {
      quesA: "Extend functionality of the browser",
      quesB: "Abolish Programing Interfaces",
      quesC: "Prevent cyber hackers from hacking",
      quesD: "Connect users to local 404 hosts",
    },
    answer: "quesA",
  },
  {
    question: "DOM methods are:", // array of questions
    choices: {
      quesA: "Building dynamic pages",
      quesB: "Properties of CSS you perform in HTML",
      quesC: "Actions you can perform on HTML Elements",
      quesD: "An aspect of the terminal that Dominates the HTML in Javascript",
    },
    answer: "quesA",
  },
];

// variables

//eventlist
function startQuiz() {
  startEl.classList.add("hide");
  questionEl.classList.remove("hide");

  intervalId = setInterval(tiktok, 1000);

  //not writing, but planing to exec
  getQuestion();
}

function getQuestion() {
  var currentQuestion = questions[questionIndex];
  var titleEl = document.getElementById("question");
  titleEl.textContent = currentQuestion.question;
  //sets html, anything inside as am empty string, nothing inside
  choicesEl.innerHTML = "";

  for (let index = 0; index < currentQuestion.choices.length; index++) {
    var choice = currentQuestion.choices[index];
    var choiceButton = document.createElement("button");
    choiceButton.setAttribute("class", "choice");
    choiceButton.setAttribute("value", choice);
    choiceButton.textContent = index + 1 + "." + choice;
    choicesEl.appendChild(choiceButton);
  }
}

function choiceClick (event) {
var buttonEl = event.target
if (!buttonEl.matches(".choice")) {
  return;
}
//if they're wrong
 if (buttonEl.value !== questions[questionIndex].answer) {
  time-=10
  if (time<0) {
    time = 0
  }
  timeEl.textContent=time;
 } 
 questionIndex++
 if (time<=0 || questionIndex===questions.length) {
  //end quiz function
 }
else {
  getQuestion ()
}

}

function tiktok() {
  time--;
  timeEl.textContent = time;
  if (time <= 0) {
    endGame();
  }
}

function displayAnswer() {
  var answerButton1 = document.createElement("button");
  answerButton1.textContent = questions[questionsIndex].quesA;

  answer.appendChild(submitEl);
}

function showResults() {}

function endGame() {
  clearInterval(intervalId);
  questionEl.classList.add("hide");
  endEl.classList.remove("hide");
}

//eventListeners start here - always at the bottom
button.addEventListener("click", startQuiz);

var answerButton1 = document.createElement("button");
//it needs text content=answer1

// var questionIndex = 0;
// answerButton1.textContent = question [questionIndex].quesA;

var answerButton2 = document.createElement("button");
var answerButton3 = document.createElement("button");
var answerButton4 = document.createElement("button");

// Need functions:
//q/a's
//time function
//button function

//button, function, eventlistener

//function startQuiz () {}
//function displayResults

// Need event listeners

// Need to evoke functions
