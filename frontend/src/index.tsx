import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {Gatekeeper} from 'gatekeeper-client-sdk';
import App from '@app/App';
import store from '@store/store';

import './utils/i18n';
import './index.css';
import * as serviceWorker from './serviceWorker';

declare const window: any;

window.PF = {
  config: {
    mode: 'bs4'
  }
};

Gatekeeper.initialize('08401b7e-da7e-4bf3-a9bf-6f594ae5fb02');

const container: any = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
