import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {

  constructor(product) {

    this.product = product;

    for (let key in product) {
      this.id = product.id;
      this.name = product.name;
      this.price = product.price.toFixed(2);
      this.img = product.image;
    }

    const productCard = createElement(`
        <div class="card">
          <div class="card__top">
            <img src="/assets/images/products/${this.img}"       class="card__image" alt="product">
            <span class="card__price">€${this.price}</span>
        </div>
        <div class="card__body">
            <div class="card__title">${this.name}</div>
            <button type="button" class="card__button">
                <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>
    `);

    this.elem = productCard;
    this.addEventProduct();

  }

  addEventProduct() {
    let addProduct = new CustomEvent('product-add', {
      detail: this.product.id,
      bubbles: true
    });

    let btnAll = this.elem.querySelectorAll('.card__button');

    for (let btn of btnAll) {
      btn.addEventListener('click', () => {
        this.elem.dispatchEvent(addProduct);
      })
    }
  }

}