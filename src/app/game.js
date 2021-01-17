import topPart from './../../styles/img/head.png';
import bottomPart from './../../styles/img/bottom.png';
import { quizSettings } from './App';
import { startTimer } from './timer';
import { noTimeLeft } from './timer';
const MULTIPLE_CHOICE_ANSWERS_NUMBER = 4;

export function createGameScreen() {
    game();
    createHtml();
}

export let finalScore = 0;
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
            loadedQuestions.results.forEach((question) => {
                const arrayToShuffle = [question.correct_answer, ...question.incorrect_answers];
                questions.push({
                    question: question.question,
                    category: question.category,
                    difficulty: question.difficulty,
                    correct_answer: question.correct_answer,
                    answers: shuffleAnswers(arrayToShuffle),
                });
            });
        })
        .catch((err) => {
            console.error(err);
        });
}

function shuffleAnswers(arrayToShuffle) {
    for (let i = arrayToShuffle.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = arrayToShuffle[i];
        arrayToShuffle[i] = arrayToShuffle[j];
        arrayToShuffle[j] = temp;
    }
    return arrayToShuffle;
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

        if (availableQuestions.length === 0) {
            console.log(finalScore + '/' + quizSettings.numberOfQuestions * 15);
            setTimeout(() => {
                return window.location.assign('quiz');
            }, 1000);
        }
        const questionIndex = Math.floor(Math.random() * availableQuestions.length);
        currentQuestion = availableQuestions[questionIndex];
        availableQuestions.splice(questionIndex, 1);
        startTimer();
        isNoTimeLeft().then(() => {
            getAnotherQuestion();
            setQuestions();
            ifTrueOrFalse();
            addEventListeners();
        });
    }

    function ifTrueOrFalse() {
        if (currentQuestion.answers.length < MULTIPLE_CHOICE_ANSWERS_NUMBER) {
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
                <p>${currentQuestion.answers[0]}</p>
            </div>
            <div class="answer">
                <p>${currentQuestion.answers[1]}</p>
            </div>
            <div class="answer" id="third-option">
                <p>${currentQuestion.answers[2]}</p>
            </div>
            <div class="answer" id="fourth-option">
                <p>${currentQuestion.answers[3]}</p>
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
                if (currentQuestion.correct_answer === answer.children[0].innerHTML) {
                    finalScore += 15;
                } else {
                    finalScore += 0;
                }
                console.log(finalScore);
                getAnotherQuestion();
                setQuestions();
                ifTrueOrFalse();
                addEventListeners();
            });
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

function isNoTimeLeft() {
    return new Promise(function (resolve, reject) {
        (function waitForNoTimeLeft() {
            if (noTimeLeft) {
                return resolve();
            }
            setTimeout(waitForNoTimeLeft, 1000);
        })();
    });
}