export default class AppController {
  constructor(el, store) {
    this.el = el;
    this.store = store;
  }
  created() {
    this.store.subscribe(() => {
      const contacts = this.store.getState().contacts;
      window.localStorage.contacts = JSON.stringify(contacts);
    });
  }
}
