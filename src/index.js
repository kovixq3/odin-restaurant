import welcome from './welcome.js'
import menu from './menu.js';
import contact from './contact.js';
import './style.css';


const control = document.createElement('div')
control.classList.add('tabs-control-ctner')

const welcomeBtn = document.createElement('div')
welcomeBtn.textContent = 'Welcome'
welcomeBtn.addEventListener('click', () => {
    removeChild();
    welcome();
    welcomeBtn.classList.add('selected')
})

const menuBtn = document.createElement('div')
menuBtn.textContent = 'Menu'
menuBtn.addEventListener('click', () => {
    removeChild();
    menu();
    menuBtn.classList.add('selected')
})

const contactBtn = document.createElement('div')
contactBtn.textContent = 'contact'
contactBtn.addEventListener('click', () => {
    removeChild();
    contact();
    contactBtn.classList.add('selected')
})

control.appendChild(welcomeBtn)
control.appendChild(menuBtn)
control.appendChild(contactBtn)


const headerContent = document.createElement('div')
headerContent.classList.add('content__header')
const headerContentText = document.createElement('span')
headerContentText.textContent = 'Cocknami restaurant'
headerContent.appendChild(headerContentText)

const header = document.querySelector('#header')

header.appendChild(control)
header.appendChild(headerContent)

function removeChild() {
    const content = document.querySelector('#content')
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    for (let index = 0; index < control.childNodes.length; index++) {
        control.childNodes[index].classList.remove('selected')
    }
}

welcome()
welcomeBtn.classList.add('selected')