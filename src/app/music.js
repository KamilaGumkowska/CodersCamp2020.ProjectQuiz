import mario from '../music/mario.mp3';
export const music = {
    audio: new Audio(mario),
    state: 1,

    playMusic: () => {
        music.audio.play();
        music.audio.muted = false;
        music.state = 1;
    },
    muteMusic: () => {
        music.audio.muted = true;
        music.state = 0;
    },
};
music.audio.loop = true;
