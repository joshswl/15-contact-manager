class ItemView {
  constructor(contact, store) {
    this.contact = contact;
    this.store = store;
    this.element = document.createElement('div');
    this.element.classList.add('grid-item');
    this.element.innerHTML = `
    <div class="grid__item">
      <div class="item-text">
        <div class="item-text__name">
          <h3 class="item-text__name--last">Lee</h3>
          <h3 class="item-text__name--comma">, </h3>
          <h3 class="item-text__name--first">Josh</h3>
        </div>
        <div class="item-text__address--1">
          <p class="item-text__address--street">1030 Wade Ave</p>
        </div>
        <div class="item-text__address--2">
          <p class="item-text__address--city">Nashville </p>
          <p class="item-text__address--comma">,</p>
          <p class="item-text__address--state">TN</p>
        </div>
      </div>
      <div class="item-button">
        <button class="item-button__actual">Delete</button>
      </div>
    </div>`;
  }

  render() {
    this.element.querySelector('item-text__name').innerText = this.contact.$`{contact.first} {contact.last}`;
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
    contacts.forEach((data) => {
      const view = new ItemView(data.this.store);
      view.render();

      this.element.appendChild(view.element);
    });
  }
}
