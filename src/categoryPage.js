const MAIN = document.querySelector('#swquiz-app');
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

aTable = []
for(i=0; i<6;i++) {
    aTable[i] = createDOMElement('a', 'a', MAIN)  
}

const category = []
category[0] = createDOMElement('div', 'bg one', aTable[0], 'SCIENCE & NATURE');
category[1] =createDOMElement('div', 'bg two', aTable[1], 'ART');
category[2]=createDOMElement('div', 'bg three', aTable[2], 'SPORT');
category[3]=createDOMElement('div', 'bg four', aTable[3], 'MUSIC');
category[4] =createDOMElement('div', 'bg five', aTable[4], 'COMPUTERS');
category[5] =createDOMElement('div', 'bg six', aTable[5], 'GENERAL KNOWLEDGE');


quitBtn= createDOMElement('button', 'quit', MAIN, 'Back')
//but1 = createDOMElement('button', 'bg one', category[0], 'SCIENCE & NATURE');
//but1.setAttribute("onlick", "select()");

select = e => e.target.backgroundImage = none;

let selectedCat;
let counter;
category[0].addEventListener('click', () => {
    if (selectedCat >0)
    {
    category[selectedCat -1].style.backgroundColor = "rgba(0,0,0,0)";
    }
    selectedCat = 1
    console.log(selectedCat);
    category[0].style.backgroundColor =  "#FDB813";
    //category[0].style.backgroundImage = none;
    //category[selectedCat].style.backgroundColor = none; // nic nie daje
});
category[1].addEventListener('click', () => {
    if (selectedCat >0)
    {
    category[selectedCat-1].style.backgroundColor = "rgba(0,0,0,0)";
    }
    selectedCat = 2
    console.log(selectedCat);   
    category[1].style.backgroundColor =  "#FDB813";
    // nic nie daje
}); 
category[2].addEventListener('click', () => {
    if (selectedCat >0)
    {
    category[selectedCat-1].style.backgroundColor = "rgba(0,0,0,0)";
    }
    selectedCat = 3
    console.log(selectedCat);   
    category[2].style.backgroundColor =  "#FDB813";
}); 
category[3].addEventListener('click', () => {
    if (selectedCat >0)
    {
    category[selectedCat-1].style.backgroundColor = "rgba(0,0,0,0)";
    }
    selectedCat = 4
    console.log(selectedCat);   
    category[3].style.backgroundColor =  "#FDB813";
}); 
category[4].addEventListener('click', () => {
    if (selectedCat >0)
    {
    category[selectedCat-1].style.backgroundColor = "rgba(0,0,0,0)";
    }
    selectedCat = 5
    console.log(selectedCat);   
    category[4].style.backgroundColor =  "#FDB813";
}); 
category[5].addEventListener('click', () => {
    if (selectedCat >0)
    {
    category[selectedCat-1].style.backgroundColor = "rgba(0,0,0,0)";
    }
    selectedCat = 6
    console.log(selectedCat);   
    category[5].style.backgroundColor =  "#FDB813";
}); 

submitBtn = createDOMElement('button', 'submit', MAIN, 'PRZEJDŹ DALEJ');

/*if (selectedCat > 0)
{
    submitBtn.classList.add('hide');
} */

quizSettings.category = selectedCat;
console.log(selectedCat);

//MAIN.addEventListener('click', (e) => console.log(e.className))

//showDifficultyLevelScreen(quizSettings);
