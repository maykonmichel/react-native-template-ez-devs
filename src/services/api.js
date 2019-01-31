import axios from 'axios';

export default () =>
  axios.create({
    baseURL: 'api.com/',
    timeout: 8000
  });
