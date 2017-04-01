import FormView from '../view/contact-form';
import ListView from '../view/contact-list';

export default class AppController {
  constructor(element, store) {
    this.element = element;
    this.store = store;
    this.formView = new FormView(element.querySelector('.contact-info'), store);
    this.listView = new ListView(element.querySelector('.grid'), store);
  }
  created() {
    this.store.subscribe(() => {
      const contacts = this.store.getState().contacts;
      window.localStorage.contacts = JSON.stringify(contacts);
    });

    this.formView.mounted();
    this.listView.mounted();

    const dataString  = window.localStorage.contacts || '[]';

    this.store.dispatch({
      type: 'CONTACT@FIND_ALL',
      data: JSON.parse(dataString)
    });
  }
}
