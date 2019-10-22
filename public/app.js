let body = document.querySelector('body')
let lost = false
let won = false
// let clicked = [false, false]
let clicked = []
let getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
let first = document.createElement('button')
first.innerText = "one"
first.addEventListener('click', () => {
    if (won || lost) return
    clicked[0] = true
    if (clicked[0] && clicked[1]) {
        won = true
        document.getElementById('status').innerText = "you won!"
    }
})
body.appendChild(first) 
let second = document.createElement('button') 
second.innerText = "two" 
second.addEventListener('click', () => { 
    if (won || lost) return 
    clicked[1] = true 
    if (clicked[0] && clicked[1]) { 
        won = true 
        document.getElementById('status').innerText = "you won!" 
    } 
}) 
body.appendChild(second) 
// add the function to add the button and update the clicked array
let addButton = (str) => {
    let btObj = document.createElement('button')
    btObj.innerText = str
    btObj.addEventListener('click', () => {
    if (won || lost) return
    clicked.push(true)
    
    if (clicked.every((clik)=> {return clik})) {
        won = true
        document.getElementById('status').innerText = "you won!"
    }
    })
    body.appendChild(btObj) 

}

setTimeout(() => { 
    if (won || lost) return 
    lost = true 
    document.getElementById('status').innerText = "You lost!" 
}, getRndInteger(500, 1300)) 
