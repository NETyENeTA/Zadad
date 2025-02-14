const startBtn = document.getElementById("start");
const h1 = document.getElementById("h1");

let idWaiter;

const MSG = [
  ["Hello a new user!", "Hello, a mr Server"],
  ["Grate see you again!", "I'm too"],
  ["I'm glad. How are you?", "Good, thx, and you?"],
  ["I'm fine, if you asked me :>", "Sounds good!"],
  ["Sorry, I've to go :[", "alright, I wish we meet somehow"],
  ["Good bye, my little frined! :)", "good bye, "],
  ["...", "Maybe anyone is here?"],
  ["Nope, He is Gone ;(", "..., ladno"],
  ["So, please close a website... o'key?", "answer:1, but can I just wait?"],
].reverse();

function waiter() {
  startBtn.textContent = ` Wait: ${
    Number(startBtn.textContent.replace(" Wait: ", "")) + 1
  }`;
}

function closing() {
  clearInterval(idWaiter);
  h1.textContent = "It's didn't work? ah, that's js :|";
  startBtn.textContent = "Okey, I'll close you";
}

startBtn.onclick = (e) => {
  if (!MSG.length) {
    startBtn.textContent = " Wait: 0";
    setTimeout(closing, 4000);
    idWaiter = setInterval(waiter, 1000);
    startBtn.disabled = true;
  }

  let text = MSG.pop();

  startBtn.textContent = text.pop();
  h1.textContent = text.pop();
};
