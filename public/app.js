let body = document.querySelector('body')
let lost = false
let won = false
let clicked = [false, false]
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
body.appendChild(second)
setTimeout( ()=> {
    if(won || lost) return
    lost = true
    document.getElementById('status').innerText = "you lost!"
},1000)
