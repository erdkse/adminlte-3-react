import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const { VITE_FIREBASE_CONFIG } = import.meta.env;

if (!VITE_FIREBASE_CONFIG) {
  throw new Error('Firebase config is missing!');
}

const firebaseConfig = JSON.parse(VITE_FIREBASE_CONFIG);

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app);
