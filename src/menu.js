export default function() {
    const control = document.createElement('div')
    control.classList.add('tabs-control-ctner')

    const welcome = document.createElement('div')
    welcome.textContent = 'Welcome'
    const menu = document.createElement('div')
    menu.textContent = 'Menu'
    const contact = document.createElement('div')
    contact.textContent = 'contact'
    
    control.appendChild(welcome)
    control.appendChild(menu)
    control.appendChild(contact)


    const header = document.createElement('div')
    header.classList.add('content__header')
    const headerText = document.createElement('span')
    headerText.textContent = 'Cocknami restaurant'
    header.appendChild(headerText)


    const menuCtner = document.createElement('div')
    menuCtner.classList.add('menu__ctner')
    for (let i = 0; i < 6; i++) {
        let menuItem = document.createElement('div');
        menuItem.textContent = i + 1;
        menuItem.classList.add('item')
        menuCtner.appendChild(menuItem)
    }


    const content = document.querySelector('#content')
    content.appendChild(control)
    content.appendChild(header)
    content.appendChild(menuCtner)
}