import {Gatekeeper} from 'gatekeeper-client-sdk';

import axios from '../utils/axios';
import {addFacebookScript} from '../utils/social-auth-scripts';

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

const asyncFacebookGetLoginStatus = () => {
    return new Promise((resolve, reject) => {
        addFacebookScript()
            .then(() => {
                const params = {
                    appId: '243170807046422',
                    cookie: false,
                    xfbml: false,
                    version: 'v3.2'
                };
                window.FB.init(params);
                window.FB.getLoginStatus((data) => {
                    if (data.status === 'connected') {
                        resolve(data.authResponse.accessToken);
                    }
                    resolve(null);
                });
            })
            .catch(() => reject(new Error('ADD_SCRIPT_ERROR')));
    });
};

const asyncFacebookLogin = () => {
    return new Promise((resolve, reject) => {
        window.FB.login(
            (data) => {
                if (data.status === 'connected') {
                    resolve(data.authResponse.accessToken);
                }
                reject(new Error('FACEBOOK_ERROR'));
            },
            {scope: 'email'}
        );
    });
};

export const loginByFacebook = () => {
    return asyncFacebookGetLoginStatus()
        .then((accessToken) => {
            if (accessToken) {
                return Promise.resolve(accessToken);
            }
            return asyncFacebookLogin();
        })
        .then((accessToken) => {
            return axios.post('/v1/facebook/login', {
                accessToken
            });
        })
        .then((response) => {
            localStorage.setItem('token', response.data.token);
            document.getElementById('root').classList.remove('login-page');
            document.getElementById('root').classList.remove('hold-transition');
            return Promise.resolve(response.data.token);
        });
};

export const registerByFacebook = () => {
    return asyncFacebookGetLoginStatus()
        .then((accessToken) => {
            if (accessToken) {
                return Promise.resolve(accessToken);
            }
            return asyncFacebookLogin();
        })
        .then((accessToken) => {
            return axios.post('/v1/facebook/register', {
                accessToken
            });
        })
        .then((response) => {
            localStorage.setItem('token', response.data.token);
            document.getElementById('root').classList.remove('register-page');
            document.getElementById('root').classList.remove('hold-transition');
            return Promise.resolve(response.data.token);
        });
};
