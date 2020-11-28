import axios from 'axios';
import store from '../store/index';
import * as ActionTypes from '../store/actions';

const intance = axios.create({
    baseURL: `${process.env.REACT_APP_GATEKEEPER_URL}`
});

intance.interceptors.request.use(
    (request) => {
        const {token} = store.getState().auth;
        if (token) {
            request.headers.Authorization = `Bearer ${token}`;
        }
        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
);

intance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response.data.status === 401) {
            store.dispatch({type: ActionTypes.LOGOUT_USER});
        }
        return Promise.reject(error);
    }
);

export default intance;
