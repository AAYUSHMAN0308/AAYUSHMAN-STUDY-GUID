// TIMER
let time = 1500;
function startTimer() {
  setInterval(() => {
    let m = Math.floor(time / 60);
    let s = time % 60;
    document.getElementById("timer").innerText =
      m + ":" + (s < 10 ? "0" : "") + s;
    time--;
if (time < 0) {
  alarm.play();
}
  }, 1000);
}

// TASK
function addTask() {
  let input = document.getElementById("taskInput");
  let li = document.createElement("li");
  li.innerText = input.value;
  li.onclick = () => li.remove();
li.onclick = () => {
  li.remove();
  count++;
  updateProgress();
  saveTasks();
};
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

// MOOD
function setMood(m) {
  document.getElementById("mood").innerText = "Mood: " + m;
}

// WATER
function drinkWater() {
  document.getElementById("water").innerText = "Good job 💧";
}

// MODE
function toggleMode() {
  document.body.classList.toggle("light");
}
function saveTasks() {
  let tasks = [];
  document.querySelectorAll("#taskList li").forEach(li => {
    tasks.push(li.innerText);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value;

  if (task === "") return;

  let li = document.createElement("li");
  li.innerText = task;

  li.onclick = () => {
    li.remove();
    saveTasks();
  };

  document.getElementById("taskList").appendChild(li);

  saveTasks();
  input.value = "";
}
loadTasks();
let alarm = new Audio("alarm.mp3");
let count = 0;

function updateProgress() {
  document.getElementById("progress").innerText =
    "Tasks done: " + count;
}
let quotes = [
  "Focus karo 🔥",
  "Success near hai 💯",
  "Hard work pays off 🚀"
];

setInterval(() => {
  let q = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerText = q;
}, 3000);
window.onload = function() {
  document.getElementById("loader").style.display = "none";
};
function newQuote() {
  let quotes = ["Study hard", "Never give up", "Focus karo", "You can do it"];
  let r = Math.floor(Math.random()*quotes.length);
  document.getElementById("quote").innerText = quotes[r];
}