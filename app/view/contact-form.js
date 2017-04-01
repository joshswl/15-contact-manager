import { create } from '../actions.js';

export default class ContactFormView {
  constructor(element, store) {
    this.element = element;
    this.store = store;
  }

  mounted() {
    this.element.addEventListener('submit', (event) => {
      event.preventDefault();

      this.store.dispatch(create({
        first: this.element.querySelector('.first-name').value,
        last: this.element.querySelector('.last-name').value,
        street: this.element.querySelector('.street').value,
        city: this.element.querySelector('.city').value,
        state: this.element.querySelector('.state').value,
      }));

      this.element.querySelector('.first-name').value = '';
      this.element.querySelector('.last-name').value = '';
      this.element.querySelector('.street').value = '';
      this.element.querySelector('.city').value = '';
      this.element.querySelector('.state').value = '';
    });
  }
}
