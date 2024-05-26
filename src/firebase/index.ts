import { FirebaseOptions, initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';

let { VITE_FIREBASE_CONFIG, PROD } = import.meta.env;

const firebaseConfig: FirebaseOptions = VITE_FIREBASE_CONFIG
  ? JSON.parse(VITE_FIREBASE_CONFIG)
  : { apiKey: 'MOCK_KEY' };

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app);

if (!PROD) {
  connectAuthEmulator(firebaseAuth, 'http://localhost:9099');
}
