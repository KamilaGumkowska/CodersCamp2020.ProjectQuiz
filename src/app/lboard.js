function showLeaderboardScreen() {
    const leaderboard = document.getElementById('leaderboard');
    const newDiv = function (className, parent, text = '') {
        const newElement = document.createElement('div');
        newElement.className = className;
        parent.appendChild(newElement);
        newElement.innerText = text;
        return newElement;
    };

    //testing tool
    leaderboard.innerHTML = `<fieldset>
<input id="inputKey" type="text" placeholder="Name">
<input id="inputValue" type="text" placeholder="Points">
<button type="button" id="btnInsert">Insert Data</button>
</fieldset>`;

    // adding scores to the local storage
    const inputKey = document.getElementById('inputKey');
    const inputValue = document.getElementById('inputValue');
    const btnInsert = document.getElementById('btnInsert');
    let key;
    let value;

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
    let top3 = newDiv('top3', leaderboard);

    let item2 = newDiv('item item2', top3);
    let item1 = newDiv('item item1', top3);
    let item3 = newDiv('item item3', top3);

    let position1 = newDiv('position position1', item1, '1');
    let userName1 = newDiv('name userName1', item1, highScores[0].name);
    let score1 = newDiv('score score1', item1, highScores[0].score);

    let position2 = newDiv('position position2', item2, '2');
    let userName2 = newDiv('name userName2', item2, highScores[1].name);
    let score2 = newDiv('score score2', item2, highScores[1].score);

    let position3 = newDiv('position position3', item3, '3');
    let userName3 = newDiv('name userName3', item3, highScores[2].name);
    let score3 = newDiv('score score3', item3, highScores[2].score);

    //rest of the leaderboard's list
    let list = newDiv('list', leaderboard);
    let item4 = newDiv('item item4', list);
    let item5 = newDiv('item item5', list);
    let item6 = newDiv('item item6', list);
    let item7 = newDiv('item item7', list);
    let item8 = newDiv('item item8', list);
    let item9 = newDiv('item item9', list);
    let item10 = newDiv('item item10', list);

    let userName4 = newDiv('name userName4', item4, '4. ' + highScores[3].name);
    let score4 = newDiv('score score4', item4, highScores[3].score);

    let userName5 = newDiv('name userName5', item5, '5. ' + highScores[4].name);
    let score5 = newDiv('score score5', item5, highScores[4].score);

    let userName6 = newDiv('name userName6', item6, '6. ' + highScores[5].name);
    let score6 = newDiv('score score6', item6, highScores[5].score);

    let userName7 = newDiv('name userName7', item7, '7. ' + highScores[6].name);
    let score7 = newDiv('score score7', item7, highScores[6].score);

    let userName8 = newDiv('name userName8', item8, '8. ' + highScores[7].name);
    let score8 = newDiv('score score8', item8, highScores[7].score);

    let userName9 = newDiv('name userName9', item9, '9. ' + highScores[8].name);
    let score9 = newDiv('score score9', item9, highScores[8].score);

    let userName10 = newDiv('name userName10', item10, '10. ' + highScores[9].name);
    let score10 = newDiv('score score10', item10, highScores[9].score);

    function menuButton() {
        const menuButton = document.createElement('a');
        menuButton.className = menuButton;
        var t = document.createTextNode('MENU');
        menuButton.setAttribute('href', '#');
        menuButton.appendChild(t);
        document.body.appendChild(menuButton);
    }

    body.innerHTML = `<img class = "top-img" src = "./src/photos/img1.png" alt = "Top part of the man's head">`;
}

showLeaderboardScreen();