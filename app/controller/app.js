import FormView from '../view/contact-form';
import ListView from '../view/contact-list';

// import { findAll } from '../actions';

export default class AppController {
  constructor(element, store) {
    this.element = element;
    this.store = store;
    this.formView = new FormView(element.querySelector('.left-bar'), this.store);
    this.listView = new ListView(element.querySelector('.grid'), this.store);
  }

  created() {
    this.store.subscribe(() => {
      const contacts = this.store.getState().contacts;
      window.localStorage.contacts = JSON.stringify(contacts);
    });

    this.formView.mounted();
    this.listView.mounted();

    const dataString = window.localStorage.contacts || '[]';

    this.store.dispatch({ type: 'CONTACT@FIND_ALL', data: JSON.parse(dataString) });
  }
}
