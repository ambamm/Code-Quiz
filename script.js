//needed vars for functions to be ran
var buttonEl = document.querySelector("#button");
var timeEl = document.querySelector ("#time"); //lesson 9
var startEl = document.querySelector ("#start-div");
var questionEl= document.querySelector ("#questions-div");
var endEl = document.querySelector ("#end-div");
//increment and decrement functions?

//vars for questions and answers

var questions = [  //array of objects 
    {
        question: "What is JavaScript?",   //objects 
        choices: {
            quesA: "Building dynamic pages",
            quesB: "Sipping coffee while writing code",
            quesC: "An object oriented program language",
            quesD: "A backend library used to store tables"
        },
        answer: "quesA"

    }, {
        question: "What is CSS in programing?",
        choices: {
            quesA: "Building Case Studies in programing",
            quesB: "Cascading Sigma Styles",
            quesC: "A backend language used to style the frontend layout",
            quesD: "Styles the layout of an HTML page"
        },
        answer: "quesA"
    }, {
        question: "A web API can do the following:",
        choices: {
            quesA: "Extend functionality of the browser",
            quesB: "Abolish Programing Interfaces",
            quesC: "Prevent cyber hackers from hacking",
            quesD: "Connect users to local 404 hosts"
        },
        answer: "quesA"
    }, {
        question: "DOM methods are:", // array of questions
        choices: {
            quesA: "Building dynamic pages",
            quesB: "Properties of CSS you perform in HTML",
            quesC: "Actions you can perform on HTML Elements",
            quesD: "An aspect of the terminal that Dominates the HTML in Javascript"
        },
        answer: "quesA"
    }

];

// variables

var intervalId;
var time = 5;

//eventlist
function startQuiz () {
    startEl.classList.add ("hide");
    questionEl.classList.remove("hide");

    intervalId = setInterval(tiktok, 1000);
}














c
function tiktok(){
    time--;
    timeEl.textContent = time;
    if (time <= 0) {
        endGame();
    }
}

function endGame(){
    clearInterval(intervalId);
    questionEl.classList.add ("hide");
    endEl.classList.remove("hide");
}

button.addEventListener("click", startQuiz)





// Need functions: 
                    //q/a's
                    //time function
                    //button function 

                    //button, function, eventlistener 


//function startQuiz () {}
//function displayResults

// Need event listeners

// Need to evoke functions
