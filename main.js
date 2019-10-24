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