let body = document.querySelector('body')
let lost = false
let won = false
// let clicked = [false, false]
let clicked = []
let getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }



// add the function to add the button and update the clicked array
let addButton = (str) => {
    let btObj = document.createElement('button')
    btObj.innerText = str
    clicked.push(false)
    btObj.addEventListener('click', () => {
    if (won || lost) return
    
    clicked.pop()

    if (clicked.length === 0) {
        won = true
        document.getElementById('status').innerText = "you won!"
    }
    })
    body.appendChild(btObj) 

}

// clicked.every((val) => {return val})

let numButton = getRndInteger(2,5);

for (let i = 0; i < numButton; i++)
{
    addButton(i);
}




setTimeout(() => { 
    if (won || lost) return 
    lost = true 
    document.getElementById('status').innerText = "You lost!" 
}, getRndInteger(1000, 2000)) 
