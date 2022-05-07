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


    const selectedContentCtner = document.createElement('div')
    selectedContentCtner.classList.add('tabs-content-ctner')
    const selectedContent = document.createElement('div')
    selectedContent.classList.add('tabs-content')
    selectedContent.textContent = 'welcome to cocknami! we serve food here, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, magnam. Est magni porro nostrum mollitia delectus at laboriosam quae maiores sint consequuntur sapiente iure fugit, harum hic numquam, provident autem.'
    selectedContentCtner.appendChild(selectedContent)


    const content = document.querySelector('#content')
    content.appendChild(control)
    content.appendChild(header)
    content.appendChild(selectedContentCtner)
}