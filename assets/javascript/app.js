//Global Variables

var time = 20;
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

var startBtn = document.getElementById('start-button');
// Ready
//debugger;
let quizArea = document.getElementById('questions');
quizArea.style.display = 'none';

//
let buttonArea = document.getElementsByClassName('buttons');
buttonArea.style.display = 'none';

// Start Function
$(document).ready(function() {

    //when start-button is clicked...
    $("#start-button").on("click", function() {
        // quizArea.style.display = "show";
        // buttonArea.style.display = "show";
    //...create a string that will hold the question.
    var questionNumber = [];

    //Now a loop that generates the question
        for (let i = 0; i < questions.length; i++) {
        
        document.write(questions[i].type);

        var random = $('#questions').append("<p>" +questions[i].type + "</p>");

        questionNumber = random + questionNumber;

        $('.buttons').append("<button>" +questions[i].choices + "</button>");
    
    }



})
});










var correctAnswers;
var wrongAnswers;
var intervalId;

//Functions
//test
console.log(questions.q2)

function startGame(){

}

function gamePlay(){

    $('.startBtn').on('click',function()
    {

    $('button').remove('.startBtn');
});
}

// function quest1() {

//     var newDiv = $('<div class=" quest q1"/>');
//     newDiv.html('testing');
// }