let body = document.querySelector("body");

let won = false;
let lost = false;

let clickCount = 0;

let getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let addButton = (str) => {
    let btObj = document.createElement('button')
    btObj.innerText = str
    btObj.style = "font-size: 16px; background-color: #008CBA; padding: 32px 32px; ";


    let fClick = () => {
        if (won || lost) return;
        clickCount++;
        btObj.textContent = str;    
      
        if (clickCount === numClick) {
          won = true;
          document.getElementById("status").textContent = "You won the game!";
        }
      };
      
      btObj.addEventListener("click", fClick);
      
      body.appendChild(btObj);

}

let numButton = getRndInteger(2,5);

for (let i = 0; i < numButton; i++)
{
    let numClick = getRndInteger(2, 5);
    addButton(numClick);

}



setTimeout(() => {
  if (won || lost) return;

  lost = true;
  document.getElementById("status").textContent = "You lost!";

}, 2000);


