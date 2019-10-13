// Variable containing all quiz questions
var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
        title: "My favorite data type is:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "booleans"
      },
      {
        title: "The funniest name is ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "curly brackets"
      },
  ];

  var leaderboard =[
  { 
    initials: "",
    score: "",
  }
  ];

// Selecting HTML elements and adding them to variables
var start = document.getElementById("start"); 
var exam = document.getElementById("exam");  
var quizSubject = document.getElementById("myquiz"); 
var message = document.getElementById("message"); 
var intro = document.getElementById("intro");
var highScore = document.getElementById("highScore");
var time = document.getElementById("timer");
var multipleChoice = document.getElementById("choices");

// Element creation variables
var p = document.createElement("p");
var p2 = document.createElement("p");
var p3 = document.createElement("p");
var btn1 = document.createElement("button");
var btn2 = document.createElement("button");
var btn3 = document.createElement("button");
var btn4 = document.createElement("button");
var btn5 = document.createElement("button");
var btn6 = document.createElement("button");
var div1 = document.createElement("div");
var div2 = document.createElement("div");
var div3 = document.createElement("div");
var div4 = document.createElement("div");
var div5 = document.createElement("div");
var h1 = document.createElement("h1");
var input1 = document.createElement("input");

// Memory based variables
var timer = questions.length * 15;
var userScore = 0;
var i = 0;

// upon click run the quiz for 60 seconds
start.addEventListener("click", function(event){
    event.preventDefault();
    message.remove();
    start.remove();
    
    quizSubject.className = "text-left";
    btn1.setAttribute("class","d-flex justify-content-left btn btn-dark");
    btn2.setAttribute("class","d-flex justify-content-left btn btn-dark");
    btn3.setAttribute("class","d-flex justify-content-left btn btn-dark");
    btn4.setAttribute("class","d-flex justify-content-left btn btn-dark");
    btn5.setAttribute("class","d-flex col-2 justify-content-left btn btn-dark");
    btn6.setAttribute("class","d-flex col justify-content-left btn btn-dark");

    div1.setAttribute("class","row");
    div2.setAttribute("class","row pt-1");
    div3.setAttribute("class","row pt-1");
    div4.setAttribute("class","row pt-1");
    div5.setAttribute("class","row pt-1");
    p.setAttribute("class","row pt-1");
    p2.setAttribute("class","row pt-1");
    p3.setAttribute("class","col-4 pt-1");
    input1.setAttribute("class","col-6 pt-1 justify-content-center w-100");

    div1.appendChild(btn1);
    div2.appendChild(btn2);
    div3.appendChild(btn3);
    div4.appendChild(btn4);

    multipleChoice.appendChild(div1);
    multipleChoice.appendChild(div2);
    multipleChoice.appendChild(div3);
    multipleChoice.appendChild(div4);
    multipleChoice.appendChild(p);

    div1.setAttribute("id","");
    div2.setAttribute("id","");
    div3.setAttribute("id","");
    div4.setAttribute("id","");

    var timerInterval = setInterval(function() 
        {
          event.stopPropagation();
          timer--;
          time.innerHTML = "Time:"+ String(timer)
          if(timer === 0 || timer < 0 || i === questions.length) {
            userScore = userScore + timer;
            alert("time is up");
            clearInterval(timerInterval);
            myResults();
          }
        }, 1000);
     
            correctAnswer = String(questions[i].answer);
            quizSubject.innerHTML = questions[i].title;
            btn1.innerHTML = questions[i].choices[0];
            btn2.innerHTML = questions[i].choices[1];
            btn3.innerHTML = questions[i].choices[2];
            btn4.innerHTML = questions[i].choices[3];

            div1.id = String(btn1.innerHTML);
            div2.id = String(btn2.innerHTML);
            div3.id = String(btn3.innerHTML);
            div4.id = String(btn4.innerHTML);

      multipleChoice.addEventListener("click", function(e){
        // if id value matches correct answer, show correct and move to next problem
          if (e.target.parentElement.id === correctAnswer)
          {
          p.className = "row mt-2 border-top border-secondary";
          p.innerHTML = "Correct!";
          setTimeout(function()
          {
          p.className = "";
          p.innerHTML = "";
          }, 1000);
            i++;
            quizSubject.innerHTML = questions[i].title;
            btn1.innerHTML = questions[i].choices[0];
            btn2.innerHTML = questions[i].choices[1];
            btn3.innerHTML = questions[i].choices[2];
            btn4.innerHTML = questions[i].choices[3];
          }
        // else question is wrong and subtract 10 seconds from the clock and move to the next question  
          else 
          {
          p.className = "row mt-2 border-top border-secondary";
          p.innerHTML = "Wrong!";
          setTimeout(function()
          {
          p.className = "";
          p.innerHTML = "";
          }, 1000);
            i++;
            timer = timer - 10;
            quizSubject.innerHTML = questions[i].title;
            btn1.innerHTML = questions[i].choices[0];
            btn2.innerHTML = questions[i].choices[1];
            btn3.innerHTML = questions[i].choices[2];
            btn4.innerHTML = questions[i].choices[3];
          }
      }
      )
    }

)

function myResults(){
  div1.remove();
  div2.remove();
  div3.remove();
  div4.remove();
  p.remove();
  quizSubject.innerHTML = "All Done!";
  p2.innerHTML = "Your score is: " + userScore + "!!";
  p3.innerHTML = "Enter Initials";
  multipleChoice.appendChild(p2);
  div5.appendChild(p3);
  div5.appendChild(input1);
  div5.appendChild(btn5);
  btn5.innerHTML = "Submit";
  multipleChoice.appendChild(div5);

  btn5.addEventListener("click", function(){

  localStorage.setItem("initials",input1.value);
  localStorage.setItem("score",userScore);
  localStorage.getItem("intials");
  leaderboard.initials.push(localStorage.getItem("score"));
  leaderboard.score.push(localStorage.getItem("score"));
  document.reload(true);
  })

};

// View highscores

highScore.addEventListener("click",function()
{
var scoresSummary = "";
var clientSummary = "";
var response ="";

for (a= 0; a < leaderboard.length; a++)
{
  scoresSummary += leaderboard.initials[a];
  clientSummary += leaderboard.score[a];
  response = clientSummary + "scored a total of " + scoresSummary + " points";
};

alert (response);

}
);
