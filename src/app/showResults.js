import image1 from './../../styles/img/img1.png';
import image2 from './../../styles/img/img2.png';
import { quizSettings } from './App';
import { showMainMenu } from './mainPage';
import { createNewElement } from './mainPage';
import { createNewImgElement } from './mainPage';
import { createGameScreen } from './game';
import { finalScore } from '.game';
import { showLeaderboardScreen } from './leaderboard';
import { defaultNickFromOptions } from '.optionsScreen';

export function showResults() {
    createResultsStructure();
}

function createResultsStructure() {
    const RESULT_BTN_TXT = 'submit score';
    const TRYAGAIN_BTN_TXT = 'try again';
    const MAINPAGE_BTN_TXT = 'main page';
    const TITLE_TXT = 'quiz result';
    const SCORE_DISPLAY_TXT = 'your score is: ' + finalScore + '/' + quizSettings.numberOfQuestions * 15;

    const mainWrap = document.getElementById('main-wrap');
    mainWrap.innerHTML = '';

    const resultsWrap = document.createElement('div');
    resultsWrap.id = 'resultswrap';

    mainWrap.appendChild(resultsWrap);

    const endGame = createNewElement('div', 'endgame', resultsWrap);

    const img1 = createNewImgElement('headimg', image1, resultsWrap);
    const img2 = createNewImgElement('blueimg', image2, resultsWrap);

    const endTitle = createNewElement('h1', 'title', endGame, TITLE_TXT);
    const quizScore = createNewElement('h2', 'subtitle', endGame, SCORE_DISPLAY_TXT);
    const nickNameInput = createNewElement('input', 'btn secondary nickInput', endGame, 'nickname');
    nickNameInput.value = defaultNickFromOptions;
    const submitResultBtn = createNewElement('button', 'btn secondary submitBtn', endGame, RESULT_BTN_TXT);
    const tryAgainBtn = createNewElement('button', 'btn primary try-again', endGame, TRYAGAIN_BTN_TXT);
    const mainPageBtn = createNewElement('button', 'btn priary main-page', endGame, MAINPAGE_BTN_TXT);

    submitResultBtn.addEventListener('click', saveResult);
    tryAgainBtn.addEventListener('click', createGamescreen);
    mainPageBtn.addEventListener('click', showMainMenu);
}

let highScores = JSON.parse(localStorage.getItem('highScores')) || [];

function saveResult() {
    let nickInput = document.querySelector('.nickInput');
    let score = {
        score: finalScore,
        name: nickInput.value,
    };
    
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(10);
    
    localStorage.setItem('highScores', JSON.stringify(highScores));
    showLeaderboardScreen();
}