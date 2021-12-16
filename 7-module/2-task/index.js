import createElement from '../../assets/lib/create-element.js';

export default class Modal {

  constructor() {
    let templateModal = createElement(`
    <div class="modal">
    <!--Прозрачная подложка перекрывающая интерфейс-->
    <div class="modal__overlay"></div>
​
    <div class="modal__inner">
      <div class="modal__header">
        <!--Кнопка закрытия модального окна-->
        <button type="button" class="modal__close">
          <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
        </button>
​
        <h3 class="modal__title">
          Вот сюда нужно добавлять заголовок
        </h3>
      </div>
​
      <div class="modal__body">
        A сюда нужно добавлять содержимое тела модального окна
      </div>
    </div>
​
  </div>
 `)
    this.templateModal = templateModal;
  }

  open() {
    document.body.appendChild(this.templateModal);
    document.body.classList.add('is-modal-open');

    let buttonClose = this.templateModal.querySelector('.modal__close');

    buttonClose.addEventListener('click', () => {
      this.close();
    });
    document.addEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = () => {
    if (event.code == 'Escape') {
      this.close();
    }

    document.removeEventListener('keydown', this.onKeyDown);
  }

  setTitle(modalTitle) {
    this.templateModal.querySelector('.modal__title').textContent = modalTitle;
  }

  setBody(node) {
    this.templateModal.querySelector('.modal__body').innerHTML = '';
    this.templateModal.querySelector('.modal__body').appendChild(node);
  }

  close() {
    document.querySelector('.modal').outerHTML = "";
    document.body.classList.remove('is-modal-open');
  }

}