import axios from 'axios';
import { toast } from 'react-toastify';

const api = axios.create({
  baseURL: 'https://tranquil-scrubland-52698.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
    'X-Access-Token': localStorage.getItem('token'),
    'X-Refresh-Token': localStorage.getItem('rfToken'),
  },
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    console.error(err);
  }
);

api.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    console.error(err);
    toast.error(err.response.data.message, {
      position: toast.POSITION.BOTTOM_LEFT,
    });
    console.log(err.response.data.message);
  }
);

export default api;
