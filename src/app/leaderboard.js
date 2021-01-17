const MAIN = document.querySelector('#main-wrap');
// const scoreList = ['score4', 'score5', 'score6', 'score7', 'score8', 'score9', 'score10'];
const itemsArrayList = [];
let highScores = JSON.parse(localStorage.getItem('highScores')) || [];

export function showLeaderboardScreen() {
    addingToLocalStorage();
    createHTMLStructure();
}
//Storage
function addingToLocalStorage() {
    let value = localStorage.getItem('userScore');
    let key = localStorage.getItem('nickName');
    let score = {
        score: value,
        name: key,
    };

    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(10);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    // location.reload();
}

//HTML

function createNewDiv(className, parent, text = '') {
    const newElement = document.createElement('div');
    newElement.className = className;
    parent.appendChild(newElement);
    newElement.innerText = text;
    return newElement;
}

function createHTMLStructure() {
    MAIN.innerHTML = '';
    let leaderboardWrapper = createNewDiv('leaderboardWrapper', MAIN);

    createPageTitle(leaderboardWrapper);
    createTop3(leaderboardWrapper);
    createRestOfTheList(leaderboardWrapper);
    createButtonSection(leaderboardWrapper);
}

function createPageTitle(parent) {
    let leaderboardPageTitle = createNewDiv('titleDiv', parent, 'Leaders');
}

function createTop3(parent) {
    let top3Container = createNewDiv('top3Container', parent);

    let item2 = createNewDiv('item2', top3Container);
    let item1 = createNewDiv('item1', top3Container);
    let item3 = createNewDiv('item3', top3Container);

    createNewDiv('position1', item1, '1');
    createNewDiv('userName1', item1, 'Sebo');
    createNewDiv('score1', item1, '1200');

    createNewDiv('position2', item2, '2');
    createNewDiv('userName2', item2, 'Marek');
    createNewDiv('score2', item2, '1100');

    createNewDiv('position3', item3, '3');
    createNewDiv('userName3', item3, 'Andrzej');
    createNewDiv('score3', item3, '1000');
}

function createRestOfTheList(parent) {
    const listContener = createNewDiv('listContainer', parent);

    for (let i = 4; i < 11; i++) {
        itemsArrayList[i] = createNewDiv('listElementBox', listContener);
    }

    for (let i = 0; i < highScores.length; i++) {
        createNewDiv('userName', itemsArrayList[i + 4], highScores[i].name);
    }

    for (let i = 0; i < highScores.length; i++) {
        createNewDiv('score', itemsArrayList[i + 4], highScores[i].score);
    }
}

function createButtonSection(parent) {
    let backToMenuButton = createNewDiv('backToMenuButton', parent);
    backToMenuButton.textContent = 'menu';
    //backToMenuButton.setAttribute('onclick', "window.location.href='#main-wrap'");
}
