import { quizSettings } from './App.js';
import { showDifficultyLevelScreen } from './difficultyLevel';
import { showMainMenu } from './mainPage';
import topOfHeadImage from './../../styles/img/top_of_head.png';
import bottomOfHeadImage from './../../styles/img/bottom_of_head.png';
import { createIMG } from './difficultyLevel';

const MAIN = document.querySelector('#main-wrap');
let categoryScreen;

let selectedCat = 0;
let tip;
let quitButton;
let submitButton;
const category = [];
const anchorTable = [];
const categoryName = ['VIDEO GAMES', 'SCIENCE & NATURE', 'MUSIC', 'HISTORY', 'GEOGRAPHY', 'GENERAL KNOWLEDGE'];
const categoryClass = ['bg one', 'bg two', 'bg three', 'bg four', 'bg five', 'bg six'];

const createDOMElement = function (type, className, parent, text = '') {
    const newElement = document.createElement(type);
    newElement.className = className;
    newElement.innerText = text;
    parent.appendChild(newElement);
    return newElement;
};

function createParents() {
    MAIN.innerHTML = ' ';
    categoryScreen = createDOMElement('div', 'categoryScreen', MAIN);
    createIMG(topOfHeadImage, categoryScreen, 'headTop');
    createDOMElement('h1', 'categoryTitle', categoryScreen, 'CATEGORY');
    for (let i = 0; i < 8; i++) {
        anchorTable[i] = createDOMElement('a', 'a', categoryScreen);
    }
}

function showCategories() {
    for (let i = 0; i < categoryName.length; i++) {
        category[i] = createDOMElement('div', categoryClass[i], anchorTable[i], categoryName[i]);
    }
}

function showNavigation() {
    quitButton = createDOMElement('button', 'bg primary categoryBtn', anchorTable[6], 'BACK');

    submitButton = createDOMElement('button', 'bg primary categoryBtn submit', anchorTable[7], 'NEXT');
    createIMG(bottomOfHeadImage, categoryScreen, 'headBottom');
    tip = createDOMElement('h2', 'tip', categoryScreen, 'SELECT CATEGORY');
}

function addCategoryEventListeners() {
    for (let i = 0; i < category.length; i++) {
        category[i].addEventListener('click', () => {
            if (selectedCat > 0) {
                category[selectedCat - 1].style.backgroundColor = 'rgba(0,0,0,0)'; // unclicked
            }
            tip.style.visibility = 'hidden';
            selectedCat = i + 1;
            console.log(selectedCat);
            category[i].style.backgroundColor = '#FDB813'; //clicked

            if (selectedCat == 1) {
                quizSettings.category = 15;
            } else if (selectedCat == 2) {
                quizSettings.category = 17;
            } else if (selectedCat == 3) {
                quizSettings.category = 12;
            } else if (selectedCat == 4) {
                quizSettings.category = 23;
            } else if (selectedCat == 5) {
                quizSettings.category = 22;
            } else if (selectedCat == 6) {
                quizSettings.category = 9;
            }
            console.log(quizSettings.category);
        });
    }
}

function quitModule() {
    submitButton.addEventListener('click', () => {
        console.log(selectedCat);
        if (selectedCat === 0) {
            submitButton.disabled = false;
            tip.style.visibility = 'visible';
        } else {
            showDifficultyLevelScreen(quizSettings);
        }
    });

    quitButton.addEventListener('click', (e) => {
        showMainMenu();
    });
}

export function renderCategoryScreen() {
    createParents();
    showCategories();
    showNavigation();
    addCategoryEventListeners();
    quitModule();
}
