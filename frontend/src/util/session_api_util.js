import axios from 'axios';

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
  axios.defaults.baseURL = 'http://localhost:5001';
};

export const signup = (userData) => {
  debugger;
  axios.defaults.baseURL = 'http://localhost:5001';
  return axios.post('/api/users/register', userData);
};

export const login = (userData) => {
  axios.defaults.baseURL = 'http://localhost:5001';
  return axios.post('/api/users/login', userData);
};

