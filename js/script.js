// 1. Places buttons of slider
let btnLeft = document.querySelector('.btn--left')
let btnRight = document.querySelector('.btn--right')
let box = document.querySelector('.container__btn')

let translate = btnLeft.offsetWidth / 2

btnLeft.style.left = -translate + 'px'
btnLeft.style.top = box.offsetHeight / 2 -translate + 'px'
btnRight.style.top = box.offsetHeight / 2 -translate + 'px'
btnRight.style.right = -translate + 'px'


// 2. (Main part) Makes slider work
function toggleBtnVisibility() {
  if (position == -trackLength) {
    btnRight.classList.add('btn--disabled')
  } else if (position == 0) {
    btnLeft.classList.add('btn--disabled')
  } else {
    btnRight.classList.remove('btn--disabled')
    btnLeft.classList.remove('btn--disabled')
  }
}

let track = document.querySelector('.track')
let position = 0
let count = 6
let trackLength = 1000 * (count - 1)

toggleBtnVisibility()

box.addEventListener('click', function(event) {
  let target = event.target.closest('button')
  if (!target) return

  if (target.classList.contains("btn--right")) {
    position -= 1000
    position = Math.max(position, -trackLength)
    track.style.left = position + 'px'
    toggleBtnVisibility()
    } else if (target.classList.contains("btn--left")) {
    position += 1000
    position = Math.min(position, 0)
    track.style.left = position + 'px'
    toggleBtnVisibility()
  }
})


// 3. Places progressBar for slider
let images = track.querySelectorAll('.slider__img')
let progress = track.querySelectorAll('.progress')

for (let i = 0; i < images.length; i++) {
  let span = images[i].firstElementChild

  images[i].dataset.progress = `${i + 1}/${images.length}`
  span.innerHTML = `${i + 1} / ${images.length}`

  let top = images[i].offsetHeight - span.offsetHeight - 20
  let left = images[i].offsetWidth - span.offsetWidth - 20

  span.style.top = top + 'px'
  span.style.left = left + 'px'
}





