import { WSAEAFNOSUPPORT } from "constants";

const status = document.getElementById("status");
const game = document.getElementById("game");
const wins = { p: 0, q: 0 };
let won = "";
let gameStarted = false;

const sounds = {
    signal: new Audio('/static/alarm.mp3')
}

document.addEventListener("keydown", event => {
  const keycode = event.code;
  console.log(keycode);

  if (won !== "" || (keycode !== "KeyP" && keycode !== "KeyQ")) return;
  if (event.code === "KeyP") {
    if (gameStarted) {
      won = "p";
    } else {
      won = "q";
    }
  }
  if (event.code === "KeyQ") {
    won = gameStarted ? "q" : "p";
  }
  // if( won === 'p') wins.p++;
  // if( won === 'q') wins.q++;
  wins[won]++;
  status.textContent = won + "Won the round!";
  if (wins.p < 3 && wins.q < 3) {
    setTimeout(startGame, 1000);
  } else {
    status.textContent = won + "won the game!";
  }
});

function startGame() {
    sounds.signal.pause();
    sounds.signal.currentTime = 0;
    won = "";
  gameStarted = false;
  status.textContent = "";
  setTimeout(() => {
    if (win !== "") return;
    const signal = document.createElement("div");
    signal.textContent = "Go";
    status.appendChild(signal);
    sounds.signal.play();
    gameStarted = true;
  }, getRndInteger(500, 1500));
}
let getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
