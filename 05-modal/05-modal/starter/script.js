// Modal Development Hour 1 - Foundation & Class Toggling
'use strict';

console.log('=== MODAL DEVELOPMENT: FOUNDATION & CLASS TOGGLING ===');

// modal elements
const modalEl = document.querySelector('.modal');

// overlay element
const overlayEl = document.querySelector('.overlay');

// close modal button element
const btnCloseModalEl = document.querySelector('.close-modal');

// open modal button elements
const btnsOpenModalEl = document.querySelectorAll('.show-modal');

//===== click open event listeners =====//

const openModal = function () {
  // remove hidden class from modal element
  modalEl.classList.remove('hidden');

  // remove hidden class from overlay element
  overlayEl.classList.remove('hidden');

  modalEl.focus();
  lastFocusedButton = document.activeElement;
};

let lastFocusedButton = null;

btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));

//===== click close event listeners =====//

const closeModal = function () {
  // add hidden class to modal element
  modalEl.classList.add('hidden');

  // add hidden class to overlay element
  overlayEl.classList.add('hidden');
  if (lastFocusedButton) lastFocusedButton.focus();
};

btnCloseModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);

//===== keyboard event listener =====//

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
    closeModal();
  }
});

modalEl.setAttribute('role', 'dialog');
modalEl.setAttribute('aria-modal', 'true');
btnCloseModalEl.setAttribute('aria-label', 'Close-modal');

//=== end ===//
