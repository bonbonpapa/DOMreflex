let game = document.getElementById("game");
let body = document.body;
let status = document.getElementById("status");

let won = false;
let lost = false;

let buttons = [];

let getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function CreateButton(i) {

  won = false;
  lost = false;

  let numClick = getRndInteger(2, 5);
  

  let btn = document.createElement("button");
  btn.style =
    "font-size: 16px; background-color: #008CBA; padding: 32px 32px; ";

  btn.textContent = "" + numClick;

  btn.addEventListener("click", () => {
    if (won || lost) return;
    buttons[i].clickCount++;
    btn.textContent = "" + (buttons[i].numClick - buttons[i].clickCount);
    let leftPos = getRndInteger(20, 200);
    let topPos = getRndInteger(20, 200);
    btn.style = `position: absolute;  left: ${leftPos}px;   top: ${topPos}px ; font-size: 16px; background-color: #008CBA; padding: 32px 32px; `;

    if (buttons[i].numClick === buttons[i].clickCount)
    {
      btn.remove();
    }

    if (buttons.every((btnobj) => { return btnobj.clickCount >= btnobj.numClick})) {
      won = true;
      status.textContent = "You won the game!";      
      Restart();
    }

  });

  buttons[i] = {
    clickCount: 0,
    numClick: numClick,
  };

  game.appendChild(btn);

  
}

function setTimerGame()
{
    setTimeout(() => {
        if (won || lost) return;
        lost = true;
        status.textContent = "You lost!";     
        Restart();
      }, 2000*buttons.length);
}

function startGame() {

  const numButtons = getRndInteger(2,5);
  for (let i = 0; i < numButtons; i++)
  {
        CreateButton(i);
  }
  
  setTimerGame();
}

function delayStartGame() {
  setTimeout(startGame, getRndInteger(1000, 2000));
}

function start() {
  delayStartGame();
}

function Restart() {
  
  let btnRestart = document.createElement("button");
  btnRestart.style =
    "font-size: 16px; background-color: #008CBA; padding: 32px 32px; ";
  btnRestart.textContent = "Restart";

  btnRestart.addEventListener("click", () => {
    won = false;
    win = false;
    buttons = []
    game.innerHTML = "";
    status.textContent = "";
 
    start();
  });

  game.appendChild(btnRestart);
}




start();
