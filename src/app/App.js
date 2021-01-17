import { showDifficultyLevelScreen } from './difficultyLevel';
import { showMainMenu } from './mainPage';
import { createGameScreen } from './game';

import { finalScore } from './game';
export const quizSettings = {
    category: 11,
    difficultyLevel: 'easy',
    numberOfQuestions: 20,
};

export const App = ({}) => {
    showMainMenu();
    //showDifficultyLevelScreen(quizSettings);
};
