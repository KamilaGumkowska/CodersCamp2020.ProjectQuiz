import { showDifficultyLevelScreen } from './difficultyLevel';
import { showMainMenu } from './mainPage';
import {createGameScreen} from './game';

export const quizSettings = {
    category: 0,
    difficultyLevel: -1,
    numberOfQuestions: 0,
};

export const App = ({}) => {
    showMainMenu();
    //showDifficultyLevelScreen(quizSettings);
    createGameScreen();
};
