import { firebaseAuth } from '@app/firebase';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

const provider = new GoogleAuthProvider();

// export const loginByAuth = async (email: string, password: string) => {
//   const token = 'I_AM_THE_TOKEN';
//   localStorage.setItem('token', token);
//   removeWindowClass('login-page');
//   removeWindowClass('hold-transition');
//   return token;
// };

// export const registerByAuth = async (email: string, password: string) => {
//   const token = 'I_AM_THE_TOKEN';
//   localStorage.setItem('token', token);
//   removeWindowClass('register-page');
//   removeWindowClass('hold-transition');
//   return token;
// };

export const registerWithEmail = async (email: string, password: string) => {
  try {
    const result = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    return result;
  } catch (error) {
    throw error;
  }
};

export const loginWithEmail = async (email: string, password: string) => {
  try {
    const result = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    return result;
  } catch (error) {
    throw error;
  }
};

export const signInByGoogle = async () => {
  try {
    return await signInWithPopup(firebaseAuth, provider);
  } catch (error) {
    throw error;
  }
};
