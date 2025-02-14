const inputs = document.getElementsByName("time");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");

const clock = {
  hours: inputs[0],
  minutes: inputs[1],
  seconds: inputs[2],
};

let idMouseDown;

for (input of inputs) {
  // Disable any key in Inputs if it isn't a number
  input.onkeypress = (e) => {
    if ("0123456789".indexOf(e.key) == -1) return false;
  };

  // Adding clear Function
  let self = input;
  input.addEventListener("mousedown", () => {
    idMouseDown = setTimeout(() => {
      self.value = "";
    }, 300);
  });

  input.addEventListener("mouseup", (e) => {
    clearTimeout(idMouseDown);
  });
}

delete inputs;

/////////////////////////

let time;
let idTimer;

function toInt(number) {
  let result = Number(number.value);
  if (Number.isNaN(result)) return 0;
  if (result < 0) return Math.abs(result);
  return result;
}

function getTime(clock) {
  return (
    toInt(clock.hours) * 3600000 +
    toInt(clock.minutes) * 60000 +
    toInt(clock.seconds) * 1000
  );
}

function startTimer() {
  time = new Date(getTime(clock) + new Date().getTime() + 1000);

  startBtn.disabled = true;
  stopBtn.disabled = false;

  clock.hours.disabled = true;
  clock.minutes.disabled = true;
  clock.seconds.disabled = true;

  idTimer = setInterval(timer, 1000);
}

/////////////////////////

function getNormalTime(milliseconds) {
  let result = {
    hours: Math.floor((milliseconds % 216000000) / 3600000),
    minutes: Math.floor((milliseconds % 3600000) / 60000),
    seconds: Math.floor((milliseconds % 60000) / 1000),
  };
  return result;
}

function getNormalZeros(value) {
  if (value === 0) return "";
  if (value < 0) return "00";
  if (value < 10) return `0${value}`;
  return value;
}

function timer() {
  let rawTime = time.getTime() - new Date().getTime();
  let currentTime = getNormalTime(rawTime);
  clock.hours.value = getNormalZeros(currentTime.hours);
  clock.minutes.value = getNormalZeros(currentTime.minutes);
  clock.seconds.value = getNormalZeros(currentTime.seconds);
  if (rawTime <= 1000) stopTimer();
}

/////////////////////////

function stopTimer() {
  startBtn.disabled = false;
  stopBtn.disabled = true;

  clock.hours.disabled = false;
  clock.minutes.disabled = false;
  clock.seconds.disabled = false;

  clearInterval(idTimer);
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
