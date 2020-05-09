import axios from 'axios';

const intance = axios.create({
  baseURL: `${process.env.REACT_APP_GATEKEEPER_URL}`
});

if (localStorage.getItem('token')) {
  intance.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
    'token'
  )}`;
}

intance.interceptors.request.use(
  (request) => {
    const token = localStorage.getItem('token');
    if (token) {
      intance.defaults.headers.common.Authorization = `Bearer ${token}`;
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
    return Promise.reject(error);
  }
);

export default intance;
