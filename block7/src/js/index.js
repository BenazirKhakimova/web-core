import './swiper'
<<<<<<< HEAD

=======
>>>>>>> b757b951dbc1629c0dfa24a7f9ad0fdd7bf046c9
import '../scss/header.scss'
import '../scss/button.scss'
import '../scss/btn-slider.scss'
import '../scss/description.scss'
import '../scss/show-more.scss'
import '../scss/slide.scss'
import '../scss/menu.scss'
<<<<<<< HEAD
=======
import '../scss/tech.scss'
>>>>>>> b757b951dbc1629c0dfa24a7f9ad0fdd7bf046c9
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
<<<<<<< HEAD
let massageCloseBtn = document.querySelector('.massage_close')
let callCloseBtn = document.querySelector('.call_close')
=======
let feedbackCloseBtn = document.querySelector('.feedback_close')
let desktopCloseBtn = document.querySelector('.desktop__btn')
>>>>>>> b757b951dbc1629c0dfa24a7f9ad0fdd7bf046c9

const handleMenu = () => {
  openMenu.addEventListener('click', function () {
    menu.classList.toggle('menu__open')
    menuBg.style.display = 'block'
  })

  closeMenu.addEventListener('click', function () {
    menu.classList.toggle('menu__open')
    menuBg.style.display = 'none'
  })
}
handleMenu()

<<<<<<< HEAD
=======
const showDeskCloseButton = function () {
  if (window.innerWidth >= 768) {
    desktopCloseBtn.style.transform = 'translateX(0)'
    desktopCloseBtn.style.transition = 'transform 0.2s linear'
  }
}
const hideDeskCloseButton = function () {
  if (window.innerWidth >= 768) {
    desktopCloseBtn.style.transform = 'translateX(1000px)'
    desktopCloseBtn.style.transition = 'transform 0.2s linear'
  }
}

>>>>>>> b757b951dbc1629c0dfa24a7f9ad0fdd7bf046c9
const handleFeedbackMenu = () => {
  for (let i = 0; i < btnMassage.length; i++) {
    btnMassage[i].addEventListener('click', function () {
      massageModal.classList.toggle('feedback_open')
      menuBg.style.display = 'block'
      menu.classList.remove('menu__open')

      showDeskCloseButton()
    })
  }

  for (let i = 0; i < btnCall.length; i++) {
    btnCall[i].addEventListener('click', function () {
      callModal.classList.toggle('feedback_open')
      menuBg.style.display = 'block'
      menu.classList.remove('menu__open')

      showDeskCloseButton()
    })
  }

<<<<<<< HEAD
  massageCloseBtn.addEventListener('click', function () {
    massageModal.classList.remove('feedback_open')
    menuBg.style.display = 'none'

    hideDeskCloseButton()
  })
  callCloseBtn.addEventListener('click', function () {
=======
  feedbackCloseBtn.addEventListener('click', function () {
    massageModal.classList.remove('feedback_open')
>>>>>>> b757b951dbc1629c0dfa24a7f9ad0fdd7bf046c9
    callModal.classList.remove('feedback_open')
    menuBg.style.display = 'none'

    hideDeskCloseButton()
  })
}
handleFeedbackMenu()

menuBg.addEventListener('click', function () {
  menu.classList.remove('menu__open')
  massageModal.classList.remove('feedback_open')
  callModal.classList.remove('feedback_open')
  menuBg.style.display = 'none'

  hideDeskCloseButton()
})
