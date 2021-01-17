import image1 from './../../styles/img/img1.png';
import image2 from './../../styles/img/img2.png';
import { showDifficultyLevelScreen } from './difficultyLevel.js'; //for single btn
// import {  } from ''; for multi btn
// import {  } from ''; for leaderboard btn
// import {  } from ''; for options btn
import { showCredits } from './credits.js';

export function showMainMenu() {
    createMainMenuStructure();
}

const mainWrap = document.getElementById('main-wrap');

function createMainMenuStructure() {
    mainWrap.innerHTML = '';

    const startWrap = document.createElement('div');
    startWrap.id = 'startwrap';

    mainWrap.appendChild(startWrap);

    const mainGame = createNewElement('div', 'main-game', startWrap);
    const leaderBoardWrap = createNewElement('div', 'leaderboard-wrap', startWrap);
    const creditsWrap = createNewElement('div', 'credits-wrap', startWrap);
    const optionsWrap = createNewElement('div', 'options-wrap', startWrap);

    createNewImgElement('headimg', image1, startWrap);
    createNewImgElement('blueimg', image2, startWrap);

    createNewElement('h1', 'title', mainGame, 'brains out quiz');
    createNewElement('h2', 'subtitle', mainGame, 'starts here:');
    const singleBtn = createNewElement('button', 'btn primary single', mainGame, 'single');
    const multiBtn = createNewElement('button', 'btn primary multi', mainGame, 'multi');

    createNewElement('h2', 'subtitle', leaderBoardWrap, 'ends here:');
    const leaderBtn = createNewElement('button', 'btn secondary leaderboard', leaderBoardWrap, 'see our leaders');

    const creditsBtn = createNewElement('button', 'btn teritary credits', creditsWrap, 'credits');

    const optionsBtn = createNewElement('button', 'btn teritary options', optionsWrap, 'options');

    goToScreenOnClick(singleBtn, showDifficultyLevelScreen);
    // goToScreenOnClick(multiBtn, showMulti);
    // goToScreenOnClick(leaderBtn, showLeader);
    goToScreenOnClick(creditsBtn, showCredits);
    // goToScreenOnClick(optionsBtn, showOptions);
}

export function goToScreenOnClick(btnName, showScreen) {
    btnName.addEventListener('click', showScreen);
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
