function quizGame(question, answers, correctAns) {
  this.question = question;
  this.answers = answers;
  this.correctAns = correctAns;
}

quizGame.prototype.displayQuestion = function () {
  console.log(this.question);
  for (var i = 0; i < this.answers.length; i++) {
    console.log(i + ': ' + this.answers[i]);
  }
};

var q1 = new quizGame(
  'Who formed the first political party in Nigeria?',
  ['Ezenwo Nyesom Wike', 'Bello Matawalle', 'Herbert Macaulay'],
  2
);
var q2 = new quizGame(
  'What was the name of the first political party in Nigeria?',
  [
    'Nigerian National Democratic Party (NNDP)',
    'Department of State Security (DSS)',
    "People's Unrelented Party (PNP)",
  ],
  0
);
var q3 = new quizGame(
  'What does the eagle represent in the Nigerian coat of arm?',
  ['Strength', 'Love', 'Unity'],
  0
);
var q4 = new quizGame(
  'How many geopolitical zones is Nigeria divided into?',
  [2, 6, 9],
  1
);

var questions = [q1, q2, q3, q4];
//randomize the questions
var n = Math.floor(Math.random() * questions.length);

questions[n].displayQuestion();

var answer = parseInt(prompt('Please select the correct answer: '));
