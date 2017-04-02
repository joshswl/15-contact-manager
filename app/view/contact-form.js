import { create } from '../actions.js';

export default class ContactFormView {
  constructor(element, store) {
    this.element = element;
    this.store = store;
  }

  mounted() {
    this.element.addEventListener('submit', (event) => {
      event.preventDefault();

      const data = {
        first: this.element.querySelector('.item-text__name--first').value,
        last: this.element.querySelector('.item-text__name--last').value,
        street: this.element.querySelector('.item-text__address--street').value,
        city: this.element.querySelector('.item-text__address--city').value,
        state: this.element.querySelector('.item-text__address--state').value,
      };

      this.store.dispatch(create(data));

      this.element.querySelector('.item-text__name--first').value = '';
      this.element.querySelector('.item-text__name--last').value = '';
      this.element.querySelector('.item-text__address--street').value = '';
      this.element.querySelector('.item-text__address--city').value = '';
      this.element.querySelector('.item-text__address--state').value = '';
    });
  }
}
