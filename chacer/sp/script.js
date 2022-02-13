'use strict'

const hum = document.getElementsByTagName('span')[0];
const menu = document.getElementsByTagName('nav')[0];

console.log(hum);
console.log(menu);

hum.addEventListener('click',() => {
    hum.classList.toggle('show');
    menu.classList.toggle('show');
    console.log('click')
    }
);