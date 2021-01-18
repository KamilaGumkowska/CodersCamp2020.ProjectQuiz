import topOfHeadImage from './../../styles/img/top_of_head.png';
import bottomOfHeadImage from './../../styles/img/bottom_of_head.png';
import { showMainMenu } from './mainPage';
import { createIMG } from './difficultyLevel';

const MAIN = document.querySelector('#main-wrap');
const itemsArrayList = [];
let highScores = JSON.parse(localStorage.getItem('highScores')) || [];
// let highScores = [
//     { score: 100, name: 'Seb' },
//     { score: 70, name: 'Sebast' },
//     { score: 67, name: 'Jadzia' },
//     { score: 60, name: 'Stasia' },
//     { score: 50, name: 'Seb' },
//     { score: 40, name: 'Loser' },
//     { score: 30, name: 'MoreLoser' },
//     { score: 20, name: 'Jjh' },
//     { score: 10, name: 'Sthjda' },
//     { score: 5, name: 'killMe' },
// ];

export function showLeaderboardScreen() {
    createHTMLStructure();
}

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
    createImageSection(leaderboardWrapper);
}

function createPageTitle(parent) {
    let leaderboardPageTitle = createNewDiv('titleDiv', parent, 'Leaders');
}

function createTop3(parent) {
    let top3Container = createNewDiv('top3Container', parent);

    let item2 = createNewDiv('item2', top3Container);
    let item1 = createNewDiv('item1', top3Container);
    let item3 = createNewDiv('item3', top3Container);

    if (highScores.length >= 1) {
        createNewDiv('position1', item1, '1');
        createNewDiv('userName1', item1, highScores[0].name);
        createNewDiv('score1', item1, highScores[0].score + ' points');
    } else {
        createNewDiv('position1', item1, '1');
        createNewDiv('userName1', item1, 'userName');
        createNewDiv('score1', item1, 'userScore');
    }

    if (highScores.length >= 2) {
        createNewDiv('position2', item2, '2');
        createNewDiv('userName2', item2, highScores[1].name);
        createNewDiv('score2', item2, highScores[1].score + ' points');
    } else {
        createNewDiv('position2', item2, '2');
        createNewDiv('userName2', item2, 'userName');
        createNewDiv('score2', item2, 'userScore');
    }

    if (highScores.length >= 3) {
        createNewDiv('position3', item3, '3');
        createNewDiv('userName3', item3, highScores[2].name);
        createNewDiv('score3', item3, highScores[2].score + ' points');
    } else {
        createNewDiv('position3', item3, '3');
        createNewDiv('userName3', item3, 'userName');
        createNewDiv('score3', item3, 'userScore');
    }
}

function createRestOfTheList(parent) {
    const listContener = createNewDiv('listContainer', parent);

    for (let i = 4; i < 11; i++) {
        itemsArrayList[i] = createNewDiv('listElementBox', listContener);
    }

    for (let i = 4; i <= highScores.length; i++) {
        // 10
        createNewDiv('userName', itemsArrayList[i], [i] + '. ' + highScores[i - 1].name);
    }

    for (let i = 4; i <= highScores.length; i++) {
        createNewDiv('score', itemsArrayList[i], highScores[i - 1].score + ' points');
    }
}

function createButtonSection(parent) {
    let backToMenuButton = createNewDiv('backToMenuButton', parent);
    backToMenuButton.textContent = 'MENU';
    backToMenuButton.addEventListener('click', () => {
        showMainMenu();
    });
}
function createImageSection(parent) {
    createIMG(topOfHeadImage, parent, 'headTop');
    createIMG(bottomOfHeadImage, parent, 'headBottom');
}
