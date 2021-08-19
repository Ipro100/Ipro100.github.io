const CLOSED_CLASS = 'modal--closed'

function closeModal(modal) {
  modal.classList.add(CLOSED_CLASS)
}

function openModal(modal) {
  modal.classList.remove(CLOSED_CLASS)
  const crossButton = modal.getElementsByClassName('modal__cross')[0]
  crossButton.addEventListener('click', () => closeModal(modalRequest))
}

const modalRequest = document.getElementById('form-request')
const button = document.getElementsByClassName('main-button')[0]

button.addEventListener('click', () => openModal(modalRequest))
