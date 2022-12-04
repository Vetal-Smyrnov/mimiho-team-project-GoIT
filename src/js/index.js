window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
  
    if (window.scrollY > 1) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
});
  
/* Book table */

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-book-table]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal-book-table]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("backdrop--hidden");
  }
})();

/* Book room */
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-book-room]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal-book-room]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("backdrop--hidden");
  }
})();

/* Room price */
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-room-price]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal-room-price]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("backdrop--hidden");
  }
})();


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