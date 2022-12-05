window.addEventListener('scroll', function () {
  const header = document.querySelector('header');

  if (window.scrollY > 1) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

// /* Book table */

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open-book-table]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal-book-table]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("backdrop--hidden");
//   }
// })();

/* Book room */
// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open-book-room]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal-book-room]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("backdrop--hidden");
//   }
// })();

/* Room price */
// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open-room-price]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal-room-price]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("backdrop--hidden");
//   }
// })();

/* JQuery solution */
// $('.js-open-modal').click(function () {
//  let modalName = $(this).attr('data-modal');
//  let modal = $(`.js-modal[data-modal=${modalName}]`);

//  modal.addClass('show');
//  $('.modal-overlay').addClass('show');
// });

// $('.js-close-modal').click(function () {
//  $(this).parent('.modal').removeClass('show');
//  $('.modal-overlay').removeClass('show');
// });

// $('.modal-overlay').click(function () {
//  $(this).removeClass('show');
//  $('.modal.show').removeClass('show');
// });

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
      spaceBetween: 20,
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
  // Optional parameters
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

// Modal windows
!(function (e) {
  'function' != typeof e.matches &&
    (e.matches =
      e.msMatchesSelector ||
      e.mozMatchesSelector ||
      e.webkitMatchesSelector ||
      function (e) {
        for (
          var t = this,
            o = (t.document || t.ownerDocument).querySelectorAll(e),
            n = 0;
          o[n] && o[n] !== t;

        )
          ++n;
        return Boolean(o[n]);
      }),
    'function' != typeof e.closest &&
      (e.closest = function (e) {
        for (var t = this; t && 1 === t.nodeType; ) {
          if (t.matches(e)) return t;
          t = t.parentNode;
        }
        return null;
      });
})(window.Element.prototype);

document.addEventListener('DOMContentLoaded', function () {
  var modalButtons = document.querySelectorAll('.js-open-modal'),
    overlay = document.querySelector('.js-overlay-modal'),
    closeButtons = document.querySelectorAll('.js-modal-close');

  modalButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      var modalId = this.getAttribute('data-modal'),
        modalElem = document.querySelector(
          '.modal[data-modal="' + modalId + '"]'
        );

      modalElem.classList.add('active');
      overlay.classList.add('active');
    });
  });

  closeButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      var parentModal = this.closest('.modal');

      parentModal.classList.remove('active');
      overlay.classList.remove('active');
    });
  });

  document.body.addEventListener(
    'keyup',
    function (e) {
      var key = e.keyCode;

      if (key == 27) {
        document.querySelector('.modal.active').classList.remove('active');
        document.querySelector('.overlay.active').classList.remove('active');
      }
    },
    false
  );

  overlay.addEventListener('click', function () {
    document.querySelector('.modal.active').classList.remove('active');
    this.classList.remove('active');
  });
});
