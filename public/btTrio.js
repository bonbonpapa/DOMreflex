

let body = document.querySelector("body");

let won = false;
let lost = false;

let clickCount = 0;

let getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let numClick = getRndInteger(2, 5);
let timeButtonAppear = getRndInteger(50, 1000);

let btn = document.createElement("button");
btn.style = "font-size: 16px; background-color: #008CBA; padding: 32px 32px; ";

btn.textContent = "" + numClick;

let btnRestart = document.createElement("button");
btnRestart.style =
  "font-size: 16px; background-color: #008CBA; padding: 32px 32px; ";

btnRestart.textContent = "Restart";

let fClick = () => {
  if (won || lost) return;
  clickCount++;
  btn.textContent = "" + (numClick - clickCount);
  let leftPos = getRndInteger(20,200);
  let topPos = getRndInteger(20,200); 
  btn.style = `position: absolute;  left: ${leftPos}px;   top: ${topPos}px ; font-size: 16px; background-color: #008CBA; padding: 32px 32px; `;

  if (clickCount === numClick) {
    won = true;
    document.getElementById("status").textContent = "You won the game!";
  }
};

btn.addEventListener("click", fClick);



body.appendChild(btn);

setTimeout(() => {
  if (won || lost) return;

  lost = true;
  document.getElementById("status").textContent = "You lost!";

}, 2000);


btnRestart.addEventListener("click", () => {
  won = false;
  win = false;
  clickCount = 0;

  document.location.href = "";

});
body.appendChild(btnRestart);


