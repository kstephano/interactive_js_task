(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}]},{},[1]);
