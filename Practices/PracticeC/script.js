function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//////////

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const h1 = document.getElementById("h1");

let isStart = false;
let idChanger;
let idDisplay;

let color = {
  current: [0, 0, 0],
  need: [0, 0, 0],
  speed: 1,
};

function changeColor() {
  color.need = [randInt(0, 256), randInt(0, 256), randInt(0, 256)];
}

function setColor() {
  for (i of [0, 1, 2]) {
    if (Math.abs(color.current[i] - color.need[i]) > color.speed)
      color.current[i] +=
        (color.current[i] > color.need[i] ? -1 : 1) * color.speed;
  }

  h1.style.color = `rgb(${color.current.join(",")})`;
  h1.style.backgroundColor = `rgb(${color.current
    .map((value) => {
      return 255 - value;
    })
    .join(",")})`;
}

function toggle() {
  isStart = !isStart;
  startBtn.disabled = isStart;
  stopBtn.disabled = !isStart;
}

startBtn.onclick = () => {
  toggle();
  changeColor();
  idDisplay = setInterval(setColor, 10);
  idChanger = setInterval(changeColor, 1000);
};

stopBtn.onclick = () => {
  toggle();
  clearInterval(idDisplay);
  clearInterval(idChanger);
};
