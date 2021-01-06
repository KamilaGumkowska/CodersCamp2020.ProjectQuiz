export const App = ({}) => {};

const main = document.querySelector('#quiz-app');

function showDiffLvLScreen() {
    let numberOfQuestionsContainer = document.createElement('div');
    numberOfQuestionsContainer.className = 'numberOfQuestionsContainer';
    let lvlContainer = document.createElement('div');
    lvlContainer.className = 'lvlContainer';
    main.appendChild(numberOfQuestionsContainer);
    let numberOfQuestionsParagraph = document.createElement('p');
    // numberOfQuestionsContainer.insertBefore(numberOfQuestionsParagraph,numberOfQuestions);
    numberOfQuestionsContainer.appendChild(numberOfQuestionsParagraph);
    numberOfQuestionsParagraph.innerText= 'Number of questions';
    let numberOfQuestionsInputWrapper = document.createElement('div');
    numberOfQuestionsInputWrapper.className = 'numberOfQuestionsInputWrapper';
    numberOfQuestionsContainer.appendChild(numberOfQuestionsInputWrapper);
    numberOfQuestionsInputWrapper.innerHTML = `
    <output class="bubble"></output>
    <input type="range" id="numberOfQuestionsInput" class="range" min="10" max="50" step="1"/>`;
    currentNumberOfQuestions();
    let numberOfQuestionsInput = document.querySelector('#numberOfQuestionsInput');

    main.appendChild(lvlContainer);
    // let level = document.createElement('input');
    // level.type = 'range';
    // level.id = 'diffLvl';
    // level.setAttribute('min', '0');
    // level.setAttribute('max', '2');
    // level.setAttribute('step', '1');
    let lvlLabelsContainer = document.createElement('div');
    lvlLabelsContainer.className = 'lvlLabelsContainer';
    lvlContainer.innerHTML = `<input type="range" id="diffLvl" min="0" max="2" step="1"/>`;
    // lvlContainer.appendChild(level);
    lvlContainer.appendChild(lvlLabelsContainer);
    let lvlLabel1 = document.createElement('p');
    let lvlLabel2 = document.createElement('p');
    let lvlLabel3 = document.createElement('p');
    lvlLabel1.className = 'lvlLabel';
    lvlLabel2.className = 'lvlLabel';
    lvlLabel3.className = 'lvlLabel';
    lvlLabelsContainer.appendChild(lvlLabel1);
    lvlLabelsContainer.appendChild(lvlLabel2);
    lvlLabelsContainer.appendChild(lvlLabel3);
    lvlLabel1.innerText = 'Easy';
    lvlLabel2.innerText = 'Medium';
    lvlLabel3.innerText = 'Hard';
}

showDiffLvLScreen();
let selectedLvl = document.querySelector('#diffLvl').value;
let selectedNbrOfQuestions = document.querySelector('#numberOfQuestions').value;

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
