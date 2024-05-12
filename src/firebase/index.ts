import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { firebaseConfig } from '..';

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app);
