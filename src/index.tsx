import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import App from '@app/App';
import store from '@store/store';

import './utils/i18n';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {GoogleProvider} from '@app/utils/oidc-providers';
import {setAuthentication} from '@app/store/reducers/auth';

declare const window: any;

window.PF = {
  config: {
    mode: 'bs4'
  }
};

const oidcConfig = {
  authority: 'https://accounts.google.com',
  client_id:
    '533830427279-cspigijdu0g50c7imca5pvdbrcn2buaq.apps.googleusercontent.com',
  client_secret: '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',
  redirect_uri: 'http://localhost:5173/callback'
  // ...
};

GoogleProvider.getUser().then((response) => {
  store.dispatch(setAuthentication(response));
});

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
