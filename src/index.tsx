import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from '@app/App';
import store from '@store/store';

import './utils/i18n';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga4';
import { FirebaseOptions } from 'firebase/app';

const { VITE_NODE_ENV, VITE_FIREBASE_CONFIG, VITE_GA_ID } = import.meta.env;

if (!VITE_FIREBASE_CONFIG) {
  throw new Error('Firebase config is missing!');
}

export const firebaseConfig: FirebaseOptions = JSON.parse(VITE_FIREBASE_CONFIG);

if (!VITE_GA_ID) {
  throw new Error('Google Analaytics config is missing!');
}

if (VITE_NODE_ENV === 'production' && VITE_GA_ID) {
  ReactGA.initialize(VITE_GA_ID);
}

const container: any = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
