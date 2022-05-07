export default function() {
    const selectedContentCtner = document.createElement('div')
    selectedContentCtner.classList.add('tabs-content-ctner')
    const selectedContent = document.createElement('div')
    selectedContent.classList.add('tabs-content')
    selectedContent.textContent = 'welcome to cocknami! we serve food here, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, magnam. Est magni porro nostrum mollitia delectus at laboriosam quae maiores sint consequuntur sapiente iure fugit, harum hic numquam, provident autem.'
    selectedContentCtner.appendChild(selectedContent)


    const content = document.querySelector('#content')
    content.appendChild(selectedContentCtner)
}