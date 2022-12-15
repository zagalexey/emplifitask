const defaultBtn = document.querySelector('.btn')
const clickedBtn = document.querySelector('.btn-clicked')
const sidebar = document.querySelector('.sidebar')

const logo = document.querySelector('.logo')

logo.addEventListener('click', onSidebarToggle)
defaultBtn.addEventListener('click', onButtonClick)

function onSidebarToggle() {
    sidebar.style.display === 'none'
        ? (sidebar.style.display = 'flex')
        : (sidebar.style.display = 'none')
}

function onButtonClick() {
    clickedBtn.style.display = 'flex'
    defaultBtn.style.display = 'none'
}
