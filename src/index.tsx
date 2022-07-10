import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {Gatekeeper} from 'gatekeeper-client-sdk';
import App from '@app/App';
import store from '@store/store';

import './i18n';
import * as serviceWorker from './serviceWorker';

import './index.css';

(window as any).PF = {
  config: {
    mode: 'bs4'
  }
};

Gatekeeper.initialize('0d0805b8-4fc4-4b37-9f86-3af19acf89f8');

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
