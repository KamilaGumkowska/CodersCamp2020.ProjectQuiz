const QUIZ = document.getElementById("question");
const REST = document.getElementById("rest");
const POINTS_IF_RIGHT = 15;
let currentIcon;
let questions = [];
let currentQuestion = {};
let numberOfQuestions = 0;
let availableQuestions = [];
let rightAnswer = false;
let level = "Hard";
let score = 0;
let amountOfQuestions = 20;
let categoryNumber = 25;
let difficultyLevel = "hard"

fetch(`https://opentdb.com/api.php?amount=${amountOfQuestions}&category=${categoryNumber}&difficulty=${difficultyLevel}`)
.then (res => {
    return res.json();
})
.then(loadedQuestions => {
    questions = loadedQuestions.results.map((loadedQ) => {
        const receivedOutput = {
            question: loadedQ.question,
            category: loadedQ.category,
            difficulty: loadedQ.difficulty,
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
    categoryIcon();
    howDifficult();
    setQuestions();
    

    ifTrueOrFalse(); 
    addEventListeners();
    letsQuit();
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
}
ifTrueOrFalse = () => {
    if(!currentQuestion.answer2 || !currentQuestion.answer3) {
        document.getElementById("third-option").style.display = "none"
        document.getElementById("fourth-option").style.display = "none"
    }
}
categoryIcon = () => {
    console.log(currentQuestion.category)
    switch(currentQuestion.category) {
        case "Sports":
            currentIcon = "https://img.icons8.com/color/48/000000/sport.png";
            break;
        case "Science & Nature":
            currentIcon = "https://img.icons8.com/color/48/000000/natural-food.png";
            break;
        case "Entertainment: Music":
            currentIcon = "https://img.icons8.com/color/48/000000/piano.png";
            break;
        case "General Knowledge":
            currentIcon = "https://img.icons8.com/color/48/000000/idea-sharing.png";
            break;
        case "Art":
            currentIcon = "https://img.icons8.com/color/48/000000/paint-brush.png";
            break;
        case "Science: Computers":
            currentIcon = "https://img.icons8.com/color/48/000000/monitor--v1.png"
            break;
        default:
            currentIcon = "https://img.icons8.com/color/48/000000/film-reel.png";
    }
}

setQuestions = () => {
    QUIZ.innerHTML = `
        <h3>Question <img src="${currentIcon}" alt="${currentQuestion.category}"/></h3>
        <p id="question-asked">${currentQuestion.question}</p>
        <div class="answer">
            <p>${currentQuestion.answer0}</p>
        </div>
        <div class="answer">
            <p>${currentQuestion.answer1}</p>
        </div>
        <div class="answer" id="third-option">
            <p>${currentQuestion.answer2}</p>
        </div>
        <div class="answer" id="fourth-option">
            <p>${currentQuestion.answer3}</p>
        </div>
        <div id="level" class="level">
            <p>level ${level}</p>
        </div>
    ` 
}

addEventListeners = () => {
    const ANSWERS = Array.from(document.getElementsByClassName("answer"));
    ANSWERS.forEach(answer => {
        answer.addEventListener('click',(e) => {
            getAnotherQuestion();
            setQuestions();
            ifTrueOrFalse();
            addEventListeners();
        })
    })
}
letsQuit = () => {
    const QUIBUTTON = document.getElementById("quit");
    QUIBUTTON.addEventListener('click', (e) => {
        console.log("Quit click!");
        return window.location.assign('wtf');
    })
}
howDifficult = () => {
    switch(currentQuestion.difficulty) {
        case "hard":
            level = "Hard";
            break;
        case "medium":
            level = "Medium";
            break;
        case "easy":
            level = "Easy";
            break;
    }
}

REST.innerHTML = `
    <img class = "top-img" src = "./src/photos/img1.png" alt = "Top part of the man's head">
    <div id = "app" class = "timer"></div>
    <div id = "quit"class = "quit">
        <p>Quit</p>
    </div>
    <img class = "bottom-img" src="./src/photos/img2.png" alt = "Bottom part of the man's head">
`
