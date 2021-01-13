import image3 from './../../styles/img/top_of_head.png';
import image4 from './../../styles/img/bottom_of_head.png';

const LEVEL_NAMES = ['EASY', 'MEDIUM', 'HARD'];
const MAIN = document.querySelector('#main-wrap');

export function showDifficultyLevelScreen(quizSettings) {
    createHTMLStructure();
    currentNumberOfQuestions();
    // let numberOfQuestionsInput = document.querySelector('#numberOfQuestionsInput');
    updateSettings(quizSettings);
}

const createHTMLStructure = () => {
    MAIN.innerHTML = '';
    let levelScreenWrapper = createDOMElement('div', 'levelScreenWrapper', MAIN);
    let numberOfQuestionsContainer = createDOMElement('div', 'numberOfQuestionsContainer', levelScreenWrapper);
    let levelContainer = createDOMElement('div', 'levelContainer', levelScreenWrapper);
    let numberOfQuestionsParagraph = createDOMElement(
        'p',
        'numberOfQuestionsParagraph font',
        numberOfQuestionsContainer,
        'NUMBER OF QUESTIONS',
    );
    levelContainer.innerHTML = `<input type="range" class="differenceLevel" min="0" max="2" step="1"/>`;

    let numberOfQuestionsInputWrapper = createDOMElement(
        'div',
        'numberOfQuestionsInputWrapper',
        numberOfQuestionsContainer,
    );
    numberOfQuestionsInputWrapper.innerHTML = `
    <output class="bubble"></output>
    <input type="range" id="numberOfQuestionsInput" class="range numberOfQuestions" min="10" max="50" step="1"/>`;
    let levelLabelsContainer = createDOMElement('div', 'levelLabelsContainer', levelContainer);
    LEVEL_NAMES.forEach((el, index) => {
        createDOMElement('p', 'levelLabel font', levelLabelsContainer, LEVEL_NAMES[index]);
    });
    let buttonsContainer = createDOMElement('div', 'buttonsContainer', levelScreenWrapper);
    let backToCategoryPageButton = createDOMElement('button', 'backToCategoryPageButton btn primary', buttonsContainer);
    let confirmLevelButton = createDOMElement('button', 'confirmLevelButton btn primary', buttonsContainer);
    backToCategoryPageButton.textContent = 'BACK';
    backToCategoryPageButton.setAttribute('onclick', "window.location.href='#main-wrap'");
    confirmLevelButton.textContent = "LET'S PLAY!";

    createIMG(image3, levelScreenWrapper, 'headTop');
    createIMG(image4, levelScreenWrapper, 'headBottom');
};
const createDOMElement = function (type, className, parent, text = '') {
    const newElement = document.createElement(type);
    newElement.className = className;
    newElement.innerText = text;
    parent.appendChild(newElement);
    return newElement;
};

function currentNumberOfQuestions() {
    const range = document.querySelector('.range');
    const bubble = document.querySelector('.bubble');
    range.addEventListener('input', () => {
        setBubble(range, bubble);
    });
    setBubble(range, bubble);
}

function setBubble(range, bubble) {
    const val = range.value;
    const min = range.min ? range.min : 0;
    const max = range.max ? range.max : 100;
    const newVal = Number(((val - min) * 100) / (max - min));
    bubble.innerHTML = val;
    bubble.style.left = `calc(${newVal}% + (${6 - newVal * 0.12}%))`;
}

const updateSettings = (quizSettings) => {
    let confirmLevelButton = document.querySelector('.confirmLevelButton');
    confirmLevelButton.addEventListener('click', () => {
        let selectedLevel = document.querySelector('.differenceLevel').value;
        let selectedNbrOfQuestions = document.querySelector('.numberOfQuestions').value;
        quizSettings.difficultyLevel = selectedLevel;
        quizSettings.numberOfQuestion = selectedNbrOfQuestions;
        MAIN.innerHTML = '';
    });
};

export const createIMG = (imgID, parent, className) => {
    const img = document.createElement('img');
    img.className = className;
    img.src = imgID;
    parent.appendChild(img);
};
