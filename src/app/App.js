import { showDifficultyLevelScreen } from './difficultyLevel';
import { showMainMenu } from './mainPage';
import { showLeaderboardScreen } from './leaderboard'
import { showResults } from './showResults'
import { createGameScreen } from './game';
import { music } from './music';

import { finalScore } from './game';
export const quizSettings = {
    category: 11,
    difficultyLevel: 'easy',
    numberOfQuestions: 20,
};

export const App = ({}) => {

    // showMainMenu();
    //showDifficultyLevelScreen(quizSettings);
    //showResults();
    //showLeaderboardScreen();

    music.playMusic();
    showMainMenu();
};
