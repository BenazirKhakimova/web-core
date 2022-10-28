var swiper = new Swiper(".mySwiper", {
  spaceBetween: 15,
  slidesPerView: 1.2,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,

  breakpoints: {
    // when window width is >= 320px
    370: {
      slidesPerView: 1.6,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    560: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2.6,
      spaceBetween: 25,
    },
  },
});

const brendData = [
  "./assets/img/lenovo.png",
  "./assets/img/samsung.png",
  "./assets/img/apple.png",
  "./assets/img/viewSonic.png",
  "./assets/img/bosch.png",
  "./assets/img/hp.png",
  "./assets/img/acer.png",
  "./assets/img/sony.png",
  "./assets/img/samsung.png",
  "./assets/img/lenovo.png",
  "./assets/img/samsung.png",
  "./assets/img/apple.png",
];

let slideItemWrapper = document.querySelector(".swiper-wrapper");
let slideTemplate = document.querySelector("#slide-template").content;
let slideTemplateItem = slideTemplate.querySelector(".swiper-slide");
let brendItemsWrapper = document.querySelector(".brend__items");
let brendTemplate = document.querySelector("#brend__template").content;
let brendTemplateItem = brendTemplate.querySelector(".brend__item");
let showMore = document.querySelector(".show__more__btn");

const makeSlideItem = (brend) => {
  let newSlide = slideTemplateItem.cloneNode(true);
  let slideImg = newSlide.querySelector("img");
  slideImg.src = brend;

  let newBrend = brendTemplateItem.cloneNode(true);
  let brendImg = newBrend.querySelector("img");
  brendImg.src = brend;

  slideItemWrapper.appendChild(newSlide);
  brendItemsWrapper.appendChild(newBrend);
};

for (let i = 0; i < brendData.length; i++) {
  makeSlideItem(brendData[i]);
}

const showMoreHandle = () => {
  showMore.addEventListener("click", function () {
    brendItemsWrapper.classList.add("show__more");
  });
};
showMoreHandle();
