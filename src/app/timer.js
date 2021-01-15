const TIME_LIMIT = 60;
const WARNING_THRESHOLD = 30;
const ALERT_THRESHOLD = 15;

const COLOR_CODES = {
    info: {
        color: 'green',
    },
    warning: {
        color: 'orange',
        threshold: WARNING_THRESHOLD,
    },
    alert: {
        color: 'red',
        threshold: ALERT_THRESHOLD,
    },
};

let remainingPathColor = COLOR_CODES.info.color;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval;

export function myTimer() {
    function formatTime(timeLeft) {
        let seconds = timeLeft % 60;
        if (seconds < 10) {
            seconds = `0${seconds}`;
        }
        return seconds;
    }
    function startTimer() {
        clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            timePassed = timePassed += 1;
            timeLeft = TIME_LIMIT - timePassed;
            if (timeLeft < 0) {
                return window.location.assign('quiz');
            }
            document.getElementById('timerLabel').innerHTML = formatTime(timeLeft);
            setCircleDasharray();
            setRemainingPathColor(timeLeft);
        }, 1000);
        return;
    }
    function calculateTimeFraction() {
        const rawTimeFraction = timeLeft / TIME_LIMIT;
        return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
    }
    function setCircleDasharray() {
        const circleDasharray = `${(calculateTimeFraction() * 283).toFixed(0)} 283`;
        document.getElementById('timerPathRemaining').setAttribute('stroke-dasharray', circleDasharray);
    }
    function setRemainingPathColor(time) {
        const { alert, warning, info } = COLOR_CODES;
        if (time <= alert.threshold) {
            document.getElementById('timerPathRemaining').classList.remove(warning.color);
            document.getElementById('timerPathRemaining').classList.add(alert.color);
        } else if (time <= warning.threshold) {
            document.getElementById('timerPathRemaining').classList.remove(info.color);
            document.getElementById('timerPathRemaining').classList.add(warning.color);
        }
    }
    function setHTML() {
        document.getElementById('app').innerHTML = `
  <div class = "timerContainer">
    <svg class = "base-timer__svg" viewBox = "0 0 100 100" xmlns = "http://www.w3.org/2000/svg">
      <g class = "timerCircle">
        <circle class = "timerPath" cx = "50" cy = "50" r = "45"></circle>
        <path
          id="timerPathRemaining"
          stroke-dasharray="283"
          class="timerPathRemaining ${remainingPathColor}"
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "></path>
      </g>
    </svg>
    <span id = "timerLabel" class = "timerLabel">
    </span>
  </div>`;
    }
    setHTML();
    startTimer();
}
