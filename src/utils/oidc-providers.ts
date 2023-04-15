import {UserManager} from 'oidc-client-ts';

const GOOGLE_CONFIG = {
  authority: 'https://accounts.google.com',
  client_id:
    '533830427279-cspigijdu0g50c7imca5pvdbrcn2buaq.apps.googleusercontent.com',
  client_secret: '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',
  redirect_uri: 'http://localhost:5173/callback',
  scope: 'openid email profile',
  loadUserInfo: true
};

const FACEBOOK_CONFIG = {
  authority: 'https://accounts.google.com',
  client_id:
    '533830427279-cspigijdu0g50c7imca5pvdbrcn2buaq.apps.googleusercontent.com',
  client_secret: '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',
  redirect_uri: 'http://localhost:5173/callback',
  scope: 'openid email profile',
  loadUserInfo: true
};

export const GoogleProvider = new UserManager(GOOGLE_CONFIG);
export const FacebookProvider = new UserManager(FACEBOOK_CONFIG);
