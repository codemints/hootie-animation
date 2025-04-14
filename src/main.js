import './main.css'
import './animation-definitions.css'
import './animation-content.css'

let isStarted = false
let isPlaying = false
let isPaused = false
const controlsWrapper = document.querySelector('.animation-controls')
const animationWrappers = Array.from(document.querySelectorAll('.animation-wrapper'))
const animatedItems = Array.from(document.querySelectorAll('.animation-item-wrapper'))
const playButton = controlsWrapper.querySelector('.play-button')
const pauseButton = controlsWrapper.querySelector('.pause-button')
const resetButton = controlsWrapper.querySelector('.reset-button')

if (!isPlaying) {
  pauseButton.setAttribute('disabled', 'disabled')
  resetButton.setAttribute('disabled', 'disabled')
}

playButton.addEventListener('click', (e) => {
  if (isPaused) {
    isPaused = false
    animatedItems.forEach(item => {
      item.style.animationPlayState = 'running'
    })
  }

  isPlaying = true
  isStarted = true
  playButton.setAttribute('disabled', 'disabled')
  pauseButton.removeAttribute('disabled')
  resetButton.removeAttribute('disabled')

  animationWrappers.forEach(wrapper => {
    wrapper.classList.add('animation-animated')
  })
})

pauseButton.addEventListener('click', (e) => {
  if (!isStarted) e.preventDefault()
  isPlaying = false
  isPaused = true
  playButton.removeAttribute('disabled')
  pauseButton.setAttribute('disabled', 'disabled')

  animatedItems.forEach(item => {
    item.style.animationPlayState = 'paused'
  })
})

resetButton.addEventListener('click', (e) => {
  if (!isStarted) e.preventDefault()
  isPlaying = false
  isStarted = false
  isPaused = false
  playButton.removeAttribute('disabled')
  pauseButton.setAttribute('disabled', 'disabled')
  resetButton.setAttribute('disabled', 'disabled')

  animatedItems.forEach(item => {
    item.style.animationPlayState = ''
  })

  animationWrappers.forEach(wrapper => {
    wrapper.classList.remove('animation-animated')
  })
})