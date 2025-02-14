function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const TaskTable = document.getElementById("template");
TaskTable.remove();

const TaskList = document.getElementById("task-list");
const AppendBtn = document.getElementById("append");
const PrependBtn = document.getElementById("prepend");

let Msg = [
  ["Name?", "Name...", "Name me, please!"],
  [
    "Attributes?",
    "Some Text...",
    "Yeah, let's GO",
    "post me!",
    "put info into me!",
  ],
];

AppendBtn.onclick = () => {
  let clone = TaskTable.cloneNode(true);
  clone.removeAttribute("id");
  let array = clone.children[0].children;
  for (let i of [0, 1]) {
    array[i].placeholder = Msg[i][randInt(0, Msg[i].length - 1)];
  }
  TaskList.append(clone);
  let DelBtn = clone.children[1];
  DelBtn.onclick = () => {
    DelBtn.parentElement.remove();
  };
};

PrependBtn.onclick = () => {
  let clone = TaskTable.cloneNode(true);
  clone.removeAttribute("id");
  let array = clone.children[0].children;
  for (let i of [0, 1]) {
    array[i].placeholder = Msg[i][randInt(0, Msg[i].length - 1)];
  }
  TaskList.prepend(clone);
  let DelBtn = clone.children[1];
  DelBtn.onclick = () => {
    DelBtn.parentElement.remove();
  };
};


