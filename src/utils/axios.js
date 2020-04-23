import axios from 'axios';

const intance = axios.create({
  baseURL: `${process.env.REACT_APP_GATEKEEPER_URL}`
});

if (localStorage.getItem('token')) {
  intance.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`;
}

axios.interceptors.request.use(
  (request) => {
    if (localStorage.getItem('token')) {
      intance.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default intance;
