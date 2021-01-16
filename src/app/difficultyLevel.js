import topOfHeadImage from './../../styles/img/top_of_head.png';
import bottomOfHeadImage from './../../styles/img/bottom_of_head.png';

const LEVEL_NAMES = ['EASY', 'MEDIUM', 'HARD'];
const MAIN = document.querySelector('#main-wrap');

export function showDifficultyLevelScreen(quizSettings) {
    createHTMLStructure();
    currentNumberOfQuestions();
    updateSettings(quizSettings);
}
const createDOMElement = (type, className, parent, text = '') => {
    const newElement = document.createElement(type);
    newElement.className = className;
    newElement.innerText = text;
    parent.appendChild(newElement);
    return newElement;
};
const createHTMLStructure = () => {
    MAIN.innerHTML = '';
    let levelScreenWrapper = createDOMElement('div', 'levelScreenWrapper', MAIN);
    createNUmberOfQuestionSection(levelScreenWrapper);
    createLevelSection(levelScreenWrapper);
    createButtonsSection(levelScreenWrapper);
    createImageSection(levelScreenWrapper);
};
const createNUmberOfQuestionSection = (parent) => {
    let numberOfQuestionsContainer = createDOMElement('div', 'numberOfQuestionsContainer', parent);
    let numberOfQuestionsParagraph = createDOMElement(
        'p',
        'numberOfQuestionsParagraph font',
        numberOfQuestionsContainer,
        'NUMBER OF QUESTIONS',
    );
    let numberOfQuestionsInputWrapper = createDOMElement(
        'div',
        'numberOfQuestionsInputWrapper',
        numberOfQuestionsContainer,
    );
    numberOfQuestionsInputWrapper.innerHTML = `
            <output class="bubble"></output>
            <input type="range" id="numberOfQuestionsInput" class="range numberOfQuestions" min="10" max="50" step="1"/>`;
};
const createLevelSection = (parent) => {
    let levelContainer = createDOMElement('div', 'levelContainer', parent);
    let levelParagraph = createDOMElement('p', 'levelParagraph font', levelContainer, 'LEVEL');
    let levelInputWrapper = createDOMElement('div', 'levelInputWrapper', levelContainer);
    levelInputWrapper.innerHTML = `<input type="range" class="differenceLevel" min="0" max="2" step="1"/>`;
    let levelLabelsContainer = createDOMElement('div', 'levelLabelsContainer', levelContainer);
    LEVEL_NAMES.forEach((el, index) => {
        createDOMElement('p', 'levelLabel font', levelLabelsContainer, LEVEL_NAMES[index]);
    });
};

const currentNumberOfQuestions = () => {
    const range = document.querySelector('.range');
    const bubble = document.querySelector('.bubble');
    range.addEventListener('input', () => {
        setBubble(range, bubble);
    });
    setBubble(range, bubble);
};

const setBubble = (range, bubble) => {
    const val = range.value;
    const min = range.min ? range.min : 0;
    const max = range.max ? range.max : 100;
    const newVal = Number(((val - min) * 100) / (max - min));
    bubble.innerHTML = val;
    bubble.style.left = `calc(${newVal}% + (${7 - newVal * 0.14}%))`;
};

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
const createButtonsSection = (parent) => {
    let buttonsContainer = createDOMElement('div', 'buttonsContainer', parent);
    let backToCategoryPageButton = createDOMElement('button', 'backToCategoryPageButton btn primary', buttonsContainer);
    let confirmLevelButton = createDOMElement('button', 'confirmLevelButton btn primary', buttonsContainer);
    backToCategoryPageButton.textContent = 'BACK';
    backToCategoryPageButton.setAttribute('onclick', "window.location.href='#main-wrap'");
    confirmLevelButton.textContent = "LET'S PLAY!";
};

const createImageSection = (parent) => {
    createIMG(topOfHeadImage, parent, 'headTop');
    createIMG(bottomOfHeadImage, parent, 'headBottom');
};

export const createIMG = (imgID, parent, className) => {
    const img = document.createElement('img');
    img.className = className;
    img.src = imgID;
    parent.appendChild(img);
};
