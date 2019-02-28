// timer variables
var timer;
var counter = 30;
var startWasClicked = false;
var submitButton = false;

// setting 10 second alert and Time up alert
setTimeout(tenSeconds, 1000 * 20);
setTimeout(timeUp, 1000 * 30);

function changeView() {
    $("#start-screen").empty();
    $("#question-master").show();
    $("#question-results").show();
}
function startTimer() {
    startWasclicked = true;
    $("timer").append(counter);
    timer = window.setTimeout("countDown()", 1000);
    window.status = counter;
    $("body").css({
        "background-image": "url('./assets/images/backhm.jpg')"
    });
    changeView();
    console.log("hello")
}
// change between views when start is clicked will also display questions


function tenSeconds() {
    $("#display").append("<h2>10 Seconds Left!</h2>");
    console.log("10 seconds left");
}
function timeUp() {
    $("#display").append("<h2>Time's Up!</h2>");
    console.log("time is up");
}
function countDown() {
    counter = counter - 1;
    window.status = counter;
    if (counter == 0) {
        window.clearTimeout(timer);
        timer = null;
    }
    else {
        timer = window.setTimeout("countDown()", 1000);
        console.log("done")
    }

}
(function () {
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    
    const myQuestions = [
        {
            question: "1.Grand Central Terminal, Park Avenue, New York is the world's?",
            answers: {
                a: "largest railway station",
                b: "highest railway station",
                c: "longest railway station",
                d: "none of the above",
            },
            correctAnswer: "a"
        },
        {
            question: "2.Entomology is the science that studies?",
            answers: {
                a: "Behavior of human beings",
                b: "Insects",
                c: "The origin and history of technical and scientific terms",
                d: "The formation of rocks",
            },
            correctAnswer: "b"
        },
        {
            question: "3.Eritrea, which became the 182nd member of the UN in 1993, is in the continent of?",
            answers: {
                a: "Asia",
                b: "Africa",
                c: "Europe",
                d: "Australia",
            },
            correctAnswer: "b"
        },
        {
            question: "4.Garampani sanctuary is located at?",
            answers: {
                a: "Junagarh, Gujarat",
                b: "Diphu, Assam",
                c: "Kohima, Nagaland",
                d: "Gangtok, Sikkim",
            },
            correctAnswer: "b"
        },
        {
            question: "5.For which of the following disciplines is Nobel Prize awarded??",
            answers: {
                a: "Physics and Chemistry",
                b: "Physiology or Medicine",
                c: "Literature, Peace and Economics",
                d: "All of the above",
            },
            correctAnswer: "d"
        },
        {
            question: "6.Hitler party which came into power in 1933 is known as?",
            answers: {
                a: "Labour Party",
                b: "Nazi Party",
                c: "Ku-Klux-Klan",
                d: "Democratic Party",
            },
            correctAnswer: "b"
        },
        {
            question: "7.FFC stands for?",
            answers: {
                a: "Foreign Finance Corporation",
                b: "Film Finance Corporation",
                c: "Federation of Football Council",
                d: "None of the above",
            },
            correctAnswer: "b"
        },
        {
            question: "8.Galileo was an Italian astronomer who?",
            answers: {
                a: "developed the telescope",
                b: "discovered four satellites of Jupiter",
                c: "discovered that the movement of pendulum produces a regular time measurement",
                d: "All of the above",
            },
            correctAnswer: "d"
        },
        {
            question: "9.Exposure to sunlight helps a person improve his health because?",
            answers: {
                a: "the infrared light kills bacteria in the body",
                b: "resistance power increases",
                c: "the pigment cells in the skin get stimulated and produce a healthy tan",
                d: "the ultraviolet rays convert skin oil into Vitamin D",
            },
            correctAnswer: "d"
        },
        {
            question: "10.First Afghan War took place in?",
            answers: {
                a: "1839",
                b: "1843",
                c: "1833",
                d: "1848",
            },
            correctAnswer: "a"
        },
        {
            question: "11.First China War was fought between?",
            answers: {
                a: "China and Britain",
                b: "China and France",
                c: "China and Egypt",
                d: "China and Greek",
            },
            correctAnswer: "a"
        },
        {
            question: "12.Friction can be reduced by changing from?",
            answers: {
                a: "sliding to rolling",
                b: "rolling to sliding",
                c: "potential energy to kinetic energy",
                d: "dynamic to static",
            },
            correctAnswer: "a"
        }
    
    
    ];
    


// setting the build the quiz on load
    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach(
            (currentQuestion, questionNumber) => {

                const answers = [];

                for (letter in currentQuestion.answers) {

                    answers.push(`<label><input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
                    );
                }

                // add this question and its answers to the output
                output.push(
                    `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
                );
            }
        );
        //   place quiz into html
        quizContainer.innerHTML = output.join('');
    }

    // setting the show results function
    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll('.answers');

        // keep track of user's answers
        let numCorrect = 0;
        let numIncorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {

            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = 'input[name=question' + questionNumber + ']:checked';
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;
                $("#correct").text(numCorrect);
            } else if (userAnswer != currentQuestion.correctAnswer) {
                numIncorrect++;
                $("#incorrect").text(numIncorrect);
            }

        });

    }
   
    $(document).ready(function () {
        $("#Start-screen").hide();
        $("#question-master").hide();
        $("#question-results").hide();
    });

    buildQuiz();
      // on submit, show results
  submitButton.addEventListener("click", showResults);

  
})();