function initCarousel() {
  // let carouselArrow = document.querySelector('carousel__arrow');
  let carouselArrowRight = document.querySelector('.carousel__arrow_right');
  let carouselArrowLeft = document.querySelector('.carousel__arrow_left');

  let carouselInner = document.querySelector('.carousel__inner');
  let carouselSlide = document.querySelectorAll('.carousel__slide');
  console.log(carouselSlide);
  let offsetWidth = document.querySelector('.carousel__slide').offsetWidth;

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


