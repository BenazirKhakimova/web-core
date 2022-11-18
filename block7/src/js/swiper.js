let slideItemWrapper = document.querySelector('.brand-wrapper')
let slideTemplate = document.querySelector('#brand-template').content
let slideTemplateItem = slideTemplate.querySelector('.brand-slide')
let brendItemsWrapper = document.querySelector('.brand-row__items')
let techItemsWrapper = document.querySelector('.tech-row__items')
let brendTemplate = document.querySelector('#brand-row__template').content
let brendTemplateItem = brendTemplate.querySelector('.brand__item')
let showMoreBrand = document.querySelector('.show-more-brand__btn')
let showMoreTech = document.querySelector('.show-more-tech__btn')
let showMoreBrandWrapper = document.querySelector('.read-more__brand')
let showMoreTechWrapper = document.querySelector('.read-more__tech')
import Swiper, { Pagination } from 'swiper'

const swiper = new Swiper('.mySwiper', {
  modules: [Pagination],
  spaceBetween: 15,
  slidesPerView: 1.2,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  mousewheel: true,

  breakpoints: {
    370: {
      slidesPerView: 1.6,
      spaceBetween: 20
    },
    480: {
      slidesPerView: 2.2,
      spaceBetween: 20
    },
    560: {
      slidesPerView: 2.5,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 2.6,
      spaceBetween: 25
    }
  }
})

const brendData = [
  './img/lenovo.png',
  './img/samsung.png',
  './img/apple.png',
  './img/viewSonic.png',
  './img/bosch.png',
  './img/hp.png',
  './img/acer.png',
  './img/sony.png',
  './img/samsung.png',
  './img/lenovo.png',
  './img/samsung.png',
  './img/apple.png'
]

const makeSlideItem = (brend) => {
  let newSlide = slideTemplateItem.cloneNode(true)
  let slideImg = newSlide.querySelector('img')
  slideImg.src = brend

  let newBrend = brendTemplateItem.cloneNode(true)
  let brendImg = newBrend.querySelector('img')
  brendImg.src = brend

  slideItemWrapper.appendChild(newSlide)
  brendItemsWrapper.appendChild(newBrend)
}

for (let i = 0; i < brendData.length; i++) {
  makeSlideItem(brendData[i])
}

const showMoreHandle = () => {
  showMoreBrand.addEventListener('click', function () {
    brendItemsWrapper.classList.add('show__more')
    showMoreBrandWrapper.remove()
  })
  showMoreTech.addEventListener('click', function () {
    techItemsWrapper.classList.add('show__more')
    showMoreTechWrapper.remove()
  })
}
showMoreHandle()
