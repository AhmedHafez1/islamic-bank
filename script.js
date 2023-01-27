'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btnModal =>
  btnModal.addEventListener('click', openModal)
);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const message = document.createElement('h1');
const re = document.createElement('h2');

message.innerHTML =
  'Helloooooooooooooooooooo <button class="btn btn-delete"> Delete </button>';

re.textContent = 'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH';

const header = document.querySelector('.header');

header.before(message);
header.before(re);

const deleteBtn = document.querySelector('.btn-delete');

const removeMessage = () => {
  message.remove();
};

deleteBtn.addEventListener('click', removeMessage);

message.style.backgroundColor = 'yellow';

message.style.height = '100px';

document.documentElement.style.setProperty('--color-primary', 'magenta');
