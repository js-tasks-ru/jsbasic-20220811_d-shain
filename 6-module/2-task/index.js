import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.product = product;

    const div = createElement(`
      <div class="card">
        <div class="card__top">
          <img src="/assets/images/products/${this.product.image}" class="card__image" alt="product">
          <span class="card__price">€${this.product.price.toFixed(2)}</span>
        </div>
        <div class="card__body">
          <div class="card__title">${this.product.name}</div>
          <button type="button" class="card__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
    `);

    this.elem = div;

    this.elem.addEventListener('click', event => {
      if (event.target.parentNode.className == "card__button") {
        let myEvent = new CustomEvent('product-add', {
          detail: this.product.id,
          bubbles: true,
          });
        this.elem.dispatchEvent( myEvent );
        }
      
      });

    this.elem.addEventListener('product-add', event => {
        
    });
  }
}