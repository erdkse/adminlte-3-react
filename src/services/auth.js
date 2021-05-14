import {Gatekeeper} from 'gatekeeper-client-sdk';

export const loginByAuth = async (email, password) => {
    const token = await Gatekeeper.loginByAuth(email, password);
    localStorage.setItem('token', token);
    document.getElementById('root').classList.remove('login-page');
    document.getElementById('root').classList.remove('hold-transition');
    return token;
};

export const registerByAuth = async (email, password) => {
    const token = await Gatekeeper.registerByAuth(email, password);
    localStorage.setItem('token', token);
    document.getElementById('root').classList.remove('register-page');
    document.getElementById('root').classList.remove('hold-transition');
    return token;
};

export const loginByGoogle = async () => {
    const token = await Gatekeeper.loginByGoogle();
    localStorage.setItem('token', token);
    document.getElementById('root').classList.remove('login-page');
    document.getElementById('root').classList.remove('hold-transition');
    return token;
};

export const registerByGoogle = async () => {
    const token = await Gatekeeper.registerByGoogle();
    localStorage.setItem('token', token);
    document.getElementById('root').classList.remove('register-page');
    document.getElementById('root').classList.remove('hold-transition');
    return token;
};

export const loginByFacebook = async () => {
    const token = await Gatekeeper.loginByFacebook();
    localStorage.setItem('token', token);
    document.getElementById('root').classList.remove('login-page');
    document.getElementById('root').classList.remove('hold-transition');
    return token;
};

export const registerByFacebook = async () => {
    const token = await Gatekeeper.registerByFacebook();
    localStorage.setItem('token', token);
    document.getElementById('root').classList.remove('register-page');
    document.getElementById('root').classList.remove('hold-transition');
    return token;
};
