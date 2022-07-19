let time = 25;
let timerElement = document.getElementById("timer");
const playBtn = document.getElementsByClassName("play-btn")[0];

timerElement.innerText = time;
let interval;
let checktime;

function executeTimer() {
  if (interval) {
    clearInterval(interval);
    interval = undefined;
  } else {
    interval = setInterval(function () {
      time--;
      timerElement.innerText = time;
      if (timerElement.innerText === "0") {
        clearInterval(interval);
        interval = undefined;
      }
    }, 10);
  }

  if (playBtn.innerText === "Start") {
    playBtn.innerText = "Stop";
  } else {
    playBtn.innerText = "Start";
  }
}
