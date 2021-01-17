import {quizSettings} from "./App.js";
import {showDifficultyLevelScreen} from "./difficultyLevel";
import {showMainMenu} from "./mainPage"
import topOfHeadImage from './../../styles/img/top_of_head.png';
import bottomOfHeadImage from './../../styles/img/bottom_of_head.png';
import {createIMG} from "./difficultyLevel"

const MAIN = document.querySelector('#main-wrap');
let selectedCat;
let quitButton;
let submitButton;
const category = [];
const anchorTable = [];
const categoryName = ['SCIENCE', 'ART', 'SPORT', 'MUSIC', 'COMPUTERS', 'GENERAL KNOWLEDGE'];
const categoryClass = ['bg one', 'bg two', 'bg three', 'bg four', 'bg five', 'bg six'];

const createDOMElement = function (type, className, parent, text = '') {
    createIMG(topOfHeadImage, MAIN, "headTop")
    const newElement = document.createElement(type);
    newElement.className = className;
    newElement.innerText = text;
    parent.appendChild(newElement);
    return newElement;
};

function createParents() {
    createDOMElement("h1", "categoryTitle", MAIN, "CATEGORY");
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
    createIMG(bottomOfHeadImage, MAIN, "headBottom")
    
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
    // if(selectedCat = 0) {
    //     quitButton.attr('disabled','true');
    // }
    // else {
    //     quitButton.attr('disabled','false');
    // }
    submitButton.addEventListener('click', () => {showDifficultyLevelScreen(quizSettings)});
    quitButton.addEventListener('click', () => {showMainMenu()});// powrót na mainPage
}
//quitModule();

export function renderCategoryScreen() {
    createParents();
    showCategories();
    showNavigation();
    addCategoryEventListeners();
    quitModule();
}



