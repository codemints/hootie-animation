import './style.css'
import './clouds.css'
import './clouds.js'

let isAnimating = false
const animateButton = document.querySelector('.animate-button')
const animateWrapper = document.querySelector('.hootie-animation-wrapper')

animateButton.addEventListener('click', () => {
  if (!isAnimating) {
    animateWrapper.classList.add('animation-animated')
    animateButton.innerText = "Un-animate"
    isAnimating = true
  } else {
    animateWrapper.classList.remove('animation-animated')
    animateButton.innerText = "Animate"
    isAnimating = false
  }
})