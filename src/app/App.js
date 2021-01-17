import { showDifficultyLevelScreen } from './difficultyLevel';
import { showMainMenu } from './mainPage';
import { showLeaderboardScreen } from './leaderboard'

export const quizSettings = {
    category: 0,
    difficultyLevel: -1,
    numberOfQuestions: 0,
};

export const App = ({}) => {
    // showMainMenu();
    //showDifficultyLevelScreen(quizSettings);
    showLeaderboardScreen();
};
