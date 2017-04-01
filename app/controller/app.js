import FormView from '../view/contact-form';
import ListView from '../view/contact-list';

import { findAll } from '../actions';

export default class AppController {
  constructor(element, store) {
    this.element = element;
    this.store = store;
    this.formView = new FormView(element.querySelector('.contact-info'), store);
    this.listView = new ListView(element.querySelector('.grid'), store);
  }
  created() {
    this.store.subscribe(() => {
      const contactlist = this.store.getState().contacts;
      window.localStorage.contacts = JSON.stringify(contactlist);
    });

    this.formView.mounted();
    this.listView.mounted();

    this.store.dispatch(findAll());
  }
}
