//Global Variables

var time = 20;
var correctAnswers = 0;
var wrongAnswers = 0;
var intervalId;
var questions = [
    {
        type: "Which one is not an object oriented programming language?",
        choices: ["Java", "C#", "C++", "C"],
        answer: "C"
    }, {
        type: "Which language is used for styling web pages?",
        choices: ["HTML", "JQuery", "CSS", "XML"],
        answer: "CSS"
    }, {
        type: "There are ___ main components of object oriented programming?",
        choices: ["1", "6", "2", "4"],
        answer: "4"
    }, {
        type: "Which language is used for web apps?",
        choices: ["PHP", "Python", "Javascript", "All"],
        answer: "All"
    }, {
        type: "MVC is a _______.",
        choices: ["Language", "Library", "Framework", "All"],
        answer: "Framework"
    }
];

// var startBtn = document.getElementById('start-button');
// // Ready
// //debugger;

// let quizArea = document.getElementById('questions');
// quizArea.style.display = 'none';

// //
// let buttonArea = document.getElementsByClassName('buttons');
// buttonArea.style.display = 'none';

// Start Function
var startGame= function() {

    $(".buttons").empty();
    //when start-button is clicked...
    $("#start-button").on("click", function() {
        // quizArea.style.display = "show";
        // buttonArea.style.display = "show";
    //...create a string that will hold the question.
    var questions = [
        {
            type: "Which one is not an object oriented programming language?",
            choices: ["Java", "C#", "C++", "C"],
            answer: "C"
        }, {
            type: "Which language is used for styling web pages?",
            choices: ["HTML", "JQuery", "CSS", "XML"],
            answer: "CSS"
        }, {
            type: "There are ___ main components of object oriented programming?",
            choices: ["1", "6", "2", "4"],
            answer: "4"
        }, {
            type: "Which language is used for web apps?",
            choices: ["PHP", "Python", "Javascript", "All"],
            answer: "All"
        }, {
            type: "MVC is a _______.",
            choices: ["Language", "Library", "Framework", "All"],
            answer: "Framework"
        }
    ];

    //Now a loop that generates the question
        for (let i = 0; i < questions.length; i++) {
        
       // document.write(questions[i].type);

        var randomQ = $('#questions').append("<p>" +questions[i].type + "</p>");

        // questions = random + questionNumber;
            var button =$("<div>");
                button.attr({
                    "class":'btn',
                    "data":randomQ
                });
         
    
    }



})
};

startGame();

$(document).on('click', ".buttons", function (){

    var choiceQ = $('.buttons').append("<button>" +questions[i].choices + "</button>");

    correctAnswers += choiceQ;

    $("#choice").html("Total Score: " + correctAnswers);

    console.log(previous);

    
    if(correctAnswers > random_result){

        lost++;

        $("#lost").html("You Lost: " + lost);

        previous = 0;

        startGame();
    }
    
    else if(previous === random_result){

        win++;

        $("#win").html("You Win: " + win);

        previous = 0;

        startGame();
    }

    
});

