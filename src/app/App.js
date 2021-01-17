import { showDifficultyLevelScreen } from './difficultyLevel';
import { showMainMenu } from './mainPage';
import { showResults } from './showResults'

export const quizSettings = {
    category: 0,
    difficultyLevel: -1,
    numberOfQuestions: 0,
};

export const App = ({}) => {
    // showMainMenu();
    //showDifficultyLevelScreen(quizSettings);
    showResults();
};