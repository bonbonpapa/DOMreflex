let status = document.getElementById('status');


let getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function PlayGame()
{
  window.addEventListener("keydown",function(event){
    if(event.defaultPrevented)
    {
      return;
    }
    switch(event.code){
      case "KeyQ":
        status.textContent = 'Player One wins!';
        break;
      case "KeyP":
        status.textContent = 'Player Two wins!';
        break;
    } 

    event.preventDefault();      
    }, true)
  }


function delayStartgame()
{
  setTimeout(PlayGame, getRndInteger(1000, 2000));
}

delayStartgame();

