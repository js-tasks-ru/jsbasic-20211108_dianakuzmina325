import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;

    let menuCategories = createElement(`
    <div class="ribbon">
      <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>

      <nav class="ribbon__inner">
      </nav>

      <button class="ribbon__arrow ribbon__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    </div>
  `);

    this.elem = menuCategories;

    for (let i = 0; i < this.categories.length; i++) {

      this.id = categories[i].id;
      this.name = categories[i].name;

      let category = createElement(`
        <a href="#" class="ribbon__item" data-id="${this.id}">${this.name}</a>
      `);

      menuCategories.querySelector('.ribbon__inner').appendChild(category);

    }

    this.switchCategories();
    this.choiceCategory();
  }

  switchCategories() {
    let ribbonArrowRight = this.elem.querySelector('.ribbon__arrow_right');
    let ribbonArrowLeft = this.elem.querySelector('.ribbon__arrow_left');
    let ribbonInner = this.elem.querySelector('.ribbon__inner');

    ribbonArrowLeft.classList.remove('ribbon__arrow_visible');
    ribbonArrowRight.classList.add('ribbon__arrow_visible');


    ribbonArrowLeft.addEventListener('click', () => {

      ribbonInner.scrollBy(-350, 0);

      ribbonArrowRight.classList.add('ribbon__arrow_visible');

    });

    ribbonInner.addEventListener('scroll', () => {

      let scrollWidth = ribbonInner.scrollWidth;
      let clientWidth = ribbonInner.clientWidth;

      let scrollLeft = ribbonInner.scrollLeft;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;

      if (scrollLeft == 0) {
        ribbonArrowLeft.classList.remove('ribbon__arrow_visible');
        ribbonArrowRight.classList.add('ribbon__arrow_visible');
      } else {
        ribbonArrowLeft.classList.add('ribbon__arrow_visible');
      }

      if (scrollRight < 1) {
        ribbonArrowRight.classList.remove('ribbon__arrow_visible');
        ribbonArrowLeft.classList.add('ribbon__arrow_visible');
      } else {
        ribbonArrowRight.classList.add('ribbon__arrow_visible');
      }

    });

    ribbonArrowRight.addEventListener('click', () => {

      ribbonInner.scrollBy(350, 0);

      ribbonArrowLeft.classList.add('ribbon__arrow_visible');

    });

  }

  choiceCategory() {
    let ribbonItem = this.elem.querySelectorAll('.ribbon__item');

    for (let item of ribbonItem) {
      item.addEventListener('click', (event) => {
        event.preventDefault();

        let activeItem = document.getElementsByClassName('ribbon__item_active');
        if (activeItem.length > 0) {
          activeItem[0].classList.remove('ribbon__item_active');
          item.classList.add('ribbon__item_active');
        } else {
          item.classList.add('ribbon__item_active');
        }

        this.currentId = event.target.closest('[data-id]').getAttribute('data-id');
        this.elem.dispatchEvent(new CustomEvent('ribbon-select', {
          detail: this.currentId,
          bubbles: true
        }));

      })

    }

  }
}