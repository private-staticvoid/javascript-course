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

console.log(`Open modal buttons:`, btnsOpenModalEl.length);

const openModal = function () {
  console.log('Open modal');
  // remove hidden class from modal element
  modalEl.classList.remove('hidden');

  // remove hidden class from overlay element
  overlayEl.classList.remove('hidden');
};

btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));

const closeModal = function () {
  // add hidden class to modal element
  modalEl.classList.add('hidden');

  // add hidden class to overlay element
  overlayEl.classList.add('hidden');
};

btnCloseModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);
