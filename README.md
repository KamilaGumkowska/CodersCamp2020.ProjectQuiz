# BRAINS OUT QUIZ

Trivia style quiz app made by the team of 6 for CodersCamp 2020 using HTML, CSS and JavaScript.

## How to run the app on your local device?
1. Install packages with: `npm install`
2. Start the dev server: `npm run start:dev`

App should be running here: [localhost:8765/index.html](localhost:8765/index.html)

## Quiz idea and main structure
App starts with a **welcome screen** where you can set your basic **options** (default nickname, music, clear the leaderboard), check out the authors in **credits** section, see the **leaderboard** (best scores) and most immportantly start the **game** in single or multiplayer (...work in progress) mode.

Our app uses [Open Trivia Database API](https://opentdb.com/)

##  Main screen and its functionalities
Best explained with screenshots:

**Welcome screen**

![quiz main page](./styles/img/readmeimg/screen1.png)

**Options**

Here you can set your default nickname, turn the heartwarming Mario music on or reset leaderboard.

![quiz options](./styles/img/readmeimg/screen2.png)

**Credits**

![quiz credits](./styles/img/readmeimg/screen3.png)

## Quiz categories
After picking game mode from the welcome screen you can pick one of six categories:
1. video games
2. science & nature
3. music
4. history
5. geography
6. general knowledge

![quiz categories](./styles/img/readmeimg/screen4.png)

After accepting your choice you can set some gameplay options.

## Gameplay options
You can choose how many questions you want to answer during your game (between 10 and 50) and set the difficulty level (easy, medium or hard).

![quiz gameplay options](./styles/img/readmeimg/screen5.png)

Accepting gameplay options equals start of the game!

## Quiz game
Here is where the gameplay starts. You are presented with a question and some answers but only one is correct. There are two types of questions: in one you can choose one of four options and in the second one you pick true or false. Every question has its time limit, you can check the timer on the right. During the given time simply click on the answer you choose and after clicking next question will be presented to you automatically.

![quiz gameplay](./styles/img/readmeimg/screen6.png)

When you pick the answer to your final question you'll be shown the result screen.

## Results
On this screen you can check your score and submit your nickname if it's not already set up in basic options or simply change it if you set it up earlier.

![quiz results](./styles/img/readmeimg/screen7.png)

## Leaderboard
All the scores are stored here and you can compare them with others. Three best scores are highlighted so it's all worth fighting for!

![leaderboard](./styles/img/readmeimg/screen8.png)

## Credits
Conceptualized and programmed by:
1. [Kamila Gumkowska](https://github.com/KamilaGumkowska)
2. [Mateusz Łepecki](https://github.com/MateuszLepecki)
3. [Katarzyna Ratajska](https://github.com/kcodex)
4. [Sabina Rusielik](https://github.com/sabinarusielik)
5. [Sebastian Siwek](https://github.com/SebastianSiwek)
6. [Wojciech Tarchalski](https://github.com/tarchal)

and (more than) mentored by: [Szymon Pakuła](https://github.com/Nefariusek)

## Enjoy!