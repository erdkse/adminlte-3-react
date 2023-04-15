import {removeWindowClass} from '@app/utils/helpers';
// import {Gatekeeper} from 'gatekeeper-client-sdk';

export const loginByAuth = async (email: string, password: string) => {
  const token = 'I_AM_THE_TOKEN';
  localStorage.setItem('token', token);
  removeWindowClass('login-page');
  removeWindowClass('hold-transition');
  return token;
};

export const registerByAuth = async (email: string, password: string) => {
  const token = 'I_AM_THE_TOKEN';
  localStorage.setItem('token', token);
  removeWindowClass('register-page');
  removeWindowClass('hold-transition');
  return token;
};

export const loginByGoogle = async () => {
  const token = '';
  localStorage.setItem('token', token);
  removeWindowClass('login-page');
  removeWindowClass('hold-transition');
  return token;
};

export const registerByGoogle = async () => {
  const token = '';
  localStorage.setItem('token', token);
  removeWindowClass('register-page');
  removeWindowClass('hold-transition');
  return token;
};

export const loginByFacebook = async () => {
  const token = '';
  localStorage.setItem('token', token);
  removeWindowClass('login-page');
  removeWindowClass('hold-transition');
  return token;
};

export const registerByFacebook = async () => {
  const token = '';
  localStorage.setItem('token', token);
  removeWindowClass('register-page');
  removeWindowClass('hold-transition');
  return token;
};
