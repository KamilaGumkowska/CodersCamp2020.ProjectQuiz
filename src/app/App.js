import { showDifficultyLevelScreen } from './difficultyLevel';
import { showMainMenu } from './mainPage';
import {createGameScreen} from './game';

export const quizSettings = {
    category: 17,
    difficultyLevel: 'hard',
    numberOfQuestions: 20,
};

export const App = ({}) => {
    showMainMenu();
    //showDifficultyLevelScreen(quizSettings);
};
