window.addEventListener('scroll', function () {
  const header = document.querySelector('header');

  if (window.scrollY > 1) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

/* JQuery solution */
$('.js-open-modal').click(function () {
  let modalName = $(this).attr('data-modal');
  let modal = $(`.js-modal[data-modal=${modalName}]`);

  modal.addClass('show');
  $('.modal-overlay').addClass('show');
});

$('.js-close-modal').click(function () {
  $(this).parent('.modal').removeClass('show');
  $('.modal-overlay').removeClass('show');
});

$('.modal-overlay').click(function () {
  $(this).removeClass('show');
  $('.modal.show').removeClass('show');
});
// Navigation arrows
/* Swiper */
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 20,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
    },
    414: {
      slidesPerView: 1.2,
      spaceBetween: 25,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1280: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  mousewheel: {
    sensitivity: 1,
  },
});

new Swiper('.hero-slider', {
  loop: true,
  speed: 1000,

  navigation: {
    nextEl: '.hero-slider__button-next',
    prevEl: '.hero-slider__button-prev',
  },

  mousewheel: {
    sensitivity: 1,
  },
});
