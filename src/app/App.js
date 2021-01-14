import { showDifficultyLevelScreen } from './difficultyLevel';
import { showMainMenu } from './mainPage';
import {createGameScreen} from './game';

export const quizSettings = {
    category: 11,
    difficultyLevel: 'hard',
    numberOfQuestions: 20,
};

export const App = ({}) => {
    showMainMenu();
    //showDifficultyLevelScreen(quizSettings);
};
