// scroll function

const leftIcon = document.querySelector('#left-icon')
const rightIcon = document.querySelector('#right-icon')
const productsArea = document.querySelector('.products-area')

leftIcon.addEventListener('click', () => {
  productsArea.scrollBy({ left: -400, behavior: 'smooth' })
})
rightIcon.addEventListener('click', () => {
  productsArea.scrollBy({ left: 400, behavior: 'smooth' })
})

const mobileOverlay = document.querySelector('.mobile-overlay')
const mobileBar = document.querySelector('.mobile-bars')
const closeBar = document.querySelector('.close-bar')
mobileBar.addEventListener('click', () => {
  mobileOverlay.classList.add('show-mobile-overlay')
})

closeBar.addEventListener('click', () => {
  mobileOverlay.classList.remove('show-mobile-overlay')
})
