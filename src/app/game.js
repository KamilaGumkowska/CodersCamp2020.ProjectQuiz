import topPart from './../../styles/img/head.png';
import bottomPart from './../../styles/img/bottom.png';
import { quizSettings } from './App';
import { myTimer } from './timer';
export function createGameScreen() {
    fetchQuizQuestions();
    game();
    createHtml();
    myTimer();
}

let currentIcon;
let questions = [];
let currentQuestion = {};
let numberOfQuestions = 0;
let availableQuestions = [];
let level;

async function fetchQuizQuestions() {
    await fetch(
        `https://opentdb.com/api.php?amount=${quizSettings.numberOfQuestions}&category=${quizSettings.category}&difficulty=${quizSettings.difficultyLevel}`,
    )
        .then((res) => {
            return res.json();
        })
        .then((loadedQuestions) => {
            questions = loadedQuestions.results.map((loadedQ) => {
                const receivedOutput = {
                    question: loadedQ.question,
                    category: loadedQ.category,
                    difficulty: loadedQ.difficulty,
                };
                const receivedAnswers = [...loadedQ.incorrect_answers];
                receivedOutput.answer = Math.floor(Math.random() * 3) + 1;
                receivedAnswers.splice(receivedOutput.answer - 1, 0, loadedQ.correct_answer);

                receivedAnswers.forEach((choice, index) => {
                    receivedOutput['answer' + index] = choice;
                });
                return receivedOutput;
            });
        })
        .catch((err) => {
            console.error(err);
        });
}
async function game() {
    await fetchQuizQuestions();
    startGame();
    categoryIcon();
    setDifficulty();
    setQuestions();
    ifTrueOrFalse();
    addEventListeners();
    addQuitEventListener();

    function startGame() {
        numberOfQuestions = 0;
        availableQuestions = [...questions];
        getAnotherQuestion();
    }

    function getAnotherQuestion() {
        numberOfQuestions++;
        const questionIndex = Math.floor(Math.random() * availableQuestions.length);
        currentQuestion = availableQuestions[questionIndex];
        availableQuestions.splice(questionIndex, 1);
        // myTimer();
    }

    function ifTrueOrFalse() {
        if (!currentQuestion.answer2 || !currentQuestion.answer3) {
            document.getElementById('third-option').style.display = 'none';
            document.getElementById('fourth-option').style.display = 'none';
        }
    }

    function categoryIcon() {
        switch (currentQuestion.category) {
            case 'Entertainment: Video Games':
                currentIcon = 'https://img.icons8.com/color/48/000000/visual-game-boy.png';
                break;
            case 'Science & Nature':
                currentIcon = 'https://img.icons8.com/color/48/000000/natural-food.png';
                break;
            case 'Entertainment: Music':
                currentIcon = 'https://img.icons8.com/color/48/000000/piano.png';
                break;
            case 'General Knowledge':
                currentIcon = 'https://img.icons8.com/color/48/000000/idea-sharing.png';
                break;
            case 'History':
                currentIcon = 'https://img.icons8.com/color/48/000000/anubis.png';
                break;
            case 'Geography':
                currentIcon = 'https://img.icons8.com/color/48/000000/america.png';
                break;
            default:
                currentIcon = 'https://img.icons8.com/color/48/000000/film-reel.png';
        }
    }

    function setQuestions() {
        const QUIZ = document.getElementById('main-wrap');
        QUIZ.className = 'question';
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
        `;
    }
    function addEventListeners() {
        const ANSWERS = Array.from(document.getElementsByClassName('answer'));
        ANSWERS.forEach((answer) => {
            answer.addEventListener('click', (e) => {
                getAnotherQuestion();
                setQuestions();
                ifTrueOrFalse();
                addEventListeners();
            });
            if (availableQuestions.length === 0) {
                answer.addEventListener('click', (e) => {
                    return window.location.assign('quiz'); //podmienić
                });
            }
        });
    }

    function addQuitEventListener() {
        const QUIBUTTON = document.getElementById('quit');
        QUIBUTTON.addEventListener('click', (e) => {
            return window.location.assign('quiz');
        });
    }

    function setDifficulty() {
        switch (currentQuestion.difficulty) {
            case 'hard':
                level = 'Hard';
                break;
            case 'medium':
                level = 'Medium';
                break;
            case 'easy':
                level = 'Easy';
                break;
        }
    }
}

function createHtml() {
    const REST = document.createElement('div');
    REST.className = 'rest';
    document.body.appendChild(REST);
    REST.innerHTML = `
        <img class="top-img" src=${topPart} alt="Top part of the man's head">
        <div id="app" class="timer"></div>
        <div id="quit"class="quit">
            <p>Quit</p>
        </div>
        <img class="bottom-img" src=${bottomPart} alt="Bottom part of the man's head">
    `;
}
