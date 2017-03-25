import 'whatwg-fetch';
import store from './store';
import AppController from './controller/app';

const appElement = document.querySelector('.app');

const app = new AppController(appElement, store);

app.created();
