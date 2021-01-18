import { showMainMenu } from './mainPage';
import { createImageSection } from './difficultyLevel';
import { createDOMElement } from './difficultyLevel';
import { music } from './music';

const PARAGRAPH_ELEMENT = 'p';
const DIV_ELEMENT = 'div';
const INPUT_ELEMENT = 'input';
const BUTTON_ELEMENT = 'button';
const SET_DEFAULT_NICKNAME = 'SET DEFAULT NICKNAME';
const RESET_LEADERBOARD = 'RESET LEADERBOARD';
const FIRST_MUSIC_TEXT = 'MUSIC ON';
const SUBMIT_TEXT = 'SUBMIT';

const MAIN = document.querySelector('#main-wrap');
export let defaultNickFromOptions;
export function showOptionsScreen() {
    createHTMLStructure();
}

const createHTMLStructure = () => {
    MAIN.innerHTML = '';
    let optionsScreen = createDOMElement(DIV_ELEMENT, 'optionsScreen', MAIN);
    createOptions(optionsScreen);
    createBackButton(optionsScreen);
    createImageSection(optionsScreen);
};
const createOptions = (parent) => {
    let OptionsButtonsContainer = createDOMElement(DIV_ELEMENT, 'OptionsButtonsContainer', parent);
    let resetLeaderboard = createDOMElement(
        BUTTON_ELEMENT,
        'resetLeaderboard btn secondary optionButton OptionFont',
        OptionsButtonsContainer,
    );
    let musicButton = createDOMElement(
        BUTTON_ELEMENT,
        'musicButton btn secondary optionButton OptionFont',
        OptionsButtonsContainer,
    );
    resetLeaderboard.textContent = RESET_LEADERBOARD;
    musicButton.textContent = FIRST_MUSIC_TEXT;
    resetLeaderboard.addEventListener('click', () => {
        localStorage.clear();
    });
    musicButton.addEventListener('click', switchMusic);
    createNickInput(parent);
};

const createNickInput = (parent) => {
    let nickContainer = createDOMElement(DIV_ELEMENT, 'nickContainer', parent);
    createNickParagraph(nickContainer);
    let nickInput = createDOMElement(INPUT_ELEMENT, 'nickInput btn secondary OptionFont', nickContainer);
    nickInput.setAttribute('placeholder', 'YOUR NICKNAME');
    let nickSubmit = createDOMElement(BUTTON_ELEMENT, 'nickSubmit btn teritary optionButton', nickContainer);
    nickSubmit.innerHTML = SUBMIT_TEXT;
    nickSubmit.addEventListener('click', () => {
        let nickInput = document.querySelector('.nickInput');
        let nickOutput = document.querySelector('.nickOutput');
        defaultNickFromOptions = nickInput.value;
        nickInput.value = '';
        nickOutput.innerText = defaultNickFromOptions;
    });
    createNickOutput(nickContainer);
};

const createNickOutput = (parent) =>{
    let nickOutput = createDOMElement(DIV_ELEMENT, 'nickOutput font', parent, defaultNickFromOptions);
}

const createNickParagraph = (parent) => {
    let nickParagraphOption = createDOMElement(
        PARAGRAPH_ELEMENT,
        'nickParagraphOption font',
        parent,
        SET_DEFAULT_NICKNAME,
    );
};

const createBackButton = (parent) => {
    let backButtonContainer = createDOMElement(DIV_ELEMENT, 'backButtonContainer', parent);
    let backToMainPageButton = createDOMElement(
        'button',
        'backToMainPageButton btn primary OptionFont',
        backButtonContainer,
    );
    backToMainPageButton.textContent = 'BACK';
    backToMainPageButton.addEventListener('click', goToMain);
};

const switchMusic = () => {
    let musicButton = document.querySelector('.musicButton');
    if (music.state == 1) {
        music.muteMusic();
        musicButton.textContent = 'MUSIC OFF';
    } else {
        music.playMusic();
        musicButton.textContent = 'MUSIC ON';
    }
};

const goToMain = () => {
    MAIN.innerHTML = '';
    showMainMenu();
};
