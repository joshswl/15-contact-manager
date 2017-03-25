export default class AppController {
  constructor(element, store) {
    this.element = element;
    this.store = store;
  }
  created() {
    this.store.subscribe(() => {
      const contacts = this.store.getState().contacts;
      window.localStorage.contacts = JSON.stringify(contacts);
    });
  }
}
