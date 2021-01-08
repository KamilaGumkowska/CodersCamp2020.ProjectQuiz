export { showDifficultyLevelScreen };

const LEVEL_NAMES = ['Easy', 'Medium', 'Hard'];
const MAIN = document.querySelector('#quiz-app');



function showDifficultyLevelScreen(quizSettings) {
    createHTMLStructure();
    currentNumberOfQuestions();
    // let numberOfQuestionsInput = document.querySelector('#numberOfQuestionsInput');
    updateSettings(quizSettings);
}

const createHTMLStructure = () => {
    MAIN.innerHTML = '';
    let numberOfQuestionsContainer = createDOMElement('div', 'numberOfQuestionsContainer', MAIN);
    let levelContainer = createDOMElement('div', 'levelContainer', MAIN);
    let numberOfQuestionsParagraph = createDOMElement(
        'div',
        'numberOfQuestionsParagraph',
        numberOfQuestionsContainer,
        'Number of questions',
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
        createDOMElement('p', 'levelLabel', levelLabelsContainer, LEVEL_NAMES[index]);
    });
    let backToHomePageButton = createDOMElement('button', 'backToHomePageButton', MAIN);
    let confirmLevelButton = createDOMElement('button', 'confirmLevelButton', MAIN);
    backToHomePageButton.textContent = "Back to home";
    backToHomePageButton.textContent
    confirmLevelButton.textContent = "Let's play!";

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
    bubble.style.left = `calc(${newVal}% + (${20 - newVal * 0.35}px))`;
}

const updateSettings = (quizSettings) => {
    let confirmLevelButton = document.querySelector('.confirmLevelButton');
    confirmLevelButton.addEventListener('click', () => {
        let selectedLevel = document.querySelector('.differenceLevel').value;
        let selectedNbrOfQuestions = document.querySelector('.numberOfQuestions').value;
        quizSettings.difficultyLevel = selectedLevel;
        quizSettings.numberOfQuestion = selectedNbrOfQuestions;
        console.log(quizSettings);
    });
};
