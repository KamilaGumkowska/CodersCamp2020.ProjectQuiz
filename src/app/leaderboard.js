// adding scores to the local storage
let highScores = JSON.parse(localStorage.getItem('highScores')) || [];
function addingToLocalStorage() {
    const savingHighScore = (e) => {
        e.preventDefault();
        let score = {
            score: value,
            name: key,
        };

        highScores.push(score);
        highScores.sort((a, b) => b.score - a.score);
        highScores.splice(10);

        localStorage.setItem('highScores', JSON.stringify(highScores));
        location.reload();
    };

    btnInsert.onclick = function (e) {
        key = inputKey.value;
        value = inputValue.value;
        localStorage.setItem(key, value);
        savingHighScore(e);
    };
}

//html structure
const leaderboard = document.querySelector('#leaderboard');

const newDiv = function (className, parent, text = '') {
    const newElement = document.createElement('div');
    newElement.className = className;
    parent.appendChild(newElement);
    newElement.innerText = text;
    return newElement;
};

function leaderboardPageTitle() {
    const leaderboardPageTitle = newDiv('titleDiv', leaderboard, 'Leaders');
    leaderboard.appendChild(leaderboardPageTitle);
}

function top3Display() {
    const top3Container = newDiv('top3', leaderboard);
    const item2 = newDiv('item2', top3Container);
    const item1 = newDiv('item1', top3Container);
    const item3 = newDiv('item3', top3Container);

    newDiv('position1', item1, '1');
    newDiv('userName1', item1, highScores[0].name);
    newDiv('score1', item1, highScores[0].score);

    newDiv('position2', item2, '2');
    newDiv('userName2', item2, highScores[1].name);
    newDiv('score2', item2, highScores[1].score);

    newDiv('position3', item3, '3');
    newDiv('userName3', item3, highScores[2].name);
    newDiv('score3', item3, highScores[2].score);
}

const list = newDiv('list', leaderboard);
const itemsArrayList = [];

const scoreList = ['score4', 'score5', 'score6', 'score7', 'score8', 'score9', 'score10'];

//Rest of the leaderboard's list
function restOfTheList() {
    itemsBoxes();
    itemsElements();
}

function itemsBoxes() {
    for (let i = 4; i < 11; i++) {
        itemsArrayList[i] = newDiv('additional', list);
    }
}

function itemsElements() {
    for (let i = 4; i < 11; i++) {
        newDiv('userName', itemsArrayList[i], i + '. ' + highScores[i - 1].name);
    }
    for (let i = 4; i < 11; i++) {
        newDiv(scoreList[i - 4], itemsArrayList[i], i + highScores[i - 1].score);
    }
}
function menuButton() {
    const buttonDiv = newDiv('buttonDiv', leaderboard);
    const menuButton = document.createElement('a');
    menuButton.className = 'menuButton';
    let t = document.createTextNode('BACK');
    menuButton.setAttribute('href', '#');
    menuButton.appendChild(t);
    buttonDiv.appendChild(menuButton);
}

export function renderLeaderboardScreen() {
    addingToLocalStorage();
    leaderboardPageTitle();
    top3Display();
    restOfTheList();
    menuButton();
}
