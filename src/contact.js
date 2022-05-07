export default function() {
    const selectedContentCtner = document.createElement('div')
    selectedContentCtner.classList.add('tabs-content-ctner')
    const selectedContent = document.createElement('div')
    selectedContent.classList.add('tabs-content')
    selectedContent.textContent = 'Contact us? dial this number: 727-727-830'
    selectedContentCtner.appendChild(selectedContent)


    const content = document.querySelector('#content')
    content.appendChild(selectedContentCtner)
}