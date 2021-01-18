import image1 from './../../styles/img/img1.png';
import image2 from './../../styles/img/img2.png';
import { showMainMenu } from './mainPage';
//import { createGameScreen } from './game.js';
//import { finalScore } from '.game.js';
const finalScore = 30;
import { quizSettings } from './App';
//import { showLeaderboard } from './leaderboard,js';

export function showResults() {
    createResultsStructure();
}

function createResultsStructure() {
    const mainWrap = document.getElementById('main-wrap');
    mainWrap.innerHTML = '';

    const resultsWrap = document.createElement('div');
    resultsWrap.id = 'resultswrap';

    mainWrap.appendChild(resultsWrap);

    const endGame = createNewElement('div', 'endgame', resultsWrap);

    const img1 = createNewImgElement('headimg', image1, resultsWrap);
    const img2 = createNewImgElement('blueimg', image2, resultsWrap);

    const endTitle = createNewElement('h1', 'title', endGame, 'quiz result');
    const quizScore = createNewElement('h2', 'subtitle', endGame, 'your score is: ' + finalScore + '/' + quizSettings.numberOfQuestions * 15);
    const nickNameInput = createNewElement('input', 'btn secondary nickInput', endGame, 'nickname');
    nickNameInput.placeholder = ('Enter your name');
    const submitResultBtn = createNewElement('button', 'btn secondary submitBtn', endGame, 'submit score');
    const tryAgainBtn = createNewElement('button', 'btn primary try-again', endGame, 'try again');
    const mainPageBtn = createNewElement('button', 'btn priary main-page', endGame, 'main page');

    submitResultBtn.addEventListener('click', saveResult);
    //tryAgainBtn.addEventListener('click', createGamescreen);
    mainPageBtn.addEventListener('click', showMainMenu);
}

function saveResult() {
    let nickInput = document.querySelector('.nickInput');
    console.log(nickInput.value);
    if (nickInput.value !='') {
    localStorage.setItem('nickName', nickInput.value);
    localStorage.setItem('userScore', finalScore);
    //showLeaderboard;
    }
    else alert("Enter your name to submit!");
}

export function createNewElement(tag, className, parent, text = '') {
    const newElement = document.createElement(tag);
    newElement.className = className;
    newElement.innerHTML = text;
    parent.appendChild(newElement);
    return newElement;
}

export function createNewImgElement(className, source, parent) {
    const newImgElement = document.createElement('img');
    newImgElement.className = className;
    newImgElement.src = source;
    parent.appendChild(newImgElement);
    return newImgElement;
}