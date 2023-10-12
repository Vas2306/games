const horsces = ["Whait", "Fast", "Black", "Skakun", "Borzyj"];
let raceCounter = 0;
const refs = {
  startBtn: document.querySelector(".js-race-btn"),
  winnerField: document.querySelector(".js-winner"),
  progressField: document.querySelector(".js-progress"),
  tableBody: document.querySelector(".js-result-table > tbody"),
};

refs.startBtn.addEventListener("click", onStart);
function onStart() {
  raceCounter += 1;
  const promises = horsces.map((horse) => run(horse));
  updateWinnerField("");
  updateProgressField("🟥 Забег начался, ставки не принимаются");
  determineWinner(promises);
  waitForAll(promises);
}
function determineWinner(horsesP) {
  Promise.race(horsesP).then(({ horse, time }) => {
    updateWinnerField(`💲🎉 Победил конь ${horse} за время ${time}`);
    updateResultsTable({ horse, time, raceCounter });
  });
}
function waitForAll(horsesP) {
  Promise.all(horsesP).then(() => {
    updateProgressField("🟩 Принимаем новые ставки 🟩");
  });
}

function updateProgressField(message) {
  refs.progressField.textContent = message;
}
function updateWinnerField(message) {
  refs.winnerField.textContent = message;
}
function updateResultsTable({ horse, time, raceCounter }) {
  const tr = `<tr>
      <th>${raceCounter}</th>
      <th>${horse}</th>
      <th>${time}</th>
    </tr>`;
  refs.tableBody.insertAdjacentHTML("beforeend", tr);
}
function run(horse) {
  return new Promise((resolve) => {
    const time = getRandomTime(2000, 3500);
    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
}

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
