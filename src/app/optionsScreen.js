import topOfHeadImage from './../../styles/img/top_of_head.png';
import bottomOfHeadImage from './../../styles/img/bottom_of_head.png';
import { showMainMenu } from './mainPage';
import { createImageSection } from './difficultyLevel';
import { createDOMElement } from './difficultyLevel';

const MAIN = document.querySelector('#main-wrap');
export let defaultNickFromOptions;
export function showOptionsScreen() {
    createHTMLStructure();
}

const createHTMLStructure = () => {
    MAIN.innerHTML = '';
    let optionsScreen = createDOMElement('div', 'optionsScreen', MAIN);
    // let optionsWrapper = createDOMElement('div', 'optionsWrapper', optionsScreen);
    createOptions(optionsScreen);
    createBackButton(optionsScreen);
    createImageSection(optionsScreen);
};
const createOptions = (parent) => {
    let OptionsButtonsContainer = createDOMElement('div', 'OptionsButtonsContainer', parent);
    let resetLeaderboard = createDOMElement(
        'button',
        'resetLeaderboard btn secondary optionButton OptionFont',
        OptionsButtonsContainer,
    );
    let musicButton = createDOMElement(
        'button',
        'musicButton btn secondary optionButton OptionFont',
        OptionsButtonsContainer,
    );
    resetLeaderboard.textContent = 'RESET LEADERBOARD';
    musicButton.textContent = 'MUSIC';
    resetLeaderboard.addEventListener('click', () => {
        console.log('RESET LEADERBOARD');
        localStorage.setItem = 'test local storage';
    });
    musicButton.addEventListener('click', switchMusic);
    createNickInput(parent);
};

const createNickInput = (parent) => {
    let nickContainer = createDOMElement('div', 'nickContainer', parent);
    createNickParagraph(nickContainer);
    let nickInput = createDOMElement('input', 'nickInput', nickContainer);
    let nickSubmit = createDOMElement('button', 'nickSubmit btn teritary optionButton', nickContainer);
    nickSubmit.innerHTML = 'SUBMIT';
    nickSubmit.addEventListener('click', () => {
        let nickInput = document.querySelector('.nickInput');
        defaultNickFromOptions = nickInput.value;
        console.log('Mateusz, ' + defaultNickFromOptions);
        nickInput.value = '';
    });
};

const createNickParagraph = (parent) => {
    let nickParagraphOption = createDOMElement('p', 'nickParagraphOption font', parent, 'SET DEFAULT NICKNAME');
};

const createBackButton = (parent) => {
    let backButtonContainer = createDOMElement('div', 'backButtonContainer', parent);
    let backToMainPageButton = createDOMElement(
        'button',
        'backToMainPageButton btn primary OptionFont',
        backButtonContainer,
    );
    backToMainPageButton.textContent = 'BACK';
    backToMainPageButton.addEventListener('click', goToMain);
};

const switchMusic = () => {
    console.log('music');
};
const goToMain = () => {
    MAIN.innerHTML = '';
    showMainMenu();
};
