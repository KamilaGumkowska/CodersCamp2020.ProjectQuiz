import { showDifficultyLevelScreen } from './difficultyLevel';
import { showMainMenu } from './mainPage';
import { music } from './music';

export const quizSettings = {
    category: 0,
    difficultyLevel: -1,
    numberOfQuestions: 0,
};

export const App = ({}) => {
    music.playMusic();
    showMainMenu();
};
