let h1 = document.querySelector("#heading-one");
let h2 = document.querySelector("#heading-two");
let link1 = document.querySelector('#link-one');
let link2 = document.querySelector('#link-two');
let link3 = document.querySelector('#link-three');
let p1 = document.querySelector('#p-one');
let p2 = document.querySelector('#p-two');
let p3 = document.querySelector('#p-three');


function init() {
    h1.addEventListener('click', e => {
        h1.style.backgroundColor = 'red';
    })

    h1.addEventListener('mouseout', e => {
        h1.style.backgroundColor = 'white';
    })

    h2.addEventListener('click', e => {
        h2.textContent = "Greetings traveller!";
    })

    document.addEventListener('keydown', e => {
        createPElement(String.fromCharCode(e.keyCode))
    })

    link1.addEventListener('')
}

function createPElement(char) {
    const newP = document.createElement('p');
    newP.textContent = char.toLowerCase();
    document.body.appendChild(newP);
}

init();