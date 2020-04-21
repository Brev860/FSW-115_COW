var questions = {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "medium",
    question: "According to The Hitchhiker's Guide to the Galaxy book, the answer to life, the universe and everything else is...",
    correct_answer: "42",
    incorrect_answers: [
        "Loving everyone around you",
        "Chocolate",
        "Death"
    ]
};

 var questions2 = {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "Minecraft was released from beta in 2011 during a convention held in which city?",
    correct_answer: "Las Vegas",
    "incorrect_answers": [
        "Paris",
        "Bellevue",
        "London"
    ]
};
var questions3 = {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "What is the only Generation III Pokemon whose name begins with the letter I?",
    correct_answer: "Illumise",
    "incorrect_answers": [
        "Infernape",
        "Ivysaur",
        "Igglybuff"
    ]
};

var subject1 = document.getElementById("header1");
subject1.textContent = questions.category;

var problem1 = document.getElementById("question1");
problem1.textContent = questions.question;


var answers1 = document.getElementById("answers1");
var listOfAnswers = [];

questions.incorrect_answers.forEach(function(element) {
  listOfAnswers.push("<li>" + element + "</li>");
  
});

answers1.innerHTML = listOfAnswers.join('');

var right1 = document.createElement("li");
right1.textContent = questions.correct_answer;
var list = document.getElementById("answers1");
list.append(right1);
/*----------------------------Question 2-------------------------------- */
var subject2 = document.getElementById("header2");
subject2.textContent = questions2.category;

var problem2 = document.getElementById("question2");
problem2.textContent = questions2.question;


var answers2 = document.getElementById("answers2");
var listOfAnswers2 = [];

questions2.incorrect_answers.forEach(function(element) {
  listOfAnswers2.push("<li>" + element + "</li>");
  
});

answers2.innerHTML = listOfAnswers2.join('');

var right2 = document.createElement("li");
right2.textContent = questions2.correct_answer;
var list2 = document.getElementById("answers2");
list2.append(right2);

/*----------------------------Question 3-------------------------------- */ 
var subject3 = document.getElementById("header3");
subject3.textContent = questions3.category;

var problem3 = document.getElementById("question3");
problem3.textContent = questions3.question;


var answers3 = document.getElementById("answers3");
var listOfAnswers3 = [];

questions3.incorrect_answers.forEach(function(element) {
  listOfAnswers3.push("<li>" + element + "</li>");
  
});

answers3.innerHTML = listOfAnswers3.join('');

var right3 = document.createElement("li");
right3.textContent = questions3.correct_answer;
var list3 = document.getElementById("answers3");
list3.append(right3);