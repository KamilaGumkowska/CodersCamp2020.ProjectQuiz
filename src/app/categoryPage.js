import {quizSettings} from "./App.js";
import {showDifficultyLevelScreen} from "./difficultyLevel";
const MAIN = document.querySelector('#main-wrap');
let selectedCat;
let quitButton;
let submitButton;
const category = [];
const anchorTable = [];
const categoryName = ['SCIENCE & NATURE', 'ART', 'SPORT', 'MUSIC', 'COMPUTERS', 'GENERAL KNOWLEDGE'];
const categoryClass = ['bg one', 'bg two', 'bg three', 'bg four', 'bg five', 'bg six'];

const createDOMElement = function (type, className, parent, text = '') {
    const newElement = document.createElement(type);
    newElement.className = className;
    newElement.innerText = text;
    parent.appendChild(newElement);
    return newElement;
};

function createParents() {
    for (let i = 0; i < 8; i++) {
        anchorTable[i] = createDOMElement('a', 'a', MAIN);
    }
};


function showCategories() {
    for (let i = 0; i < categoryName.length; i++) {
        category[i] = createDOMElement('div', categoryClass[i], anchorTable[i], categoryName[i]);
    }
};


function showNavigation() {
    quitButton = createDOMElement('button', 'bg btn quit', anchorTable[6], 'BACK');
    submitButton = createDOMElement('button', 'bg btn submit', anchorTable[7], 'NEXT');
};


function addCategoryEventListeners() {
    for (let i = 0; i < category.length; i++) {
        category[i].addEventListener('click', () => {
            if (selectedCat > 0) {
                category[selectedCat - 1].style.backgroundColor = 'rgba(0,0,0,0)'; // unclicked
            }
            selectedCat = i + 1;
            console.log(selectedCat);
            category[i].style.backgroundColor = '#FDB813'; //clicked
        });
    }
};


function quitModule() {
    quizSettings.category = selectedCat;
    submitButton.addEventListener('click', () => {showDifficultyLevelScreen(quizSettings)});
   // quitButton.addEventListener('click', ...) // powrót na mainPage
}
//quitModule();

export function renderCategoryScreen() {
    createParents();
    showCategories();
    showNavigation();
    addCategoryEventListeners();
    quitModule();
}



