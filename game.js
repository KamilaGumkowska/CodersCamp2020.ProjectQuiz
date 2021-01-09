const QUIZ = document.getElementById("question");
const REST = document.getElementById("rest");
const CHOICES = Array.from(document.getElementsByClassName("text"));
const POINTS_IF_RIGHT = 15;
let currentIcon = "https://img.icons8.com/color/48/000000/film-reel.png";
let questions = [];
let currentQuestion = {};
let numberOfQuestions = 0;
let availableQuestions = [];
let rightAnswer = false;
let level = "Hard";
let score = 0;

/* <img src="https://img.icons8.com/color/48/000000/piano.png"/> piano 
    <img src="https://img.icons8.com/color/48/000000/knowledge-sharing.png"/> general knowledge 
*/


fetch("https://opentdb.com/api.php?amount=50&category=21")
.then (res => {
    return res.json();
})
.then(loadedQuestions => {
    questions = loadedQuestions.results.map((loadedQ) => {
        const receivedOutput = {
            question: loadedQ.question,
        };
        const receivedAnswers = [...loadedQ.incorrect_answers];
        receivedOutput.answer = Math.floor(Math.random()*3)+1;
        receivedAnswers.splice(receivedOutput.answer -1, 0, loadedQ.correct_answer);
        
        receivedAnswers.forEach((choice, index) => {
            receivedOutput["answer" + (index)] = choice;
        })
        return receivedOutput;
    })
    startGame();
    
    QUIZ.innerHTML = `
        <h3>Question <img src="${currentIcon}"/></h3>
        <p id = "question-asked">${currentQuestion.question}</p>
        <div class = "answer">
            <p>${currentQuestion.answer0}</p>
        </div>
        <div class = "answer">
            <p>${currentQuestion.answer1}</p>
        </div>
        <div class = "answer" id = "third-option">
            <p>${currentQuestion.answer2}</p>
        </div>
        <div class = "answer" id = "fourth-option">
            <p>${currentQuestion.answer3}</p>
        </div>
    ` 
    ifTrueOrFalse();  
})
.catch((err) => {
    console.error(err);
});

startGame = () => {
    numberOfQuestions = 0;
    score = 0;
    availableQuestions = [...questions];
    getAnotherQuestion();
}
getAnotherQuestion = () => {
    numberOfQuestions++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    availableQuestions.splice(questionIndex, 1);
    // rightAnswer = true;
}
ifTrueOrFalse = () => {
    if(!currentQuestion.answer2 || !currentQuestion.answer3) {
        document.getElementById("third-option").style.display = "none"
        document.getElementById("fourth-option").style.display = "none"
    }
}
REST.innerHTML = `
    <img class = "top-img" src = "./photos/flame-890 1.png" alt = "Top part of the man's head">
    <div id = "app" class = "timer"></div>
    <div class = "level">
        <p>level ${level}</p>
    </div>
    <div class = "quit">
        <p>Quit</p>
    </div>
    <img class = "bottom-img" src="./photos/flame-891 1.png" alt = "Bottom part of the man's head">
`
