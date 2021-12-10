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
    this.addProductInCarousel();

    for (let i = 0; i < this.slides.length; i++) {

      this.id = slides[i].id;
      this.name = slides[i].name;
      this.price = slides[i].price.toFixed(2);
      this.img = slides[i].image;

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

      carousel.querySelector('.carousel__inner').appendChild(slide);

    }

    this.switchSlides();

  }

  switchSlides() {
    let carouselArrowRight = this.elem.querySelector('.carousel__arrow_right');
    let carouselArrowLeft = this.elem.querySelector('.carousel__arrow_left');

    let carouselInner = this.elem.querySelector('.carousel__inner');
    console.log(carouselInner);
    let offsetWidth = this.elem.querySelector('.carousel__inner').offsetWidth;
    console.log(offsetWidth);
    let carouselSlide = this.elem.querySelectorAll('.carousel__slide');

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
      position -= offsetWidth;
      carouselArrowLeft.style.display = '';
      if (position == -offsetWidth * (carouselSlide.length - 1)) {
        carouselArrowRight.style.display = 'none';
      }
      carouselInner.style.transform = `translateX(${position}px)`;
    });
  }

  addProductInCarousel() {
    let addProduct = new CustomEvent('product-add', {
      detail: this.id,
      bubbles: true
    });

    let btnAll = this.elem.querySelectorAll('.carousel__button');

    for (let btn of btnAll) {
      btn.addEventListener('click', () => {
        this.elem.dispatchEvent(addProduct);
      })
    }

  }
  
}
