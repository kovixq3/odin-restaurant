export default function() {
    const menuCtner = document.createElement('div')
    menuCtner.classList.add('menu__ctner')
    for (let i = 0; i < 6; i++) {
        let menuItem = document.createElement('div');
        menuItem.textContent = i + 1;
        let menuItemCtner = document.createElement('div');
        menuItemCtner.classList.add('item');
        menuItemCtner.appendChild(menuItem);
        menuCtner.appendChild(menuItemCtner);
    }

    const content = document.querySelector('#content')
    content.appendChild(menuCtner)
}