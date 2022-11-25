import './swiper'
import '../scss/header.scss'
import '../scss/button.scss'
import '../scss/btn-slider.scss'
import '../scss/description.scss'
import '../scss/show-more.scss'
import '../scss/slide.scss'
import '../scss/menu.scss'
import '../scss/prices.scss'
import '../scss/footer.scss'
import '../scss/feedback.scss'

let menu = document.querySelector('.menu__wrapper')
let openMenu = document.querySelector('.nav__btn_menu_open')
let closeMenu = document.querySelector('.menu__button_close')
let menuBg = document.querySelector('.menu-bg')
let btnCall = document.getElementsByClassName('btn__call')
let btnMassage = document.getElementsByClassName('btn__massage')
let massageModal = document.querySelector('.massage-modal')
let callModal = document.querySelector('.call-modal')
let massageCloseBtn = document.querySelector('.massage_close')
let callCloseBtn = document.querySelector('.call_close')

const dontScrollBody = () => {
  document.body.style.position = 'fixed'
  document.body.style.top = `-${window.scrollY}px`
}
const scrollBody = () => {
  const scrollY = document.body.style.top
  document.body.style.position = ''
  document.body.style.top = ''
  window.scrollTo(0, parseInt(scrollY || '0') * -1)
}

const handleMenu = () => {
  openMenu.addEventListener('click', function () {
    menu.classList.toggle('menu__open')
    menuBg.style.display = 'block'
    dontScrollBody()
  })

  closeMenu.addEventListener('click', function () {
    menu.classList.toggle('menu__open')
    menuBg.style.display = 'none'
    scrollBody()
  })
}
handleMenu()

const handleFeedbackMenu = () => {
  for (let i = 0; i < btnMassage.length; i++) {
    btnMassage[i].addEventListener('click', function () {
      massageModal.classList.toggle('feedback_open')
      menuBg.style.display = 'block'
      menu.classList.remove('menu__open')
      dontScrollBody()
    })
  }

  for (let i = 0; i < btnCall.length; i++) {
    btnCall[i].addEventListener('click', function () {
      callModal.classList.toggle('feedback_open')
      menuBg.style.display = 'block'
      menu.classList.remove('menu__open')
      dontScrollBody()
    })
  }

  massageCloseBtn.addEventListener('click', function () {
    massageModal.classList.remove('feedback_open')
    menuBg.style.display = 'none'
    scrollBody()
  })
  callCloseBtn.addEventListener('click', function () {
    callModal.classList.remove('feedback_open')
    menuBg.style.display = 'none'
    scrollBody()
  })
}
handleFeedbackMenu()

menuBg.addEventListener('click', function () {
  menu.classList.remove('menu__open')
  massageModal.classList.remove('feedback_open')
  callModal.classList.remove('feedback_open')
  menuBg.style.display = 'none'
  scrollBody()
})
