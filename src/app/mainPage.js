import image1 from './../../styles/img/img1.png';
import image2 from './../../styles/img/img2.png';
import {createGameScreen} from './game.js';

export function showMainMenu() {
    createMainMenuStructure();
}

function createMainMenuStructure() {
    const mainWrap = document.getElementById('main-wrap');

    const startWrap = document.createElement('div');
    startWrap.id = 'startwrap';

    const mainGame = document.createElement('div');
    mainGame.className = 'main-game';

    const leaderBoardWrap = document.createElement('div');
    leaderBoardWrap.className = 'leaderboard-wrap';

    const creditsWrap = document.createElement('div');
    creditsWrap.className = 'credits-wrap';

    const optionsWrap = document.createElement('div');
    optionsWrap.className = 'options-wrap';

    const gameTitle = document.createElement('h1');
    gameTitle.className = 'title';
    gameTitle.innerHTML = 'brains out quiz';

    const gameSubTitle = document.createElement('h2');
    gameSubTitle.className = 'subtitle';
    gameSubTitle.innerHTML = 'starts here:';

    const singleBtn = document.createElement('button');
    singleBtn.classList.add('btn', 'primary', 'single');
    singleBtn.innerHTML = 'single';

    const multiBtn = document.createElement('button');
    multiBtn.classList.add('btn', 'primary', 'multi');
    multiBtn.innerHTML = 'multi';

    const leaderTitle = document.createElement('h2');
    leaderTitle.className = 'subtitle';
    leaderTitle.innerHTML = 'ends here:';

    const leaderBtn = document.createElement('button');
    leaderBtn.classList.add('btn', 'secondary', 'leaderboard');
    leaderBtn.innerHTML = 'see our leaders';

    const creditsBtn = document.createElement('button');
    creditsBtn.classList.add('btn', 'teritary', 'credits');
    creditsBtn.innerHTML = 'credits';

    const optionsBtn = document.createElement('button');
    optionsBtn.classList.add('btn', 'teritary', 'options');
    optionsBtn.innerHTML = 'options';

    const img1 = document.createElement('img');
    img1.className = 'headimg';
    img1.src = image1;

    const img2 = document.createElement('img');
    img2.className = 'blueimg';
    img2.src = image2;

    mainWrap.appendChild(startWrap);

    startWrap.appendChild(mainGame);
    startWrap.appendChild(leaderBoardWrap);
    startWrap.appendChild(creditsWrap);
    startWrap.appendChild(optionsWrap);
    startWrap.appendChild(img1);
    startWrap.appendChild(img2);

    mainGame.appendChild(gameTitle);
    mainGame.appendChild(gameSubTitle);
    mainGame.appendChild(singleBtn);
    mainGame.appendChild(multiBtn);

    leaderBoardWrap.appendChild(leaderTitle);
    leaderBoardWrap.appendChild(leaderBtn);

    creditsWrap.appendChild(creditsBtn);

    optionsWrap.appendChild(optionsBtn);

    singleBtn.addEventListener('click', goToSingle);    
    multiBtn.addEventListener('click', goToMulti);

    function hideStartScreen() {
        startWrap.style.visibility = 'hidden';
    }

    function goToSingle() {
        hideStartScreen();
        createGameScreen();
    }

    function goToMulti() {
        hideStartScreen();
        // start function for the multi game
    }
}