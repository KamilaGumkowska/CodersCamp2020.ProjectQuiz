const MAIN = document.querySelector('#swquiz-app');
let selectedCat;
const category = [];
const anchorTable = [];
const categoryName = ['SCIENCE & NATURE', 'ART', 'SPORT', 'MUSIC', 'COMPUTERS', 'GENERAL KNOWLEDGE'];
const categoryClass = ['bg one', 'bg two', 'bg three', 'bg four', 'bg five', 'bg six'];
const quizSettings = {
    category: 0,
    difficultyLevel: -1,
    numberOfQuestions: 0,
};
const createDOMElement = function (type, className, parent, text = '') {
    const newElement = document.createElement(type);
    newElement.className = className;
    newElement.innerText = text;
    parent.appendChild(newElement);
    return newElement;
};

const createParents = function () {
    for (i = 0; i < 8; i++) {
        anchorTable[i] = createDOMElement('a', 'a', MAIN);
    }
};
createParents();

const showCategories = function () {
    for (i = 0; i < categoryName.length; i++) {
        category[i] = createDOMElement('div', categoryClass[i], anchorTable[i], categoryName[i]);
    }
};
showCategories();

const showNavigation = function () {
    quitButton = createDOMElement('button', 'bg btn quit', anchorTable[6], 'BACK');
    submitButton = createDOMElement('button', 'bg btn submit', anchorTable[7], 'NEXT');
};
showNavigation();

const addCategoryEventListeners = function () {
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
addCategoryEventListeners();

const quiteModule= function() {
    quizSettings.category = selectedCat;
    //submitButton.addEventListener('click', showDifficultyLevelScreen(quizSettings); )// wywołanie funkcji Mateusza
   // quitButton.addEventListener('click', ...) // powrót na mainPage
}
quiteModule();



