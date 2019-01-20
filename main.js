/**
 * Author: Hardi Suputra
 * Author Email: hardisuputra@gmail.com
 * Description: This is for sample create simple static site for timedoor test.
 */
$('.content-hero-image').slick();

var modal = document.querySelector('.chs-modal');
var modalOpacity = document.querySelector('.modal-opacity');
var trigger = document.querySelectorAll('.modal-trigger');
var closeButton = document.querySelector('.modal-close-button');

function toggleModal() {
  event.preventDefault();
  modal.classList.toggle('show-modal');
  modalOpacity.classList.toggle('show');

  var modalContent = document.querySelector('.inner-modal-content');

  var getRel = this.rel;

  if (getRel !== undefined)
    modalContent.innerHTML = '<img src="' + getRel + '" />';
}

function windowOnClick(event) {
  if (event.target === modal || event.target === modalOpacity) {
    toggleModal();
  }
}

for (i = 0; i < trigger.length; i++) {
  (function(i) {
    trigger[i].addEventListener('click', toggleModal, false);
  })(i);
}
closeButton.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);
