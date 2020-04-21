var question1={
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "When was the Sega Genesis released in Japan?",
    correct_answer: "October 29, 1988",
    incorrect_answers: [
        "August 14, 1989",
        "November 30, 1990",
        "September 1, 1986"
    ]
};
var question2={
    category: "Entertainment: Board Games",
    type: "multiple",
    difficulty: "medium",
    question: "At the start of a standard game of the Monopoly, if you throw a double six, which square would you land on?",
    correct_answer: "Electric Company",
    incorrect_answers: [
        "Water Works",
        "Chance",
        "Community Chest"
    ]
};
var question3={
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question: "What is rapper Drake&#039;s real name?",
    correct_answer: "Aubrey Graham",
    incorrect_answers: [
        "Shaun Carter",
        "Dwayne Carter",
        "Andre Young"
    ]
};
var question4={
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question: "Which star actor was in &quot;Top Gun&quot;, &quot;Jerry Maguire&quot; and &quot;Born on the Fourth of July&quot;?",
    correct_answer: "Tom Cruise",
    incorrect_answers: [
        "Kelly McGillis",
        "John Travolta",
        "George Clooney"
    ]
};


 var triviaQ1 = document.getElementById("header1");
 triviaQ1.textContent = question1.question;

var postTrivia1 = document.getElementById("answer1");
for (var i = 0; i < question1.incorrect_answers.length; i++) {
    var wrongAnswer1 = document.createElement("li");
    wrongAnswer1.textContent = question1.incorrect_answers[i];
    postTrivia1.append(wrongAnswer1);
}
var postTriviaA1 = document.getElementById("answer1");

var rightAnswer1 = document.createElement("li");
rightAnswer1.textContent = question1.correct_answer;
postTrivia1.append(rightAnswer1);
/**      question 2   */
var triviaQ2 = document.getElementById("header2");
 triviaQ2.textContent = question2.question;

var postTrivia2 = document.getElementById("answer2");
for (var i = 0; i < question2.incorrect_answers.length; i++) {
    var wrongAnswer2 = document.createElement("li");
    wrongAnswer2.textContent = question2.incorrect_answers[i];
    postTrivia2.append(wrongAnswer2);
}
var postTriviaA2 = document.getElementById("answer2");

var rightAnswer2 = document.createElement("li");
rightAnswer2.textContent = question2.correct_answer;
postTrivia2.append(rightAnswer2);
/*     question 3      */
var triviaQ3 = document.getElementById("header3");
 triviaQ3.textContent = question3.question;

var postTrivia3 = document.getElementById("answer3");
for (var i = 0; i < question3.incorrect_answers.length; i++) {
    var wrongAnswer3 = document.createElement("li");
    wrongAnswer3.textContent = question3.incorrect_answers[i];
    postTrivia3.append(wrongAnswer3);
}
var postTriviaA3 = document.getElementById("answer3");

var rightAnswer3 = document.createElement("li");
rightAnswer3.textContent = question3.correct_answer;
postTrivia3.append(rightAnswer3);
/*     question 4      */
var triviaQ4 = document.getElementById("header4");
 triviaQ4.textContent = question4.question;

var postTrivia4 = document.getElementById("answer4");
for (var i = 0; i < question4.incorrect_answers.length; i++) {
    var wrongAnswer4 = document.createElement("li");
    wrongAnswer4.textContent = question4.incorrect_answers[i];
    postTrivia4.append(wrongAnswer4);
}
var postTriviaA4 = document.getElementById("answer4");

var rightAnswer4 = document.createElement("li");
rightAnswer4.textContent = question4.correct_answer;
postTrivia4.append(rightAnswer4);