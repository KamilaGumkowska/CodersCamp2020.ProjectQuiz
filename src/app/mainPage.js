import image1 from './../../styles/img/img1.png';
import image2 from './../../styles/img/img2.png';
import { showDifficultyLevelScreen } from './difficultyLevel.js'; //for single btn
// import {  } from ''; for multi btn
// import {  } from ''; for leaderboard btn
// import {  } from ''; for options btn
// import {  } from ''; for credits btn

export function showMainMenu() {
    createMainMenuStructure();
}

function createMainMenuStructure() {
    const mainWrap = document.getElementById('main-wrap');

    const startWrap = document.createElement('div');
    startWrap.id = 'startwrap';

    mainWrap.appendChild(startWrap);

    const mainGame = createNewElement('div', 'main-game', startWrap);
    const leaderBoardWrap = createNewElement('div', 'leaderboard-wrap', startWrap);
    const creditsWrap = createNewElement('div', 'credits-wrap', startWrap);
    const optionsWrap = createNewElement('div', 'options-wrap', startWrap);

    const img1 = createNewImgElement('headimg', image1, startWrap);
    const img2 = createNewImgElement('blueimg', image2, startWrap);

    const gameTitle = createNewElement('h1', 'title', mainGame, 'brains out quiz');
    const gameSubTitle = createNewElement('h2', 'subtitle', mainGame, 'starts here:');
    const singleBtn = createNewElement('button', 'btn primary single', mainGame, 'single');
    const multiBtn = createNewElement('button', 'btn primary multi', mainGame, 'multi');

    const leaderTitle = createNewElement('h2', 'subtitle', leaderBoardWrap, 'ends here:');
    const leaderBtn = createNewElement('button', 'btn secondary leaderboard', leaderBoardWrap, 'see our leaders');

    const creditsBtn = createNewElement('button', 'btn teritary credits', creditsWrap, 'credits');

    const optionsBtn = createNewElement('button', 'btn teritary options', optionsWrap, 'options');

    goToScreenOnClick(singleBtn, showDifficultyLevelScreen);
    // goToScreenOnClick(multiBtn, showMulti);
    // goToScreenOnClick(leaderBtn, showLeader);
    // goToScreenOnClick(creditsBtn, showCredits);
    // goToScreenOnClick(optionsBtn, showOptions);
}

function goToScreenOnClick(btnName, showScreen) {
    btnName.addEventListener('click', showScreen);
}

function createNewElement(tag, className, parent, text = '') {
    const newElement = document.createElement(tag);
    newElement.className = className;
    newElement.innerHTML = text;
    parent.appendChild(newElement);
    return newElement;
}

function createNewImgElement(className, source, parent) {
    const newImgElement = document.createElement('img');
    newImgElement.className = className;
    newImgElement.src = source;
    parent.appendChild(newImgElement);
    return newImgElement;
}
