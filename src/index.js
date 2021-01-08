import 'regenerator-runtime/runtime'; //async/await with Parcel
import { App } from './app/App';
import { showDifficultyLevelScreen } from './app/difficultyLevel';

window.onload = () => App({});

const quizSettings = {
    category: 0,
    difficultyLevel: -1,
    numberOfQuestions: 0,
};


showDifficultyLevelScreen(quizSettings);


