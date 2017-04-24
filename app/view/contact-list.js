import { remove } from '../actions';

class ItemView {
  constructor(contact, store) {
    this.contact = contact;
    this.store = store;

    this.element = document.createElement('div');
    this.element.classList.add('grid__item');
    this.element.innerHTML = `
    <div class="card">
      <div class="item-text">
        <h1 class="item-text__name"></h1>
        <div class="item-text__address--1">
          <p class="item-text__address--street"></p>
        </div>
        <div class="item-text__address--2">
          <p class="item-text__address--city"></p>
          <p class="item-text__address--state"></p>
        </div>
      </div>
      <div class="item-button">
        <button class="item-button__actual">Delete</button>
      </div>
    </div>`;
  }

  mounted() {
    this.element.querySelector('.item-button__actual').addEventListener('click', () => {
      this.store.dispatch(remove(this.contact.id));
    });
  }

  render() {
    this.element.querySelector('.item-text__name').innerText = `${this.contact.last}, ${this.contact.first}`;
    this.element.querySelector('.item-text__address--street').innerText = this.contact.street;
    this.element.querySelector('.item-text__address--city').innerText = `${this.contact.city}`;
    this.element.querySelector('.item-text__address--state').innerText = `${this.contact.state}`;
  }
}

export default class ListView {
  constructor(element, store) {
    this.element = element;
    this.store = store;
  }

  mounted() {
    this.store.subscribe(() => {
      this.render();
    });
  }

  render() {
    this.element.innerHTML = '';
    const contacts = this.store.getState().contacts;
    console.log(contacts);

    contacts.forEach((data) => {
      const view = new ItemView(data, this.store);
      view.mounted();
      view.render();

      this.element.appendChild(view.element);
    });
  }
}
