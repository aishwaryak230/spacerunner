const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbar = document.getElementsByClassName('navbar')[0]
const rightCol = document.getElementsByClassName('right-col')[0]

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active')
    rightCol.classList.toggle('active')
}
)