// this part is for experciese part for other questions.

const foobar = document.getElementById('foobar')

const div1 = document.createElement('div');

const btn1 = document.createElement('button');
const btn2 = document.createElement('button');

const foobar = document.getElementById('foobar');

for (let i =0; i < 20; i++) {
    const btn = document.createElement('button')
    btn.style = 'border: 4px solid red; margin: 20px ';
    btn.textContent = 'click me'
    btn.addEventListener('click', ()=>{
        alert('you clicked #' + i);
    });
    foobar.appendChild(btn);

}

let t = async () => {
    let r = await fetch('https://www.reddit.com/r/montreal.json')
    let b = await r.text()
    console.log(b)
}

let run = async () => {
    await t()
    console.log("hi")
}
run()




fetch('https://www.reddit.com/r/montreal.json')
.then(response => {
    return response.text()
})
.then(body =>{
    console.log(body.text())
})
console.log('hi')

let run = async () => {
    let arr = [
        fetch('https://www.reddit.com/r/montreal.json').then(resp => {return resp.text()}),
        fetch('https://www.reddit.com/r/toronto.json').then(resp => {return resp.text()})
    ]
    let ps = Promise.all(arr)
    let vs = await ps
    vs.forEach(x => {
        console.log(x)
    })
}
run()

[fetch('https://www.reddit.com/r/montreal.json')
.then(resp => {return resp.text()}),
fetch('https://www.reddit.com/r/toronto.json')
.then(resp => {return resp.text()})].forEach(x => { console.log(x)})