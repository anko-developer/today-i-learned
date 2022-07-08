import axios from 'axios';

// API 설정 공통화
const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

function registerUser(userData) {
  // const url = 'http://localhost:3000/signup';
  // return axios.post(url, userData);
  return instance.post('signup', userData);
}

function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };
