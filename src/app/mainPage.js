const mainWrap = document.getElementById("main-wrap");

const mainGame = document.createElement("div");
mainGame.className = "main-game";

const leaderBoardWrap = document.createElement("div");
leaderBoardWrap.className = "leaderboard-wrap";

const creditsWrap = document.createElement("div");
creditsWrap.className = "credits-wrap";

const optionsWrap = document.createElement("div");
optionsWrap.className = "options-wrap";



const gameTitle = document.createElement("h1");
gameTitle.className = "title";
gameTitle.innerHTML = "brains out quiz";

const gameSubTitle = document.createElement("h2");
gameSubTitle.className = "subtitle";
gameSubTitle.innerHTML = "starts here:";

const singleBtn = document.createElement("button");
singleBtn.classList.add("btn", "primary", "single");
singleBtn.innerHTML = "single";

const multiBtn = document.createElement("button");
multiBtn.classList.add("btn", "primary", "multi");
multiBtn.innerHTML = "multi";



const leaderTitle = document.createElement("h2");
leaderTitle.className = "subtitle";
leaderTitle.innerHTML = "ends here:";

const leaderBtn = document.createElement("button");
leaderBtn.classList.add("btn", "secondary", "leaderboard");
leaderBtn.innerHTML = "see our leaders";



const creditsBtn = document.createElement("button");
creditsBtn.classList.add("btn", "teritary", "credits");
creditsBtn.innerHTML = "credits";

const optionsBtn = document.createElement("button");
optionsBtn.classList.add("btn", "teritary", "options");
optionsBtn.innerHTML = "options";

const img1 = document.createElement("img");
img1.className = "headimg";
img1.src = "../styles/img/img1.png";

const img2 = document.createElement("img");
img2.className = "blueimg";


mainWrap.appendChild(mainGame);
mainWrap.appendChild(leaderBoardWrap);
mainWrap.appendChild(creditsWrap);
mainWrap.appendChild(optionsWrap);
mainWrap.appendChild(img1);
mainWrap.appendChild(img2);

mainGame.appendChild(gameTitle);
mainGame.appendChild(gameSubTitle);
mainGame.appendChild(singleBtn);
mainGame.appendChild(multiBtn);

leaderBoardWrap.appendChild(leaderTitle);
leaderBoardWrap.appendChild(leaderBtn);

creditsWrap.appendChild(creditsBtn);

optionsWrap.appendChild(optionsBtn);