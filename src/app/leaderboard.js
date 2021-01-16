function renderLeaderboardScreen() {
    // adding scores to the local storage
    let highScores = JSON.parse(localStorage.getItem('highScores')) || [];

    btnInsert.onclick = function (e) {
        key = inputKey.value;
        value = inputValue.value;
        localStorage.setItem(key, value);
        savingHighScore(e);
    };

    savingHighScore = (e) => {
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
    leaderboardPageTitle();

    function top3() {
        let top3Container = newDiv('top3', leaderboard);

        let item2 = newDiv('item2', top3Container);
        let item1 = newDiv('item1', top3Container);
        let item3 = newDiv('item3', top3Container);

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
    top3();

    //rest of the leaderboard's list
    function leaderboardList() {
        let list = newDiv('list', leaderboard);

        let item4 = newDiv('item4', list);
        let item5 = newDiv('item5', list);
        let item6 = newDiv('item6', list);
        let item7 = newDiv('item7', list);
        let item8 = newDiv('item8', list);
        let item9 = newDiv('item9', list);
        let item10 = newDiv('item10', list);

        newDiv('userName4', item4, '4. ' + highScores[3].name);
        newDiv('score4', item4, highScores[3].score);
        newDiv('userName5', item5, '5. ' + highScores[4].name);
        newDiv('score5', item5, highScores[4].score);
        newDiv('userName6', item6, '6. ' + highScores[5].name);
        newDiv('score6', item6, highScores[5].score);
        newDiv('userName7', item7, '7. ' + highScores[6].name);
        newDiv('score7', item7, highScores[6].score);
        newDiv('userName8', item8, '8. ' + highScores[7].name);
        newDiv('score8', item8, highScores[7].score);
        newDiv('userName9', item9, '9. ' + highScores[8].name);
        newDiv('score9', item9, highScores[8].score);
        newDiv('userName10', item10, '10. ' + highScores[9].name);
        newDiv('score10', item10, highScores[9].score);
    }

    leaderboardList();

    function menuButton() {
        const buttonDiv = newDiv('buttonDiv', leaderboard);
        const menuButton = document.createElement('a');
        menuButton.className = 'menuButton';
        let t = document.createTextNode('BACK');
        menuButton.setAttribute('href', '#');
        menuButton.appendChild(t);
        buttonDiv.appendChild(menuButton);
    }
    menuButton();
}

renderLeaderboardScreen();