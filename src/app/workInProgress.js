import image4 from './../../styles/img/img4.png';
import { createNewElement } from './mainPage';
import { createNewImgElement } from './mainPage';
import { showMainMenu } from './mainPage';
import { renderCategoryScreen } from './categoryPage';

const mainWrap = document.getElementById('main-wrap');

export function showWorkInProgress() {
    createWorkInProgressStructure();
}

function createWorkInProgressStructure() {
    mainWrap.innerHTML = '';

    const workWrap = createNewElement('div', 'workwrap', mainWrap);

    createNewImgElement('bulbimg', image4, workWrap);
    const titlesWrap = createNewElement('div', 'titleswrap', workWrap);
    const startWrap = createNewElement('div', 'startwrap', workWrap);
    const backWrap = createNewElement('div', 'backwrap', workWrap);

    createNewElement('h1', 'creditstitle', titlesWrap, 'work in progress');
    createNewElement('h2', 'creditssubtitle', titlesWrap, 'play solo:');

    const singleBtn = createNewElement('button', 'btn primary single', startWrap, 'single');

    const backBtn = createNewElement('button', 'btn secondary backbtn', backWrap, 'back');

    singleBtn.addEventListener('click', renderCategoryScreen); // category function here
    backBtn.addEventListener('click', showMainMenu);
}
