import createElement from '../../assets/lib/create-element.js';

export default class Carousel {

  constructor(slides) {

    this.slides = slides;

    let carousel = createElement(`
    <div class="carousel">

      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>

      <div class="carousel__inner"></div>

    </div>
  `);

    this.elem = carousel;
    this.#createSlides();
    this.#switchSlides();
    this.#addProductInCarousel();

  }

  #createSlides() {
    for (let i = 0; i < this.slides.length; i++) {

      this.id = this.slides[i].id;
      this.name = this.slides[i].name;
      this.price = this.slides[i].price.toFixed(2);
      this.img = this.slides[i].image;

      let slide = createElement(`
        <div class="carousel__slide" data-id="${this.id}">
          <img src="/assets/images/carousel/${this.img}"  class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${this.price}</span>
            <div class="carousel__title">${this.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>
      `);

      this.elem.querySelector('.carousel__inner').appendChild(slide);

    }
  }

  #switchSlides() {
    let carouselArrowRight = this.elem.querySelector('.carousel__arrow_right');
    let carouselArrowLeft = this.elem.querySelector('.carousel__arrow_left');

    let carouselInner = this.elem.querySelector('.carousel__inner');
    let carouselSlide = this.elem.querySelectorAll('.carousel__slide');

    let offsetWidth;
    let position = 0;
    carouselArrowLeft.style.display = 'none';

    carouselArrowLeft.addEventListener('click', () => {
      position += offsetWidth;
      carouselArrowRight.style.display = '';
      if (position == 0) {
        carouselArrowLeft.style.display = 'none';
      }
      carouselInner.style.transform = `translateX(${position}px)`;
    });

    carouselArrowRight.addEventListener('click', () => {
      offsetWidth = this.elem.querySelector('.carousel__inner').offsetWidth;
      position -= offsetWidth;
      carouselArrowLeft.style.display = '';
      if (position == -offsetWidth * (carouselSlide.length - 1)) {
        carouselArrowRight.style.display = 'none';
      }
      carouselInner.style.transform = `translateX(${position}px)`;
    });
  }

  #addProductInCarousel() {

    let btnAll = this.elem.querySelectorAll('.carousel__button');

    for (let btn of btnAll) {
      btn.addEventListener('click', (event) => {
        this.currentId = event.target.closest('[data-id]').getAttribute('data-id');
        this.elem.dispatchEvent(new CustomEvent('product-add', {
          detail: this.currentId,
          bubbles: true
        }));
      })
    }

  }

}
